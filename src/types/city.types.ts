type LocalName = 'ms' | 'gu' | 'is' | 'wa' | 'mg' | 'wa'

export interface CityResponse {
	name: string
	local_names: LocalName
	lat: number
	lon: number
	country: string
	state: string
}
