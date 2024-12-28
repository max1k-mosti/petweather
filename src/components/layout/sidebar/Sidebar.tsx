import cn from 'clsx'
import { Dispatch, SetStateAction } from 'react'

import type { WeatherResponse } from '@/types/weather.types'

import { getLocalizedCity } from '@/utils/Localized'

import { City } from './City/City'
import { Indicators } from './Indicators/Indicators'
import { Precipitation } from './Precipitation/Precipitation'
import { SearchForm } from './SearchField/SearchForm'
import styles from './Sidebar.module.scss'

interface SidebarProps {
	data?: WeatherResponse
	setIsSearch: Dispatch<SetStateAction<boolean>>
	isSearch: boolean
	setCity: Dispatch<SetStateAction<string>>
}

export const Sidebar = ({
	data,
	setIsSearch,
	isSearch,
	setCity
}: SidebarProps) => {
	if (data)
		return (
			<aside
				className={cn(styles.Sidebar, {
					[styles.SearchActive]: isSearch
				})}
			>
				<div>
					<SearchForm
						setCity={setCity}
						setIsSearch={setIsSearch}
						isSearch={isSearch}
					/>
					<div></div>
					<Indicators
						temp={Math.round(data.list[0].main.temp)}
						feels={Math.round(data.list[0].main.feels_like)}
						humidity={data.list[0].main.humidity}
						wind_dir={data.list[0].wind.deg}
						wind_speed={data.list[0].wind.speed}
					/>
					<Precipitation precip={data.list[0].pop * 100} />
				</div>
				<City
					city={getLocalizedCity(data.city.name, 'ua')}
					descr={
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
					}
				/>
			</aside>
		)
}
