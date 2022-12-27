import { YEAR_INIT } from '../constants/constants'

export const getYearsToFilter = () => {
	const current: number = new Date().getFullYear()
	const yearsToFilter = []

	let past = YEAR_INIT

	while (past <= current) {
		yearsToFilter.push(past++)
	}

	return yearsToFilter
}