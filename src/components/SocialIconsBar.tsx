import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { Navbar } from "react-bulma-components"; 

import 'bulma/css/bulma.min.css';
import './SocialIconsBar.css';

library.add(fab, faFacebookF, faGithub, faLinkedinIn);

const SocialIconsBar: React.FC = () => {
    return (
      <Navbar color='dark' size='large'>
        <Navbar.Container align='right' className="social-icons">
            <Navbar.Item href="https://www.facebook.com/profile.php?id=100010159876948" style={{backgroundColor: '#3b5998'}}>
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </Navbar.Item>
            <Navbar.Item href="https://github.com/milkyway007" style={{backgroundColor: '#91c661'}}>
                <FontAwesomeIcon icon={['fab', 'github']} />
            </Navbar.Item>
            <Navbar.Item href="https://www.linkedin.com/in/milkyway007/" style={{backgroundColor: '#0c7bb6'}}>
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </Navbar.Item>
        </Navbar.Container>
      </Navbar>
    );
  }
  
  export default SocialIconsBar;