import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import './common/styles/index.scss'
import './index.scss';
import {ConfigProvider} from "antd";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Form1 from "./Form1";
import Form2 from "./Form2";

const router = createBrowserRouter([
    {
        path: "form1",
        element: (
            <Form1/>
        ),
    },
    {
        path: "form2",
        element: <Form2/>,
    },
]);


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
          <RouterProvider router={router} />
      </ConfigProvider>
  </React.StrictMode>
);
