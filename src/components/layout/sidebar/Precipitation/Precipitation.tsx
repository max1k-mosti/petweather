'use client'

import cn from 'clsx'

import { changeColorPrecip } from '@/utils/PrecipUtils'

import styles from './Precipitation.module.scss'

export function Precipitation({ precip }: { precip: number }) {
	return (
		<div className={styles.Precipitation}>
			<div>
				<div className={styles.Precip_informer}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className={styles.precip}>
					<span
						className={cn(
							styles[changeColorPrecip(precip)],
							styles.dot
						)}
					></span>
					{precip}%
				</div>
			</div>
			<div className={styles.Precip_descr}>
				<div>
					<h6>Слабі опади</h6>
					<div className={styles.precip_item}>
						<span className={cn(styles.dot, styles.yellow)}></span>
						1% - 3%
					</div>
					<div className={styles.precip_item}>
						<span className={cn(styles.dot, styles.oyellow)}></span>
						4% - 11%
					</div>
				</div>
				<div>
					<h6>Сильні опади</h6>
					<div className={styles.precip_item}>
						<span className={cn(styles.dot, styles.orange)}></span>
						12% - 38%
					</div>
					<div className={styles.precip_item}>
						<span className={cn(styles.dot, styles.red)}></span>
						39% - 90%
					</div>
				</div>
			</div>
		</div>
	)
}
