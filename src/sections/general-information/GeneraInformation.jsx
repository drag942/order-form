import React, {useState} from 'react';
import {Card, Col, Form, Input, Row, Select} from "antd";
import {
    categories,
    contentTypes,
    getDatesOfWeek,
    languages,
    seoWordCount,
    smmWordCount,
    wordCounts
} from "../../common/constants";

const GeneraInformation = () => {

    const [stateWordCount, setStateWordCount] = useState(wordCounts);

    const form = Form.useFormInstance();
    const contentType = Form.useWatch('content_type', form);

    const onSelectContentType = (type) => {
        form.resetFields(['word_count'])
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
                            >
                                <Input size="large" placeholder="Enter Title"/>
                            </Form.Item>
                        </Col>
                        <Col flex="364px" style={{ marginLeft: '24px' }}>
                            <Form.Item
                                label="Content Type"
                                name="content_type"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose content type!',
                                    },
                                ]}
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
                                name="word_count"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose word count!',
                                    },
                                ]}
                                style={{
                                    opacity: !contentType ? 0.5 : 1
                                }}
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
                                initialValue="🇺🇸 English"
                            >
                                <Select size="large">
                                    {languages.map((item) =>
                                        <Select.Option key={item} value={item}>{item}</Select.Option>)}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        label="Keywords"
                        name="keywords"
                    >
                        <Input size="large" placeholder="Separate each keyword with a comma"/>
                    </Form.Item>
                    <Form.Item
                        label="Brief"
                        name="brief"
                        style={{
                            marginBottom: 0
                        }}
                    >
                        <Input.TextArea
                            maxLength={100}
                            style={{ height: 156, resize: 'none', fontSize: '16px' }}
                            placeholder="Please, provide detailed requirements for your content.Describe the target audience, tone of voice, purpose of the content (informative, SEO, entertaining), technical requirements (characters limit for H1, H2; headings), brand content style."
                        />
                    </Form.Item>
            </Card>
            
        </div>
    );
};

export default GeneraInformation;