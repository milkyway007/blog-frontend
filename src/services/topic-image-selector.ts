import { JsLogo, NodeJsLogo, Undefined } from '../images/images'

import { Topic } from '../constants/topicEnum'

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
