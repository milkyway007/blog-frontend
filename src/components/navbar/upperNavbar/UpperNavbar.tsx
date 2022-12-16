import { Navbar } from "react-bulma-components"; 

import UpperNavbarBrand from "./UpperNavbarBrand";
import SocialIcons from "./SocialIcons";
import PageSearchForm from "./PageSearchForm";

import styles from './UpperNavbar.module.css';

const navbarStyle = {
  paddingLeft: '18rem',
  paddingBottom: '2rem',
};

const UpperNavbar: React.FC = () => {
    return (
      <Navbar className={styles['upper-navbar']} color='dark' size='large' style={navbarStyle}>
        <UpperNavbarBrand />
        <Navbar.Container align='left'>
          <div className={styles['navbar-container-end__content']}>
            <SocialIcons />
            <PageSearchForm />
          </div>
        </Navbar.Container>
      </Navbar>
    );
  }
  
  export default UpperNavbar;