import { type IApiConfig } from './api.interface'

export const WeatherAPIConfig: IApiConfig = {
	baseUrl: 'https://api.openweathermap.org',
	apiKey: import.meta.env.VITE_OPENWEATHER_APIKEY
}
export const IPApiConfig: IApiConfig = {
	baseUrl: 'https://freeipapi.com/api'
}
