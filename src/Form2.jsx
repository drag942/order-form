import React from 'react';
import {Button, Col, Form, Row} from "antd";
import Header from "./sections/header/Header";
import ContactInformation from "./sections/contact-information/ContactInformation";
import GeneralInformation2 from "./sections/general-information/GeneralInformation2";

const Form2 = () => {
    const [form] = Form.useForm();
    return (
        <div className="app">
            <div className="app__content2">
                <Header/>
                <Form
                    name="basic"
                    autoComplete="off"
                    layout="vertical"
                    requiredMark="optional"
                    form={form}
                >
                    <Row>
                        <Col flex="900px">
                            <GeneralInformation2 />
                            <ContactInformation
                                style={{paddingLeft: 0, paddingRight: 0}}
                            />
                        </Col>
                    </Row>
                    <Button
                        style={
                            {
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
    )
};

export default Form2;