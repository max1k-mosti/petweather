import { useState } from 'react'

import { Metric } from '@/types/metric.types'

import { useCity } from '@/hooks/useCity'
import { useLoader } from '@/hooks/useLoader'
import { usePosition } from '@/hooks/usePosition'
import { useWeather } from '@/hooks/useWeather'

import { GlobalLoader } from '../ui/GlobalLoader/GlobalLoader'

import styles from './Layout.module.scss'
import { Dashboard } from './dashboard/Dashboard'
import { Search } from './search/Search'
import { Sidebar } from './sidebar/Sidebar'
import { VideoBg } from './videoBg/VideoBg'

export const Layout = () => {
	const [isSearch, setIsSearch] = useState<boolean>(false)
	const [city, setCity] = useState<string>('')
	const [metric] = useState<Metric>('metric')
	const { coord, setCoord } = usePosition()
	const { data, isLoading } = useWeather('ua', coord, metric)
	const { data: cityResponse, handleClearData } = useCity(city)
	const { showLoader } = useLoader()

	if (isLoading || showLoader) {
		return <GlobalLoader />
	}
	return (
		<>
			<div className={styles.Layout}>
				<div>
					<VideoBg weather={data?.list?.[0].weather?.[0].main} />
					<div className={styles.overlay}></div>
				</div>
				<Sidebar
					data={data}
					setIsSearch={setIsSearch}
					isSearch={isSearch}
					setCity={setCity}
				/>
				<main>
					<Dashboard
						data={data}
						metric={metric}
					/>
				</main>
				{isSearch && (
					<Search
						setIsSearch={setIsSearch}
						isSearch={isSearch}
						setCity={setCity}
						cityData={cityResponse}
						setCoord={setCoord}
						clearData={handleClearData}
					/>
				)}
			</div>
		</>
	)
}
