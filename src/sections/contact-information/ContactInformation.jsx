import React from 'react';
import {Card, Col, Form, Input, Row, Select} from "antd";
import {Option} from "antd/es/mentions";

const ContactInformation = () => {
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                size="large"
                defaultValue="1"
            >
                <Option value="1">🇺🇸 +1</Option>
                <Option value="34">🇪🇸 +34</Option>
                <Option value="86">🇨🇳 +86</Option>
                <Option value="33">🇫🇷 +33</Option>
                <Option value="49">🇩🇪 +49</Option>
            </Select>
        </Form.Item>
    );
    return (
        <div className="contact-information">
            <Card title="Contact Information">
                <Row>
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
                            tooltip="What do you want others to call you?"
                        >
                            <Input size="large" placeholder="Enter Name"/>
                        </Form.Item>
                    </Col>
                    <Col flex="364px" style={{ marginLeft: '24px' }}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true }, { type: 'email', message: 'Email is not valid'}]}
                            tooltip="What do you want others to call you?"
                        >
                            <Input size="large" placeholder="Enter your email"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col flex="364px">
                        <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                            className="contact-information__phone-input"
                            tooltip="What do you want others to call you?"
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