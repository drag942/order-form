import React, {useState} from 'react';
import {Button, Col, Form, Row} from "antd";
import Header from "./sections/header/Header";
import ContactInformation from "./sections/contact-information/ContactInformation";
import GeneralInformation2 from "./sections/general-information/GeneralInformation2";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Form2 = () => {
    const [form] = Form.useForm();
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const onFinishForm = async (data) => {
        await axios.post('https://api.skillhub.com/order-form/', {
            ...data,
            form_type: 'freelance'
        }).then(() => navigate('/thank-you')).catch(() => setError('Server error'))
    }

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
                    onFinish={onFinishForm}
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
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </Form>
            </div>
        </div>
    )
};

export default Form2;