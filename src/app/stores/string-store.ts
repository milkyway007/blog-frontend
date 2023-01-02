import { makeAutoObservable } from 'mobx'

export default class StringStore {

	header = 'Liidia Laada Blog'

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}

}
