import React from 'react';
import { Row, Col, Typography, Empty } from 'antd';
import 'antd/dist/antd.css';
import styles from './DashBoard.module.scss';
const { Title } = Typography;
interface HeadingProps {
    heading?: string;
  }

const Heading :React.FC<HeadingProps> = ({ heading='Today' }) => {
  return (
    <>
    <Row justify='start'>
        <Col span={6} sm={{ span: 12}} lg={{ span: 12,offset:6 }} md={{ span: 10, offset:2 }} style={{marginTop:10,paddingBottom:10}}>
            <Title level={4} underline style={{textAlign:'initial'}}>{heading} </Title>
        </Col>
    </Row>
    </>
  );
};

export default Heading;
