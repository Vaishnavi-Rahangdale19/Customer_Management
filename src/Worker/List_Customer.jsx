import React, { useState } from 'react';  
import './List_Customer.css'; // Import the CSS file for styling  

const TableWithManualInput = () => {  
  const [data, setData] = useState([  
    { id: 1, name: 'John Doe', age: 28, city: 'New York' },  
    { id: 2, name: 'Jane Smith', age: 32, city: 'Los Angeles' },  
    { id: 3, name: 'Alice Johnson', age: 24, city: 'Chicago' },  
  ]);  

  const [newName, setNewName] = useState('');  
  const [newAge, setNewAge] = useState('');  
  const [newCity, setNewCity] = useState('');  
  const [editableId, setEditableId] = useState(null);  

  const addNewRow = () => {  
    if (newName && newAge && newCity) {  
      const newRow = {  
        id: data.length + 1,  
        name: newName,  
        age: parseInt(newAge),  
        city: newCity  
      };  
      setData([...data, newRow]);  
      resetInputFields();  
    }  
  };  

  const editRow = (row) => {  
    setEditableId(row.id);  
    setNewName(row.name);  
    setNewAge(row.age);  
    setNewCity(row.city);  
  };  

  const updateRow = () => {  
    setData(data.map(row =>  
      row.id === editableId ? { ...row, name: newName, age: parseInt(newAge), city: newCity } : row  
    ));  
    resetInputFields();  
  };  

  const deleteRow = (id) => {  
    setData(data.filter(row => row.id !== id));  
  };  

  const resetInputFields = () => {  
    setNewName('');  
    setNewAge('');  
    setNewCity('');  
    setEditableId(null);  
  };  

  return (  
    <div className="table-container">  
      <h2>Customer Table</h2>  
      <div className="table-responsive">  
        <table className="animated-table">  
          <thead>  
            <tr>  
              <th>Name</th>  
              <th>Mobile Number</th>  
              <th>Address</th>  
              <th>Actions</th>  
            </tr>  
          </thead>  
          <tbody>  
            {data.map((row) => (  
              <tr key={row.id} className="table-row">  
                <td>{row.name}</td>  
                <td>{row.age}</td>  
                <td>{row.city}</td>  
                <td>  
                  <button onClick={() => editRow(row)} className="edit-btn">Edit</button>  
                  <button onClick={() => deleteRow(row.id)} className="delete-btn">Delete</button>  
                </td>  
              </tr>  
            ))}  
            {/* Manual Input Row */}  
            <tr className="input-row">  
              <td>  
                <input type="text" placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)} />  
              </td>  
              <td>  
                <input type="number" placeholder="Mobile Number" value={newAge} onChange={(e) => setNewAge(e.target.value)} />  
              </td>  
              <td>  
                <input type="text" placeholder="Address" value={newCity} onChange={(e) => setNewCity(e.target.value)} />  
              </td>  
              <td>  
                {editableId ? (  
                  <button onClick={updateRow} className="update-btn">Update</button>  
                ) : (  
                  <button onClick={addNewRow} className="add-btn">Add</button>  
                )}  
              </td>  
            </tr>  
          </tbody>  
        </table>  
      </div>  
    </div>  
  );  
};  

export default TableWithManualInput;