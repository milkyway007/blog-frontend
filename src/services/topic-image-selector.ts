import { Topic } from '../constants/topic-enum'

import { JsLogo, NodeJsLogo, Undefined } from '../images/images'

export const select = (topic: Topic): string => {
	switch (topic) {
		case Topic.JS:
			return JsLogo
		case Topic.NodeJS:
			return NodeJsLogo
		default:
			return Undefined
	}
}
