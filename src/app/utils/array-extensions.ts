declare global {
	interface Array<T> {
		remove(o: T): Array<T>
	}
}

Array.prototype.remove = function <T>(this: T[], elem: T): T[] {
	return this.filter((el) => {
		return el !== elem
	})
}

export {}
