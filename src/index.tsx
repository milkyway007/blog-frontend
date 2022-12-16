import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { fab, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { fas, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";

import 'bulma/css/bulma.min.css';

library.add(fab, fas, faFacebookF, faGithub, faLinkedinIn, faMagnifyingGlass);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
