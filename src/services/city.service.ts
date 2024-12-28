import type { CityResponse } from '@/types/city.types'

import { weatherClient } from '@/api/apiclient'

class CityWeather {
	private BASE_URL = '/geo/1.0/direct'

	async getCity(city: string) {
		const response = weatherClient.get<CityResponse[]>(this.BASE_URL, {
			params: {
				q: city,
				limit: 25,
				lang: 'ua'
			}
		})
		return response
	}
}
export const cityWeather = new CityWeather()
