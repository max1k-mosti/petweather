export function deegreeToString(deegree: number): string {
	if ((deegree >= 0 && deegree <= 22.4) || deegree === 360) return 'N'
	if (deegree >= 22.5 && deegree <= 44.9) return 'NNE'
	if (deegree >= 45 && deegree <= 67.4) return 'NE'
	if (deegree >= 67.5 && deegree <= 89.9) return 'ENE'
	if (deegree >= 90 && deegree <= 112.4) return 'E'
	if (deegree >= 112.5 && deegree <= 134.9) return 'ESE'
	if (deegree >= 135 && deegree <= 157.4) return 'SE'
	if (deegree >= 157.5 && deegree <= 202.4) return 'S'
	if (deegree >= 202.5 && deegree <= 224.9) return 'SSW'
	if (deegree >= 225 && deegree <= 247.4) return 'SW'
	if (deegree >= 247.5 && deegree <= 269.9) return 'WSW'
	if (deegree >= 270 && deegree <= 292.4) return 'W'
	if (deegree >= 292.5 && deegree <= 314.9) return 'WNW'
	if (deegree >= 315 && deegree <= 337.4) return 'NW'
	if (deegree >= 337.5 && deegree < 360) return 'NNW'
	throw new Error('Degree out of range. Must be between 0 and 360.')
}
