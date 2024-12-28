import debounce from 'lodash.debounce'
import { useEffect, useState } from 'react'

import type { CityResponse } from '@/types/city.types'

import { cityWeather } from '@/services/city.service'

export function useCity(city: string) {
	const [data, setData] = useState<CityResponse[]>()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		setIsLoading(true)
		const fetchData = async () => {
			try {
				const response = await cityWeather.getCity(city)
				setData(response)
			} catch (error: any) {
				setError(error.message)
			} finally {
				setIsLoading(false)
			}
		}
		const debouncedFetch = debounce(fetchData, 444)

		if (city) {
			debouncedFetch()
		}

		return () => {
			debouncedFetch.cancel()
		}
	}, [city])

	const handleClearData = () => {
		setData([])
	}
	return { data, isLoading, error, handleClearData }
}
