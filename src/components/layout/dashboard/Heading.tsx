'use client'

interface IHeading {
	title?: string
}

export function Heading({ title }: IHeading) {
	return <h2 style={{ fontSize: '54px', maxWidth: '500px' }}>{title}</h2>
}
