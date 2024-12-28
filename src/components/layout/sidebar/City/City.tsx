'use client'

import styles from './City.module.scss'

interface ICity {
	city: string
	descr: string
}

export function City({ city, descr }: ICity) {
	return (
		<div className={styles.City}>
			<h2>{city}</h2>
			<p>{descr}</p>
		</div>
	)
}
