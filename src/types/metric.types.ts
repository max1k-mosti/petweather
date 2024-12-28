export const Metric = {
	metric: 'metric',
	imperial: 'imperial'
} as const

export type Metric = (typeof Metric)[keyof typeof Metric]
