import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import './common/styles/index.scss'
import './index.scss';
import {ConfigProvider} from "antd";
import {
    HashRouter, Route, Routes
} from "react-router-dom";
import Form1 from "./Form1";
import Form2 from "./Form2";
import ThankYouPage from "./ThankYouPage";



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
          <HashRouter>
              <Routes>
                  <Route path="form1" element={<Form1/>}/>
                  <Route path="form2" element={<Form2/>}/>
                  <Route path="thank-you" element={<ThankYouPage/>}/>
              </Routes>
          </HashRouter>
      </ConfigProvider>
  </React.StrictMode>
);
