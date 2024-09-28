// import React, { useState } from 'react';
// import { Space, Table, Tag, Modal } from 'antd';

// const PatientShedule = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [selectedRecord, setSelectedRecord] = useState(null);

//   const showModal = (record) => {
//     setSelectedRecord(record);
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   const handleDelete = (key) => {
//     console.log('Deleted record key:', key);
//     // Implement delete functionality here
//   };

//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//       render: (text) => <a>{text}</a>,
//     },
//     {
//       title: 'Email',
//       dataIndex: 'email',
//       key: 'email',
//     },
//     {
//       title: 'Phone',
//       dataIndex: 'phone',
//       key: 'phone',
//     },
//     // {
//     //   title: 'Department',
//     //   dataIndex: 'department',
//     //   key: 'department',
//     // },
//     {
//       title: 'Active',
//       dataIndex: 'active',
//       key: 'active',
//     },
//     {
//       title: 'Tags',
//       key: 'tags',
//       dataIndex: 'tags',
//       render: (_, { tags }) => (
//         <>
//           {tags && tags.map((tag) => {
//             let color = tag.length > 5 ? 'geekblue' : 'green';
//             if (tag === 'loser') {
//               color = 'volcano';
//             }
//             return (
//               <Tag color={color} key={tag}>
//                 {tag.toUpperCase()}
//               </Tag>
//             );
//           })}
//         </>
//       ),
//     },
//     {
//       title: 'Action',
//       key: 'Action',
//       render: (_, record) => (
//         <Space size="middle">
//           <a onClick={() => showModal(record)}>Invite {record.name}</a>
//           <a onClick={() => handleDelete(record.key)}>Delete</a>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div>
//       <Table columns={columns} />

//       <Modal
//         title="Record Details"
//         visible={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         {selectedRecord && (
//           <div>
//             <p>Name: {selectedRecord.name}</p>
//             <p>Email: {selectedRecord.email}</p>
//             <p>Phone: {selectedRecord.phone}</p>
//             <p>Department: {selectedRecord.department}</p>
//             <p>Active: {selectedRecord.active}</p>
//             <p>Tags: {selectedRecord.tags ? selectedRecord.tags.join(', ') : 'None'}</p>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default PatientShedule;
import React, { useState } from 'react';
import { Space, Table, Tag, Modal } from 'antd';
const DoctorShedule = () => {
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
      title: 'Doctor Name',
      dataIndex: 'doctor_name',
      key: 'doctor_name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Weekday',
      dataIndex: 'weekday',
      key: 'weekday',
    },
    {
      title: 'Visiting Time',
      dataIndex: 'visiting_time',
      key: 'visiting_time',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags && tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => showModal(record)}>Invite {record.doctor_name}</a>
          <a onClick={() => handleDelete(record.key)}>Delete</a>
        </Space>
      ),
    },
  ];

  // Empty array as dataSource to ensure no data is displayed in the table
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
            <p>Doctor Name: {selectedRecord.doctor_name}</p>
            <p>Weekday: {selectedRecord.weekday}</p>
            <p>Visiting Time: {selectedRecord.visiting_time}</p>
            <p>Status: {selectedRecord.status}</p>
            <p>Tags: {selectedRecord.tags ? selectedRecord.tags.join(', ') : 'None'}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DoctorShedule ;