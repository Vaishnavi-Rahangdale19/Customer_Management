import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Modal, Typography } from 'antd';
// import { Title } from 'antd';

const Messege = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({});

  const onFinish = (values) => {
    console.log('Success:', values);
    setFormData(values);
    setIsModalVisible(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    
    <div> 
      <Typography> <h1>Messege</h1></Typography>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
              
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="Email"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Feedback"
          name="Feedback"
          rules={[
            {
              required: true,
              message: 'Please input your Feedback!',
            },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="Phone no"
          name="Phone no"
          rules={[
            {
              required: true,
              message: 'Please input your Feedback!',
            },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Modal title="Submitted Data" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Username: {formData.username}</p>
        <p>Password: {formData.password}</p>
        <p>Remember me: {formData.remember ? 'Yes' : 'No'}</p>
      </Modal>
    </div>
  );
};

export default Messege;
