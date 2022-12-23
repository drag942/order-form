import './App.scss';
import Header from "./sections/header/Header";
import {Button, Col, Form, Row} from "antd";
import GeneraInformation from "./sections/general-information/GeneraInformation";
import Summary from "./sections/summary/Summary";
import WriterLevel from "./sections/writer-level/WriterLevel";
import ContactInformation from "./sections/contact-information/ContactInformation";
import React, {useEffect, useState} from "react";
import axios from "axios";


function Form1() {
    const [price, setPrice] = useState(null);
    const [pricePerWord, setPricePerWord] = useState(null);
    const [writerLevel, setWriterLevel] = useState(null);
    const [form] = Form.useForm();
    const wordCount = Form.useWatch('word_count', form);
    const [error, setError] = useState(null)

    useEffect(() => {
        if(pricePerWord && wordCount) {
            setPrice(Math.round((pricePerWord * wordCount) * 0.85));
        }
    },[pricePerWord, wordCount])

    const onFinishForm = async (data) => {
        await axios.post('https://api.skillhub.com/order-form/', {
            ...data,
            price,
            form_type: 'cws',
            writer_level: writerLevel
        }).then(() =>  window.location.replace('https://skillhub.com/content-writing-service')).catch(() => setError('Server error'))
    }

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
                  onFinish={onFinishForm}
              >
                  <Row>
                      <Col flex="850px">
                          <GeneraInformation />
                          <WriterLevel setPricePerWord={setPricePerWord} setWriterLevel={setWriterLevel}/>
                          <ContactInformation/>
                      </Col>
                      <Col flex="auto">
                          <Summary price={price}/>
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
                  {error && <p style={{ color: 'red',marginLeft: '24px', marginTop: '10px' }}>{error}</p>}
              </Form>
          </div>
        </div>
  );
}

export default Form1;
