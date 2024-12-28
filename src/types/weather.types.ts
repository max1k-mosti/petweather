export interface ICoord {
	lat: number
	lon: number
}

interface IClouds {
	all: number
}
interface ISys {
	pod: string
}

interface IMain {
	feels_like: number
	grnd_level: number
	humidity: number
	pressure: number
	sea_level: number
	temp: number
	temp_kf: number
	temp_max: number
	temp_min: number
}

interface IWind {
	deg: number
	gust: number
	speed: number
}
interface IWeather {
	description: string
	icon: string
	id: number
	main: string
}

interface CityResponse {
	coord: ICoord
	country: string
	id: number
	name: string
	population: number
	sunrise: number
	sunset: number
	timezone: number
}
export interface DayResponse {
	clouds: IClouds
	dt: number
	dt_txt: string
	main: IMain
	pop: number
	sys: ISys
	visibility: number
	weather: IWeather[]
	wind: IWind
}

export interface WeatherResponse {
	city: CityResponse
	cnt: number
	code: string
	list: DayResponse[]
	message: number
}
