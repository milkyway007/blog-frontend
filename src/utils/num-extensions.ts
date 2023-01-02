import { RECORDS_PER_PAGE } from '../constants/constants'

declare global {
	interface Number {
		pageCount(): number
	}
}

Number.prototype.pageCount = function(): number {
	return Math.ceil(Number(this) / RECORDS_PER_PAGE)
}
