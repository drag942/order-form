import React from 'react';
import {Card, Col, Divider, Form, Input, Row} from "antd";

const Summary = () => {
    return (
        <div className="summary">
            <Card title="Summary">
                <Row style={{ marginTop: '16px'}}>
                    <Col flex={6}>
                        <b>Content Type</b>
                    </Col>
                    <Col flex={6}>
                        <p style={{textAlign: 'right'}}>Blog Post</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '16px'}}>
                    <Col flex={6}>
                        <b>Category</b>
                    </Col>
                    <Col flex={6}>
                        <p style={{textAlign: 'right'}}>Business & Economy</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '16px'}}>
                    <Col flex={6}>
                        <b>Word Count</b>
                    </Col>
                    <Col flex={6}>
                        <p style={{textAlign: 'right'}}>700 words</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: '16px'}}>
                    <Col flex={6}>
                        <b>Deadline</b>
                    </Col>
                    <Col flex={6}>
                        <p style={{textAlign: 'right'}}>5 Days (Wed, Oct 26)</p>
                    </Col>
                </Row>
                <Divider />
                <Form.Item
                    label="Promocode"
                    name="promocode"
                    rules={[
                        {
                            required: true
                        },
                    ]}
                    initialValue="Promocode"
                >
                    <Input size="large" disabled/>
                </Form.Item>
                <Divider />
                <Row>
                    <Col flex={6}>
                        <b style={{fontSize: '20px'}}>Price</b>
                    </Col>
                    <Col flex={6} style={{textAlign: 'right'}}>
                        <b style={{color: '#2460AD', fontSize: '20px'}}>$64</b>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default Summary;