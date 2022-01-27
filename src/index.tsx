import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/App';
import { Layout } from './Layout/Layout';

ReactDOM.render(
  <React.StrictMode>
		<Layout>
			<App />
		</Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

