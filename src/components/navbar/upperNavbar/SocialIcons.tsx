import SocialIconItem from "./SocialIconItem";

import { FB_LINK, GITHUB_LINK, LINKEDIN_LINK } from "../../../constants/link";
import { FB_BLUE, GITHUB_GREEN, LINKEDIN_BLUE } from "../../../constants/color";
import { FA_BRAND, FA_FB, FA_GITHUB, FA_LINKEDIN } from "../../../constants/iconProp";

import styles from './SocialIcons.module.css';

const SocialIcons: React.FC = () => {
    return (
        <div className={styles['social-icons']}>
            <SocialIconItem href={FB_LINK} backgroundColor={FB_BLUE} iconProp={[FA_BRAND, FA_FB]}></SocialIconItem>
            <SocialIconItem href={GITHUB_LINK} backgroundColor={GITHUB_GREEN} iconProp={[FA_BRAND, FA_GITHUB]}></SocialIconItem>
            <SocialIconItem href={LINKEDIN_LINK} backgroundColor={LINKEDIN_BLUE} iconProp={[FA_BRAND, FA_LINKEDIN]}></SocialIconItem>
        </div>
    )
};

export default SocialIcons;
