// import API from "./Api"



// export const saveCustomers = async (values) => {
//     const response = await API.post(`customers`, values,
//         { headers: { 'Content-Type': 'application/json'}}).catch(
//             err => message.error('Registration Successful')
//         )
//     return response ? response.data : {}   
     
// }



 

// export const getbooklist = async() => {
//     const response = await API.get(`api/getbookap/`,
//     {headers : {'Content-Type':'application/json'}}).catch(
//         err => message.error('regisration failed.')
//     )
//     return response ? response.data: {}
// }

// export const  updateSchedule = async (putData, id) => {
//     console.log(id,'@@@@id')
//     console.log( putData,'4566')
    
//     const response = await API.put(`api/updatedataschedule/${id}`, putData,
//         { headers: { 'Content-Type': 'application/json' } }).catch(
//             err => message.error('Not Fetch')
//         )
    
//     return response ? response.data : {}

// }  

// export const  Scheduledelete = async (id) => {
//     try {
//       const response = await API.delete(`api/deleteSchedule/${id}`);
//       return response.data;
//     } catch (error) {
//       console.error("Error deleting doctor:", error);
//       return error.response ? error.response.data : {};
//     }
//   };