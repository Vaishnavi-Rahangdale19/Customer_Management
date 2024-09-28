import logo from './logo.svg';
import './App.css';
import Sidebar from '../src/Dashboard/Sidebarmenu.jsx'
import DashboardC from './Dashboard/DashboardContent.jsx';
import AddWrkr from './Worker/AddWorker.jsx';
import Feedback from './Worker/FeedbackForm.jsx';
import ListCustomer from './Worker/List_Customer.jsx';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     
       <BrowserRouter>
       <Routes>
       {/* <Route path='/Sidebarmenu' element={<Sidebar/>}></Route> */}
       <Route path='/' element={<Sidebar/>}></Route>

       <Route path='/DashboardContent' element={<DashboardC/>}></Route> 

       <Route path='/AddWorker' element={<AddWrkr/>}></Route>

       <Route path='/FeedbackForm' element={<Feedback/>}></Route>
        
       <Route path='/List_Customer' element={<ListCustomer/>}></Route>


       </Routes>
       
       
       </BrowserRouter>




    </div>
  );
}

export default App;
