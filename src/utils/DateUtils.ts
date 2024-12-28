const monthString = [
	'січ',
	'лют',
	'бер',
	'квіт',
	'трав',
	'черв',
	'лип',
	'серп',
	'вер',
	'жовт',
	'лист',
	'груд'
]
export function getDate() {
	const daysString = [
		'Понеділок',
		'Вівторок',
		'Середа',
		'Четвер',
		"П'ятниця",
		'Субота',
		'Неділя'
	]

	const today = new Date()
	const DayString = daysString[today.getDay() - 1]
	const Day = today.getDate()
	const year = today.getFullYear()
	const month = monthString[today.getMonth()]
	const hours = today.getHours()
	const minutes = today.getMinutes()
	const time = `${hours}:${minutes}`

	return `${DayString}, ${month} ${Day},${year},${time}`
}

export const getFormateDate = (date: string) => {
	const year = date.slice(0, 4)
	const month = monthString[Number(date.slice(5, 7)) - 1]
	const day = date.slice(8, 10)
	return `${day} ${month}, ${year}`
}
