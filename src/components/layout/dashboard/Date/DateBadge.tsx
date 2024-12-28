'use client'

import { Cloudy } from 'lucide-react'

import { getDate } from '@/utils/DateUtils'

import styles from './DateBadge.module.scss'

interface IDate {
	country: string
	date: string
}

export function DateBadge({ country, date }: IDate) {
	getDate()
	return (
		<div className={styles.Date}>
			<Cloudy />
			<p>
				{country},{date}
			</p>
		</div>
	)
}
