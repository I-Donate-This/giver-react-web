import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import DonationSelection from "./components/DonationSelection";
import 'typeface-roboto';

ReactDOM.render(
    <DonationSelection />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
