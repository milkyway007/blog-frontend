import { Navbar } from "react-bulma-components";
import merge from "../../../utils/mergeCssClasses";
import Topic from "./Topic";

import styles from './TopicsNavbar.module.css';

interface Props {
    items: string[],
}

const TopicsNavbar: React.FC<Props> = ({items}) => {
    return (
      <Navbar color='light' className={merge(styles['topics-navbar'], 'is-size-5', 'has-text-weight-semibold', 'has-background-grey-lighter')}>
        <Navbar.Container align='left'>
            {
                items.map(i => {
                    console.log(items.indexOf(i));
                    return (<Topic header={i} key={items.indexOf(i)}></Topic>);
                })
            }
        </Navbar.Container>
      </Navbar>
    );
  }
  
  export default TopicsNavbar;