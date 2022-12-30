import { TopicEnum } from '../constants/topic-enum'

import { JsLogo, NodeJsLogo, Undefined } from '../images/images'

export const select = (topic: TopicEnum | undefined): string => {
	switch (topic) {
		case TopicEnum.JS:
			return JsLogo
		case TopicEnum.NodeJS:
			return NodeJsLogo
		default:
			return Undefined
	}
}
