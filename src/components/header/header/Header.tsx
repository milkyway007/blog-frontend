import HeaderBrand from "./HeaderBrand";

import styles from './Header.module.css';
import merge from "../../../utils/mergeCssClasses";
import HeaderStart from "./HeaderStart";
import HeaderEnd from "./HeaderEnd";

const navbarStyle = {
  paddingBottom: '3rem',
};

interface Props {
  header: string,
}

const Header: React.FC<Props> = ({header}) => {
    return (
      <div className={merge(styles['header'], 'navbar', 'is-dark', 'is-spaced')} style={navbarStyle}>
        <HeaderBrand />
        <HeaderStart header={header} />
        <HeaderEnd />
      </div>
  );
}
  
export default Header;