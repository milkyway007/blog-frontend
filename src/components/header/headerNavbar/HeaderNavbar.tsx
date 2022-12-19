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
      <div className={merge('navbar', styles.navbar, 'is-size-1', 'has-text-weight-bold', 'is-danger')} >
        <div className='navbar-start' style={containerStyle}>
            <div className='navbar-item'>
                <div>{header}</div>
            </div>            
        </div>
      </div>
    );
  }
  
  export default HeaderNavbar;