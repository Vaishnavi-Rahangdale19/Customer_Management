import React, { useState } from 'react';
import '../Dashboard/Sidebarmenu.css';
// import AddWorker from '../Worker/AddWorker';
import AddCustomer from '../Worker/AddWorker';
import DashboardContent from './DashboardContent';
import FeedbackForm from '../Worker/FeedbackForm';
import '@fortawesome/fontawesome-free/css/all.min.css';
import List_Customer from '../Worker/List_Customer';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isWorkerSubmenuOpen, setIsWorkerSubmenuOpen] = useState(false);
  const [activeContent, setActiveContent] = useState('dashboard'); // State to manage active content

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleWorkerSubmenu = () => {
    setIsWorkerSubmenuOpen(!isWorkerSubmenuOpen);
  };

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  // Conditionally render the content based on the selected menu option
  const renderContent = () => {
    switch (activeContent) {
      case 'dashboard':
        return <DashboardContent />;
      case 'addCustomer':
        return <AddCustomer />;
      case 'listcostumer' :
        return <List_Customer/>;
    }
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <i className={`fas ${isOpen ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
        </button>
        {isOpen && (
          <div>
            <div className="sidebar-header">
              <h2 style={{ color: 'white'}}>Dashboard</h2>
            </div>
            <ul className="sidebar-menu">
              <li>
                <a href="#" onClick={() => handleContentChange('dashboard')}>
                  <i className="fas fa-home"></i> Customer Stats
                </a>
              </li>

              {/* Worker Menu with Submenu */}
              <li className="menu-item">
                <a href="#" onClick={toggleWorkerSubmenu} className="worker-link">
                  <i className="fas fa-users"></i> Customer Management {isWorkerSubmenuOpen ? '▲' : '▼'}
                </a>
                {isWorkerSubmenuOpen && (
                  <ul className="submenu">
                    <li>
                      <a href="#" onClick={() => handleContentChange('addCustomer')}>
                        <i className="fas fa-user-plus"></i> Add Customer
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={ () => handleContentChange('listcostumer')}>
                        <i className="fas fa-list"></i> List Customer
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Conditionally render the selected content */}
      <div className="content">{renderContent()}</div>
    </>
  );
};

export default Sidebar;
