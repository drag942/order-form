import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/reset.css';
import './common/styles/index.scss'
import './index.scss';
import {ConfigProvider} from "antd";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ConfigProvider
          theme={{
              token: {
                  fontFamily: 'Inter',
              },
          }}
      >
        <App />
      </ConfigProvider>
  </React.StrictMode>
);
