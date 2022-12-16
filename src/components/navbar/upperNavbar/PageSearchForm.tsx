import { Form } from "react-bulma-components"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './PageSearchForm.module.css';
import merge from "../../../utils/mergeCssClasses";

const inputStyle = {
    backgroundColor: '#363636',
    borderBottomColor: '#555555',
    color: '#fff',
  };

const PageSearchForm: React.FC = () => {
    return (
        <form>
            <Form.Field className={styles['search-field']}>
                <div className={merge(styles['search-field__icon-container'], 'is-size-5', 'has-text-weight-bold')}>
                    <FontAwesomeIcon icon={['fas', 'magnifying-glass']} />
                </div>                
                <Form.Control>
                    <Form.Input className='is-size-6' size='small' color='dark' style={inputStyle} />
                </Form.Control>
            </Form.Field>
        </form>
    );
}
  
  export default PageSearchForm;