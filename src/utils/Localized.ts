const cityNames: Record<string, string> = {
	Kamianske: "Кам'янське",
	Kyiv: 'Київ',
	Kharkiv: 'Харків',
	London: 'Лондон',
	'Los Angeles': 'Лос-Анджелес'
}
const countryNames: Record<string, string> = {
	UA: 'Україна',
	GB: 'Велика Британія',
	US: 'США'
}

export const getLocalizedCity = (city: string, lang: string) => {
	return lang === 'uk' || lang === 'ua' ? cityNames[city] : city
}
export const getLocalizedCountry = (country: string, lang: string) => {
	return lang === 'uk' || lang === 'ua' ? countryNames[country] : country
}
