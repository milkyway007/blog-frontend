import { Card, Navbar } from "react-bulma-components";

import { MiaLogo } from '../../../images/images';

import styles from './UpperNavbarBrand.module.css';

const brandStyle = {
    alignItems: 'center',
};

const UpperNavbarBrand: React.FC = () => {
    return <Navbar.Brand className={styles['upper-navbar-brand']} style={brandStyle} >
        <Card>
            <Card.Image src={MiaLogo} alt='Mia Logo' className={styles['mia-logo']} />
        </Card>
    </Navbar.Brand>;
}

export default UpperNavbarBrand;