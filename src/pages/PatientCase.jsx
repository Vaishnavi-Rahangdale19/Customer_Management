import React, { useState } from 'react';
import { Space, Table, Modal } from 'antd';

const PatientCase= () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const showModal = (record) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = (key) => {
    console.log('Deleted record key:', key);
    // Implement delete functionality here
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Food Allergy',
      dataIndex: 'food_allergy',
      key: 'food_allergy',
    },
    {
      title: 'Heart Disease',
      dataIndex: 'heart_disease',
      key: 'heart_disease',
    },
    {
      title: 'Diabetic',
      dataIndex: 'diabetic',
      key: 'diabetic',
    },
    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => showModal(record)}>Invite {record.name}</a>
          <a onClick={() => handleDelete(record.key)}>Delete</a>
        </Space>
      ),
    },
  ];

  // Empty data array to show only the table headers
  const data = [];

  return (
    <div>
      <Table columns={columns} dataSource={data} />

      <Modal
        title="Record Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedRecord && (
          <div>
            <p>Name: {selectedRecord.name}</p>
            <p>Email: {selectedRecord.email}</p>
            <p>Phone: {selectedRecord.phone}</p>
            <p>Food Allergy: {selectedRecord.food_allergy}</p>
            <p>Heart Disease: {selectedRecord.heart_disease}</p>
            <p>Diabetic: {selectedRecord.diabetic}</p>
            <p>Active: {selectedRecord.active}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PatientCase;
