import cn from 'clsx'

import { Metric } from '@/types/metric.types'
import type { DayResponse } from '@/types/weather.types'

import { getFormateDate } from '@/utils/DateUtils'
import { changeColorPrecip } from '@/utils/PrecipUtils'

import styles from './DayCard.module.scss'

interface IDayCard {
	item: DayResponse
	metric: Metric
}
export const DayCard = ({ item, metric }: IDayCard) => {
	return (
		<div className={styles.DayCard}>
			<div>
				<p>
					макс. {Math.round(item.main.temp_max)}
					{metric === Metric.metric ? ' °C' : ' ℉'}
				</p>
				<p>
					мін. {Math.round(item.main.temp_min)}
					{metric === Metric.metric ? ' °C' : ' ℉'}
				</p>
			</div>
			<div>
				<p className={styles.temp}>{Math.round(item.main.temp)}</p>
				<h3>{getFormateDate(item.dt_txt)}</h3>
				<div className={styles.precip}>
					<span
						className={cn(styles[changeColorPrecip(item.pop)])}
					></span>
					<span
						className={cn(styles[changeColorPrecip(item.pop)])}
					></span>
				</div>
			</div>
		</div>
	)
}
