import { Navbar } from "react-bulma-components";
import merge from "../../../utils/mergeCssClasses";

import styles from './HeaderNavbar.module.css';

interface Props {
    header: string,
}

const HeaderNavbar: React.FC<Props> = ({header}) => {
    const containerStyle = {
        margin: '0'
    };

    return (
      <Navbar className={merge(styles.navbar, 'is-size-1', 'has-text-weight-bold')} color='danger'>
        <Navbar.Container align='left' style={containerStyle}>
            <Navbar.Item>
                <div>{header}</div>
            </Navbar.Item>            
        </Navbar.Container>
      </Navbar>
    );
  }
  
  export default HeaderNavbar;