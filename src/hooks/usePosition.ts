import { useEffect, useState } from 'react'

import { ICoord } from '@/types/weather.types'

import { positionService } from '@/services/position.service'

export function usePosition() {
	const [coord, setCoord] = useState<ICoord | null>(null)

	useEffect(() => {
		const getFallbackPosition = async () => {
			try {
				const data = await positionService.getPositionByIP()
				if (data?.latitude && data?.longitude) {
					setCoord({ lat: data.latitude, lon: data.longitude })
				}
			} catch (error) {
				console.error('Error fetching fallback position:', error)
			}
		}
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				position => {
					const { latitude, longitude } = position.coords
					setCoord({ lat: latitude, lon: longitude })
				},
				error => {
					if (error.PERMISSION_DENIED) {
						getFallbackPosition()
					}
				}
			)
		}
	}, [])
	return { coord, setCoord }
}
