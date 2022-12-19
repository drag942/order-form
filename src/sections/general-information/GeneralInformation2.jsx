import React, {useEffect, useState} from 'react';
import {
    categories,
    contentTypes,
    languages,
    seoWordCount,
    smmWordCount,
    wordCounts
} from "../../common/constants";
import {Card, Col, Divider, Form, Input, Row, Select, InputNumber} from "antd";
import {writersLevels} from "../writer-level/WriterLevel";

const GeneralInformation2 = () => {
    const [stateWordCount, setStateWordCount] = useState(wordCounts);
    const [selected, setSelected] = useState();
    const [pricePerWord, setPricePerWord] = useState();

    const form = Form.useFormInstance();
    const contentType = Form.useWatch('content_type', form);
    const wordCont = Form.useWatch('word_count', form);

    const price = pricePerWord * wordCont;

    useEffect(() => {
        if (wordCont && pricePerWord) {
            form.setFieldValue('price', price)
        }
    } ,[wordCont, pricePerWord])

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
        <div className="general_information" style={{paddingLeft: 0, paddingRight: 0}}>
            <Card title="General information">
                <Row justify="space-between">
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
                <Row justify="space-between">
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
                <Form.Item
                    label="Writer level"
                    name="writer_level"
                    rules={[
                        {
                            required: true,
                            message: 'Please choose your writer level!',
                        },
                    ]}
                >
                    <Row justify="space-between" >
                        {writersLevels.map((level) => {
                            return (
                                <Col flex="240px" key={level.key}>
                                    <div
                                        className={`writer_level__card${selected === level.key ? '-selected' : ''}`}
                                        onClick={() => {
                                            setSelected(level.key)
                                            form.setFieldValue('writer_level', level.key)
                                            setPricePerWord(level.cost)
                                        }}
                                    >
                                        <div className={`writer_level__card${selected === level.key ? '-selected' : ''}-head`}>
                                            {level.icon}
                                            <span style={{fontWeight: 'bold'}}>{level.name}</span>
                                            {level.isPopular && <span className={`writer_level__card${selected === level.key ? '-selected' : ''}-head--popular`}>POPULAR</span>}
                                        </div>
                                        <div className={`writer_level__card${selected === level.key ? '-selected' : ''}-text`}>
                                            <span>
                                                {level.text}
                                            </span>
                                        </div>
                                        <Divider/>
                                        <div className={`writer_level__card${selected === level.key ? '-selected' : ''}-price`}>
                                            <span className={`writer_level__card${selected === level.key ? '-selected' : ''}-price--cost`}>${level.cost}</span>
                                            <span className={`writer_level__card${selected === level.key ? '-selected' : ''}-price--perword`}>per word</span>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Form.Item>
                <Row justify="space-between">
                    <Col flex="364px">
                        <Form.Item
                            label="Price ($)"
                            name="price"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please choose your project price!',
                                },
                            ]}
                            style={{ opacity: !(wordCont && pricePerWord) ? 0.5 : 1 }}
                            tooltip="The price cannot be lower than 20% than the declared"
                        >
                            <InputNumber
                                size="large"
                                style={{ width: '100%'}}
                                disabled={!(wordCont && pricePerWord)}
                                min={price * 0.8}
                            />
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
    )
};

export default GeneralInformation2;