export function changeColorPrecip(precip: number) {
	if (precip >= 0 && precip <= 0.9) return 'yellow'
	if (precip > 0.9 && precip < 12) return 'oyellow'
	if (precip >= 12 && precip < 39) return 'orange'

	return 'red'
}
