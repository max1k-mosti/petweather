import type { Metric } from '@/types/metric.types'
import type { ICoord, WeatherResponse } from '@/types/weather.types'

import { weatherClient } from '@/api/apiclient'

class WeatherService {
	private BASE_URL = '/data/2.5/forecast'

	async getWeather(lang: string, coord: ICoord | null, metric: Metric) {
		if (coord) {
			const response = await weatherClient.get<WeatherResponse>(
				this.BASE_URL,
				{
					params: {
						lon: coord.lon,
						lat: coord.lat,
						lang: lang,
						units: metric
					}
				}
			)
			return response
		}
	}
}
export const weatherService = new WeatherService()
