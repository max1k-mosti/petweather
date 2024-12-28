'use client'

import { deegreeToString } from '@/utils/Utils'

import styles from './Indicators.module.scss'

interface IIndicators {
	temp: number
	feels: number
	humidity: number
	wind_dir: number
	wind_speed: number
}

export function Indicators({
	temp,
	feels,
	humidity,
	wind_dir,
	wind_speed
}: IIndicators) {
	return (
		<div className={styles.Indicators}>
			<div className={styles.Temperature}>
				<div>{temp}</div>
				<div className={styles.RealFeel}>
					<span>відчувається</span>
					<p>{feels}</p>
				</div>
			</div>
			<div className={styles.otherIndicator}>
				<div>{humidity}%</div>
				<div>
					Вітер: {deegreeToString(wind_dir)} {wind_speed} м/с
				</div>
			</div>
		</div>
	)
}
