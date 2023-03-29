import React from 'react';
import { Row, Col, Typography, Empty } from 'antd';
import 'antd/dist/antd.css';
const { Text } = Typography;

interface EmptyListProps {
    message?: string;
  }

const EmptyList :React.FC<EmptyListProps> = ({ message='this Date' }) => {
  return (
    <>
    <Row>
        <Col span={24} sm={{ span: 24}} lg={{ span: 12,offset:6 }} md={{ span: 20,offset:2 }} style={{marginTop:10,paddingBottom:10,borderBottom:'1px solid black'}}>
          <Empty description={
            <span style={{fontSize:16}}>
                <Text>No interview scheduled for {message} </Text>
            </span>
            }>
                </Empty>
        </Col>
    </Row>
    </>
  );
};

export default EmptyList;
