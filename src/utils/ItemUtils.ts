import type { DayResponse, WeatherResponse } from '@/types/weather.types'

export function UniqueItems(data?: WeatherResponse) {
	const Days = new Set<string>()

	const result: DayResponse[] =
		data?.list.filter(item => {
			const date = new Date(item.dt * 1000)
			const dateString = date.toISOString().split('T')[0]

			if (!Days.has(dateString)) {
				Days.add(dateString)
				return true
			}
			return false
		}) || []

	return { result }
}
