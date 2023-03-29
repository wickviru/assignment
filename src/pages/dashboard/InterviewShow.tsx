import React, { useState } from 'react';
import { Row, Col, Button, Typography, Divider, Empty } from 'antd';
import 'antd/dist/antd.css';
const { Text } = Typography;

interface InterviewProps {
    name: string;
    time: string;
  }

const InterviewShow :React.FC<InterviewProps> = ({ name, time }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <>
    <Row>
        <Col span={24} sm={{ span: 24}} lg={{ span: 12,offset:6 }} md={{ span: 20,offset:2 }} style={{height: 80,backgroundColor: hovered ? 'rgb(230, 255, 230)' : 'transparent',borderBottom:'1px solid black',borderRadius:5}} onMouseEnter={handleHover}
        onMouseLeave={handleLeave}>
            <Row>
                <Col span={10}  style={{marginTop:10,paddingLeft:10}}>
                    <Row>
                        <Col>
                            <Text>{name}</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Text type="secondary">Role Senior Developer</Text>
                        </Col>
                    </Row>
                 </Col>
                <Col span={10} style={{marginTop:10,paddingLeft:10}}>
                    <Row justify="end">
                        <Col>
                            <Text>{time}</Text>
                        </Col>
                    </Row>
                    <Row justify="end">
                        <Col>
                        <Text type="success">
                            view history
                        </Text>
                        </Col>
                    </Row>
                    
                </Col>
                <Col span={4} >
                    <Button
                        type="default"
                        style={{backgroundColor: hovered ? 'rgb(51, 204, 51)' : 'transparent', fontSize: 14, marginTop: 23, marginLeft: 0,color: hovered ? 'white':'black',borderRadius:10 }}
                        size="middle">
                        Join Now
                    </Button>
                </Col>
            </Row>
        </Col>
    </Row>
    </>
  );
};

export default InterviewShow;
