export const merge = (...cssClasses: string[]): string => {
	return cssClasses.reduce(
		(previousValue, currentValue, currentIndex, array) => {
			if (currentIndex + 1 === array.length) {
				return (previousValue += `${currentValue}`)
			}

			return (previousValue += `${currentValue} `)
		},
		''
	)
}
