import React, {useState} from 'react';
import {Card, Col, Divider, Row} from "antd";
import { ReactComponent as LightIcon } from '../../common/images/LightIcon.svg';
import { ReactComponent as StarIcon } from '../../common/images/StarIcon.svg'
import { ReactComponent as DiamondIcon } from '../../common/images/DiamondIcon.svg'

const writersLevels = [
    {
        name: 'Best Available',
        key: 'best',
        icon: <LightIcon/>,
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        isPopular: false,
        cost: 0.02
    },
    {
        name: 'Top Writer',
        key: 'top',
        icon: <StarIcon/>,
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        isPopular: true,
        cost: 0.05
    },
    {
        name: 'First Rate Writer',
        key: 'first_rate',
        icon: <DiamondIcon/>,
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        isPopular: false,
        cost: 0.09
    },

];

const WriterLevel = ({setPricePerWord}) => {
    const [selected, setSelected] = useState();
    return (
        <div className="writer_level">
            <Card title="Writer Level">
                <Row justify="space-between">
                    {writersLevels.map((level) => {
                        return (
                            <Col flex="240px" key={level.key}>
                                <div
                                    className={`writer_level__card${selected === level.key ? '-selected' : ''}`}
                                    onClick={() => {
                                        setSelected(level.key)
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
            </Card>
        </div>
    );
};

export default WriterLevel;