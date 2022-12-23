import React from 'react';
import {Card, Col, Form, Input, Row, Select} from "antd";

const ContactInformation = ({style}) => {
    const prefixSelector = (
        <Form.Item name="country_code" initialValue="1" noStyle>
            <Select
                size="large"
            >
                <Select.Option value="1">🇺🇸 +1</Select.Option>
                <Select.Option value="34">🇪🇸 +34</Select.Option>
                <Select.Option value="86">🇨🇳 +86</Select.Option>
                <Select.Option value="33">🇫🇷 +33</Select.Option>
                <Select.Option value="49">🇩🇪 +49</Select.Option>
            </Select>
        </Form.Item>
    );
    return (
        <div className="contact-information" style={style}>
            <Card title="Contact Information">
                <Row justify="space-between">
                    <Col flex="364px">
                        <Form.Item
                            label="Your name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input size="large" placeholder="Enter Name"/>
                        </Form.Item>
                    </Col>
                    <Col flex="364px" style={{ marginLeft: '24px' }}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!'  }, { type: 'email', message: 'Email is not valid'}]}
                        >
                            <Input size="large" placeholder="Enter your email"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify="space-between">
                    <Col flex="364px">
                        <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                            className="contact-information__phone-input"
                            style={{
                                marginBottom: 0
                            }}
                        >
                            <Input addonBefore={prefixSelector} size="large"/>
                        </Form.Item>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default ContactInformation;