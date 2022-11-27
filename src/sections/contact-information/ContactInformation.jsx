import React from 'react';
import {Card, Col, Form, Input, Row} from "antd";

const ContactInformation = () => {
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
                            <Input size="large"/>
                        </Form.Item>
                    </Col>
                    <Col flex="364px" style={{ marginLeft: '24px' }}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true }, { type: 'email', message: 'Email is not valid'}]}
                            tooltip="What do you want others to call you?"
                        >
                            <Input size="large"/>
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
                        >
                            <Input addonBefore={<span style={{ fontSize: '16px'}}>🇺🇸 +1</span>} size="large"/>
                        </Form.Item>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default ContactInformation;