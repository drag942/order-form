import React from 'react';
import {Card, Col, Divider, Form, Input, Row} from "antd";

const Summary = ({price}) => {
    const form = Form.useFormInstance();
    const contentType = Form.useWatch('content_type', form);
    const category = Form.useWatch('category', form);
    const wordCount = Form.useWatch('word_count', form);
    const deadline = Form.useWatch('deadline', form);

    return (
        <div className="summary">
            <Card title="Summary">
                <Row style={{ marginTop: 0}}>
                    <Col flex={6}>
                        <b>Content Type</b>
                    </Col>
                    <Col flex={6}>
                        <p style={{textAlign: 'right'}}>{contentType ? contentType : '-'}</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: 0 }}>
                    <Col flex={6}>
                        <b>Category</b>
                    </Col>
                    <Col flex={6}>
                        <p style={{textAlign: 'right'}}>{category ? category : '-'}</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: 0}}>
                    <Col flex={6}>
                        <b>Word Count</b>
                    </Col>
                    <Col flex={6}>
                        <p style={{textAlign: 'right'}}>{wordCount ? `${wordCount} words` : '-'}</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: 0}} >
                    <Col flex={6}>
                        <b>Deadline</b>
                    </Col>
                    <Col flex={6}>
                        <p style={{textAlign: 'right'}}>{deadline ? deadline : '-'}</p>
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
                    initialValue="promo15"
                >
                    <Input size="large" disabled/>
                </Form.Item>
                <Divider />
                <Row>
                    <Col flex={6}>
                        <b style={{fontSize: '20px'}}>Price</b>
                    </Col>
                    <Col flex={6} style={{textAlign: 'right'}}>
                        <b style={{color: '#2460AD', fontSize: '20px'}}>{price ? `$${price}` : '-'}</b>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default Summary;