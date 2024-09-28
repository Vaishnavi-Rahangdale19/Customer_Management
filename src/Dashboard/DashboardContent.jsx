import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button, Spin, message } from "antd";
import { TeamOutlined, MessageOutlined, PhoneOutlined } from '@ant-design/icons'; // Updated icons
import "../Dashboard/DashboardContent.css";
// import AddWorker from "../Worker/AddWorker";
const DashboardContent = () => {
  const [loading, setLoading] = useState(true);
  const [counts, setCounts] = useState({ workers: 0, feedback: 0, support: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call results for workers, feedback, and support
        const workerCount = 15;  // Simulated count for workers
        const feedbackCount = 35;  // Simulated count for feedback
        const supportCount = 8;   // Simulated count for support

        setCounts({
          workers: workerCount,
          feedback: feedbackCount,
          support: supportCount,
        });
      } catch (error) {
        message.error('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const data = [
    {
      title: "Workers",
      icon: <TeamOutlined />,  // Icon for workers
      count: counts.workers,
      description: "Active workers.",
    },
    {
      title: "Feedback",
      icon: <MessageOutlined />,  // Icon for feedback
      count: counts.feedback,
      description: "Total feedback entries.",
    },
    {
      title: "Support",
      icon: <PhoneOutlined />,  // Icon for support
      count: counts.support,
      description: "Support requests.",
    }
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-content">
        {loading ? (
          <div className="loading-spinner">
            <Spin size="large" />
          </div>
        ) : (
          <Row gutter={20} justify="center">
            {data.map((item, index) => (
              <Col
            //   xs={24} sm={12} md={8} lg={6}
              key={index}>
                <Card className="dashboard-card">
                  <div className="card-content">
                    <div className="icon-container">
                      {item.icon}
                    </div>
                    <p className="count">{item.count}</p>
                  </div>
                  <p className="card-title">{item.title}</p>
                  <p className="card-description">{item.description}</p> <br />
                  {/* <Button type="primary">View Details</Button> */}
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default DashboardContent;
