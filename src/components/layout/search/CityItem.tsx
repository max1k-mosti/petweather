'use client'

import type { CityResponse } from '@/types/city.types'
import type { ICoord } from '@/types/weather.types'

import styles from './Search.module.scss'

interface ICityItem {
	item: CityResponse
	onSelect: (coord: ICoord) => void
}

export function CityItem({ item, onSelect }: ICityItem) {
	const coord: ICoord = {
		lat: item.lat,
		lon: item.lon
	}
	return (
		<p
			className={styles.CityItem}
			onClick={() => onSelect(coord)}
		>
			{item.name}, <span>{item.state}</span>, <span>{item.country}</span>
		</p>
	)
}
