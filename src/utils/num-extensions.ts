import { RECORDS_PER_PAGE } from '../constants/constants'

declare global {
    interface Number {
        beginIndex(): number;
        endIndex(): number;
        pageCount(): number;
    }
}

Number.prototype.beginIndex = function() : number {
	return Number(this) * RECORDS_PER_PAGE - 1
}

Number.prototype.endIndex = function() : number {
	return Number(this) * RECORDS_PER_PAGE - 1 + RECORDS_PER_PAGE
}

Number.prototype.pageCount = function() : number {
	return Math.ceil(Number(this) / RECORDS_PER_PAGE)
}
