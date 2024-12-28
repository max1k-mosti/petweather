import { IPApiConfig, WeatherAPIConfig } from './api.config'

interface RequestOptions {
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
	body?: Record<string, any>
	params?: Record<string, string | number>
	headers?: Record<string, string>
}

class ApiClient {
	private baseUrl: string
	private apiKey?: string

	constructor(baseUrl: string, apiKey?: string) {
		this.baseUrl = baseUrl
		this.apiKey = apiKey
	}

	private buildURL(
		endpoint: string,
		params?: Record<string, string | number>
	) {
		let url = `${this.baseUrl}${endpoint}`

		if (this.apiKey) {
			url += `?appid=${this.apiKey}`
		}
		if (params) {
			const queryParams = new URLSearchParams(
				params as Record<string, string>
			)
			url += `&${queryParams}`.toString()
		}
		return url
	}

	async request<T>(
		endpoint: string,
		{ method = 'GET', body, headers = {}, params }: RequestOptions
	): Promise<T> {
		const url = this.buildURL(endpoint, params)

		const config: RequestInit = {
			method,
			headers: {
				...headers
			}
		}

		if (method !== 'GET' && body) {
			config.body = JSON.stringify(body)
		}

		try {
			const response = await fetch(url, config)

			if (!response.ok) {
				const errorData = await response.json()
				throw new Error(errorData.message || 'Something went wrong')
			}
			const data = await response.json()

			return data
		} catch (error) {
			console.error('Fetch error:', error)
			throw error
		}
	}

	get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
		return this.request(`${endpoint}`, { ...options, method: 'GET' })
	}
}

export const weatherClient = new ApiClient(
	WeatherAPIConfig.baseUrl,
	WeatherAPIConfig.apiKey
)
export const IpClient = new ApiClient(IPApiConfig.baseUrl)
