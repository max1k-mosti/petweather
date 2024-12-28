import { Heading } from '@/components/layout/dashboard/Heading'
import { Button } from '@/components/ui/Button/Button'
import { Divider } from '@/components/ui/Divider'

import { Metric } from '@/types/metric.types'
import type { WeatherResponse } from '@/types/weather.types'

import { getDate } from '@/utils/DateUtils'
import { UniqueItems } from '@/utils/ItemUtils'
import { getLocalizedCountry } from '@/utils/Localized'

import styles from './Dashboard.module.scss'
import { DateBadge } from './Date/DateBadge'
import { DayCard } from './DayCard/DayCard'
import { Logo } from './logo/Logo'

export function Dashboard({
	data,
	metric
}: {
	data?: WeatherResponse
	metric: Metric
}) {
	const { result: weekdayItems } = UniqueItems(data)

	const description = data?.list[0].weather[0].description
	const capitalizedDescription =
		description &&
		description?.charAt(0).toUpperCase() + description?.slice(1)

	return (
		<div className={styles.Dashboard}>
			<Logo />
			<div className={styles.WeatherForecast}>
				<p>Прогноз погоди</p>
				<Heading title={capitalizedDescription} />
			</div>
			<DateBadge
				country={getLocalizedCountry(
					data ? data?.city.country : '',
					'ua'
				)}
				date={getDate()}
			/>
			<Button title='Детальніше' />
			<Divider />
			<div
				style={{
					display: 'flex',
					gap: 50,
					alignItems: 'center',
					justifyContent: 'space-between',
					marginTop: '35px'
				}}
			>
				{weekdayItems.map(item => (
					<DayCard
						item={item}
						key={item.dt}
						metric={metric}
					/>
				))}
			</div>
		</div>
	)
}
