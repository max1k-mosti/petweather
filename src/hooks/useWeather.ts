import { useEffect, useState } from 'react'

import type { Metric } from '@/types/metric.types'
import type { ICoord, WeatherResponse } from '@/types/weather.types'

import { weatherService } from '@/services/weather.service'

export const useWeather = (
	lang: string,
	coord: ICoord | null,
	metric: Metric
) => {
	const [data, setData] = useState<WeatherResponse>()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			try {
				const response = await weatherService.getWeather(
					lang,
					coord,
					metric
				)
				response
					? setData(response)
					: setError('Error: data not available')
			} catch (error: any) {
				setError(error.message)
			} finally {
				setIsLoading(false)
			}
		}

		if (coord) fetchData()
	}, [coord])

	return { data, isLoading, error }
}
