import { Dispatch, SetStateAction } from 'react'

import { Button } from '@/components/ui/Button/Button'

import type { CityResponse } from '@/types/city.types'
import { ICoord } from '@/types/weather.types'

import { SearchForm } from '../sidebar/SearchField/SearchForm'

import { CityItem } from './CityItem'
import styles from './Search.module.scss'

interface ISearch {
	setCity: Dispatch<SetStateAction<string>>
	isSearch: boolean
	setIsSearch: Dispatch<SetStateAction<boolean>>
	cityData?: CityResponse[]
	setCoord: Dispatch<SetStateAction<ICoord | null>>
	clearData: () => void
}

export function Search({
	setCity,
	isSearch,
	setIsSearch,
	cityData,
	setCoord,
	clearData
}: ISearch) {
	const handleSetCoord = (coord: ICoord) => {
		setCoord(coord)
		setIsSearch(false)
	}
	const handleClearData = () => {
		setIsSearch(false)
		clearData()
	}
	return (
		<div className={styles.isSearch}>
			<div>
				<div className={styles.SearchForm}>
					<SearchForm
						setCity={setCity}
						setIsSearch={setIsSearch}
						isSearch={isSearch}
					/>
					{isSearch && (
						<Button
							title='Відмінити'
							onClick={handleClearData}
						/>
					)}
				</div>
				<div>
					{cityData?.map(item => (
						<CityItem
							item={item}
							key={item.lon}
							onSelect={handleSetCoord}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
