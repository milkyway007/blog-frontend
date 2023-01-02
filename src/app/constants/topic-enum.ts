export enum TopicEnum {
	DotNet = '.NET',
	CSharp = 'C#',
	CSS = 'CSS',
	Docker = 'Docker',
	HTML = 'HTML',
	JS = 'Javascript',
	NodeJS = 'NodeJS',
	ReactJS = 'ReactJS',
	TS = 'Typescript'
}

export const numToTopic = (index: number): TopicEnum | undefined => {
	switch (index) {
		case 0:
			return TopicEnum.DotNet
		case 1:
			return TopicEnum.CSharp
		case 2:
			return TopicEnum.CSS
		case 3:
			return TopicEnum.Docker
		case 4:
			return TopicEnum.HTML
		case 5:
			return TopicEnum.JS
		case 6:
			return TopicEnum.NodeJS
		case 7:
			return TopicEnum.ReactJS
		case 8:
			return TopicEnum.TS
		default:
			return undefined
	}
}
