import { Cloudy } from 'lucide-react'

import styles from './GlobalLoader.module.scss'

export function GlobalLoader() {
	return (
		<div className={styles.GlobalLoader}>
			<Cloudy
				width={50}
				height={50}
				className={styles.Cloudy}
			/>
		</div>
	)
}
