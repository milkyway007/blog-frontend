import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "react-bulma-components"; 
import merge from "../../../utils/mergeCssClasses";

import styles from './SocialIconItem.module.css';

interface Props {
    href: string;
    backgroundColor: string;
    iconProp: IconProp;
}

const SocialIconsItem: React.FC<Props> = ({href, backgroundColor, iconProp}) => {
    const itemStyle = {
        borderRadius: '50%',
        width: '2.5rem',
        height: '2.5rem',
        padding: '0',
        margin: '.5rem',
        color: '#fff',
        backgroundColor: backgroundColor,
    }

    return (
        <Navbar.Item className={styles['brand-icon']} href={href} style={itemStyle} target='_blank'>
            <FontAwesomeIcon className={styles['brand-icon__svg']} icon={iconProp} />
        </Navbar.Item>
    );
  }
  
  export default SocialIconsItem;