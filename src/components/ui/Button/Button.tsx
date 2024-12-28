'use client'

import styles from './Button.module.scss'

interface IButton {
	title: string
	link?: string
	onClick?: () => void
}

export function Button({ title, link, onClick }: IButton) {
	return (
		<button
			onClick={onClick}
			className={styles.Button}
		>
			{title}
		</button>
	)
}
