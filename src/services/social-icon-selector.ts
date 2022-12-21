import { SocialIcon } from "../model/social-icon";

import { FB_BLUE, GITHUB_GREEN, LINKEDIN_BLUE } from '../constants/color'
import {
	FA_BRAND,
	FA_FB,
	FA_GITHUB,
	FA_LINKEDIN,
} from '../constants/icon-prop'
import { FB_LINK, GITHUB_LINK, LINKEDIN_LINK } from "../constants/link";
import { SocialIconType } from "../constants/social-icon-type-enum";

export const select = (iconType: SocialIconType): SocialIcon => {
    const props: SocialIcon = {
        href: FB_LINK,
		backgroundColor: FB_BLUE,
		iconProp: [FA_BRAND, FA_FB],
    }

	switch (iconType) {
		case SocialIconType.FB:
			return {
                href: FB_LINK,
                backgroundColor: FB_BLUE,
                iconProp: [FA_BRAND, FA_FB],
            }
		case SocialIconType.Github:
			return {
                href: GITHUB_LINK,
                backgroundColor: GITHUB_GREEN,
                iconProp: [FA_BRAND, FA_GITHUB],
            }
        case SocialIconType.LinkedIn:
            return {
                href: LINKEDIN_LINK,
                backgroundColor: LINKEDIN_BLUE,
                iconProp: [FA_BRAND, FA_LINKEDIN],
            }
	}
}