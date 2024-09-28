
import React from 'react';
import { Card, Col, Row,Typography } from 'antd';

const Dashboard = () => (
  <>
  <Typography> <h1>Dashboard</h1></Typography>
  <Row gutter={16}>
    
    <Col span={8}>
      <Card title="Department" bordered={false}>
      0
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Doctor" bordered={false}>
        0
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Patient" bordered={false}>
       0
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Patient Appointment" bordered={false}>
       0
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Patient Case Studies" bordered={false}>
       0
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Invoice" bordered={false}>
       0
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Prescription" bordered={false}>
       0
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Payment" bordered={false}>
        0
      </Card>
    </Col>
  </Row>
  </>
);

export default Dashboard;
