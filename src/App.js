import './App.scss';
import Header from "./sections/header/Header";
import {Button, Col, Form, Row} from "antd";
import GeneraInformation from "./sections/general-information/GeneraInformation";
import Summary from "./sections/summary/Summary";
import WriterLevel from "./sections/writer-level/WriterLevel";
import ContactInformation from "./sections/contact-information/ContactInformation";
import React, {useEffect, useState} from "react";


function App() {
    const [price, setPrice] = useState(null);
    const [pricePerWord, setPricePerWord] = useState(null);
    const [form] = Form.useForm();
    const wordCount = Form.useWatch('word-count', form);

    useEffect(() => {
        if(pricePerWord && wordCount) {
            setPrice(pricePerWord * wordCount);
        }
    },[pricePerWord, wordCount])

    return (
        <div className="app">
          <div className="app__content">
              <Header/>
              <Form
                  name="basic"
                  autoComplete="off"
                  layout="vertical"
                  requiredMark="optional"
                  form={form}
              >
                  <Row>
                      <Col flex="850px">
                          <GeneraInformation />
                      </Col>
                      <Col flex="auto">
                          <Summary price={price}/>
                      </Col>
                  </Row>
                  <Row>
                      <Col flex="850px">
                          <WriterLevel setPricePerWord={setPricePerWord}/>
                      </Col>
                  </Row>
                  <Row>
                      <Col flex="850px">
                          <ContactInformation/>
                      </Col>
                  </Row>
                  <Button
                      style={
                        {
                            marginLeft: '24px',
                            width: '245px',
                            backgroundColor: '#367FD3',
                            borderRadius: '4px',
                            fontSize: '16px',
                            height: '40px'
                        }
                      }
                      type="primary"
                      htmlType="submit"
                  >
                      Submit
                  </Button>
              </Form>
          </div>
        </div>
  );
}

export default App;
