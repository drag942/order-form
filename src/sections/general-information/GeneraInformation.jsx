import React, {useState} from 'react';
import {Card, Col, Form, Input, Row, Select} from "antd";
import {categories, contentTypes, getDatesOfWeek, seoWordCount, smmWordCount, wordCounts} from "../../common/constants";

const GeneraInformation = () => {

    const [stateWordCount, setStateWordCount] = useState(wordCounts);

    const form = Form.useFormInstance();
    const contentType = Form.useWatch('content-type', form);

    const onSelectContentType = (type) => {
        form.resetFields(['word-count'])
        if(type === 'Seo Optimized Content') {
            setStateWordCount(seoWordCount);
        } else if (type === 'Social Media Content') {
            setStateWordCount(smmWordCount);
        } else {
            setStateWordCount(wordCounts);
        }
    }


    return (
        <div className="general_information">
            <Card title="General information">
                    <Row>
                        <Col flex="364px">
                            <Form.Item
                                label="Project Title"
                                name="title"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your project title!',
                                    },
                                ]}
                                tooltip="What do you want others to call you?"
                            >
                                <Input size="large" placeholder="Enter Title"/>
                            </Form.Item>
                        </Col>
                        <Col flex="364px" style={{ marginLeft: '24px' }}>
                            <Form.Item
                                label="Content Type"
                                name="content-type"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose content type!',
                                    },
                                ]}
                                tooltip="What do you want others to call you?"
                            >
                                <Select onSelect={onSelectContentType} size="large" placeholder="Select Content Type">
                                    {contentTypes.map(item =>
                                        <Select.Option key={item} value={item}>{item}</Select.Option>)}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col flex="364px">
                            <Form.Item
                                label="Category"
                                name="category"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your project title!',
                                    },
                                ]}
                                tooltip="What do you want others to call you?"
                            >
                                <Select size="large" placeholder="Select Category">
                                    {categories.map(item =>
                                        <Select.Option key={item} value={item}>{item}</Select.Option>)}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col flex="364px" style={{ marginLeft: '24px' }}>
                            <Form.Item
                                label="Word Count"
                                name="word-count"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose word count!',
                                    },
                                ]}
                                style={{
                                    opacity: !contentType ? 0.5 : 1
                                }}
                                tooltip="What do you want others to call you?"
                            >
                                <Select size="large" disabled={!contentType} placeholder="Select Count">
                                    {stateWordCount.map((item)=> <Select.Option key={item} value={item}>{item}</Select.Option>)}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col flex="364px">
                            <Form.Item
                                label="Deadline"
                                name="deadline"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose your project deadline!',
                                    },
                                ]}
                                tooltip="What do you want others to call you?"
                            >
                                <Select size="large" placeholder="Select Deadline">
                                    {getDatesOfWeek().map((item) =>
                                        <Select.Option key={item} value={item}>{item}</Select.Option>)}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col flex="364px" style={{ marginLeft: '24px' }}>
                            <Form.Item
                                label="Language"
                                name="language"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose your project language!',
                                    },
                                ]}
                                tooltip="What do you want others to call you?"
                                initialValue="english"
                            >
                                <Select size="large">
                                    <Select.Option value="english">🇺🇸 English</Select.Option>
                                    <Select.Option value="german">🇩🇪 German</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        label="Keywords"
                        name="keywords"
                        tooltip="What do you want others to call you?"
                    >
                        <Input size="large" placeholder="Separate each keyword with a comma"/>
                    </Form.Item>
                    <Form.Item
                        label="Brief"
                        name="brief"
                        style={{
                            marginBottom: 0
                        }}
                        tooltip="What do you want others to call you?"
                    >
                        <Input.TextArea
                            maxLength={100}
                            style={{ height: 156, resize: 'none', fontSize: '16px' }}
                            placeholder="Enter your briefing information"
                        />
                    </Form.Item>
            </Card>
            
        </div>
    );
};

export default GeneraInformation;