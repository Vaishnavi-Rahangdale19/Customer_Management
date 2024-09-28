import React, { useEffect } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import './AddWorker1.css'; // Import the CSS file
import { saveCustomers } from '../Api/Coreapi';
const { Option } = Select;

const AddCustomer = ({ workerData = null }) => {
  const [form] = Form.useForm();

  // Pre-fill form fields if customerData is provided (for update)
  useEffect(() => {
    if (workerData) {
      form.setFieldsValue(workerData);
    }
  }, [workerData, form]);

  const onFinish = async (values) => {

    const response = await saveCustomers(values)
    
    // if (workerData) {
    //   // Update customer logic
    //   console.log('Updated Customer Values: ', values);
    //   message.success('Customer updated successfully!');
    // } else {
    //   // Add customer logic
    //   console.log('Added Customer Values: ', values);
    //   message.success('Customer added successfully!');
    // }
    form.resetFields(); // Optionally reset the form after successful submission
  };

  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo);
    message.error('Failed to submit the form, please check the fields.');
  };

  return (
    <div className="add-customer-container">
      <div className="form-column-container">
        <div className="vertical-bar"></div>
        <div className="form-content">
          <h2>{workerData ? 'Update Worker' : 'Add New Customer'}</h2>
          <Form
            form={form}
            name="addCustomerForm"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            {/* Worker Name */}
            <Form.Item
              label="Customer Name"
              name="customerName"
              rules={[{ required: true, message: 'Please enter the customer name!' }]}
            >
              <Input placeholder="Enter customer's name" />
            </Form.Item>

            {/* Mobile Number */}
            <Form.Item
              label="Mobile Number"
              name="mobileNumber"
              rules={[
                { required: true, message: 'Please enter a valid mobile number!' },
                { pattern: /^[0-9]{10}$/, message: 'Mobile number must be 10 digits long!' }
              ]}
            >
              <Input placeholder="Enter customer's mobile number" />
            </Form.Item>

           

            {/* Address */}
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: 'Please enter the address!' }]}
            >
              <Input.TextArea rows={2} placeholder="Enter customer's address" />
            </Form.Item>

            
            {/* Submit Button */}
            <br /><br />
            <Form.Item>
              <Button type="primary" htmlType="submit" className="submit-btn">
                {workerData ? 'Update Worker' : 'Add Worker'}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;










