// import { useState, useEffect } from "react";
// import { Box, Typography, Button } from "@mui/material";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import axios from 'axios';
// import { useTheme } from "@emotion/react";
// import { tokens } from "../../theme";
// import Header from "../../components/Header";
// import StatBox from "../../components/StatBox";
// import TrafficIcon from "@mui/icons-material/Traffic";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";

// const Team = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [userdata, setUserData] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);

//   const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/admin/allusers`);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error;
//     }
//   };

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const result = await fetchData();
//         setUserData(result.data); 
//       } catch (error) {
//         console.error('Fetching data error', error);
//       }
//     };
//     getData();
//   }, []);

//   const handleViewProfileClick = (user) => {
//     setSelectedUser(user);
//   };

//   const handleBackClick = () => {
//     setSelectedUser(null); 
//   };

//   const handleActiveToggle = (userId) => {
//     setUserData((prevData) =>
//       prevData.map((user) =>
//         user.id === userId ? { ...user, active: !user.active } : user
//       )
//     );
//     if (selectedUser && selectedUser.id === userId) {
//       setSelectedUser((prev) => ({ ...prev, active: !prev.active }));
//     }
//   };

//   if (selectedUser) {
//     const textStyle = selectedUser.active
//       ? {}
//       : { color: 'red', filter: 'blur(2px)', textDecoration: 'line-through' };

//     return (
//       <Box m="40px 0" display="flex" flexDirection="column" alignItems="center">
//         <Box sx={{ width: '50%', padding: '20px', backgroundColor: colors.primary[400], textAlign: 'center' }}>
//           <ArrowBackIcon onClick={handleBackClick} sx={{ cursor: 'pointer', fontSize: '2rem', mb: 2 }} />
//           <Typography variant="h4" sx={{ color: '#4CCEAC', margin: '8px', ...textStyle }} gutterBottom>
//             {selectedUser.name}
//           </Typography>
//           <Typography variant="body1" color={colors.grey[100]} gutterBottom sx={{ margin: '8px', ...textStyle }}>
//             ID: {selectedUser.id}
//           </Typography>
//           <Typography variant="body1" color={colors.grey[100]} gutterBottom sx={{ margin: '8px', ...textStyle }}>
//             Age: {selectedUser.age}
//           </Typography>
//           <Typography variant="body1" color={colors.grey[100]} gutterBottom sx={{ margin: '8px', ...textStyle }}>
//             Email: {selectedUser.email}
//           </Typography>
//           <Typography variant="body1" color={colors.grey[100]} gutterBottom sx={{ margin: '8px', ...textStyle }}>
//             Phone: {selectedUser.phone}
//           </Typography>
//           <Typography variant="body1" color={colors.grey[100]} gutterBottom sx={{ margin: '8px', ...textStyle }}>
//             Access Level: {selectedUser.accessLevel}
//           </Typography>
//           <Button variant="contained" color={selectedUser.active ? 'success' : 'error'} onClick={() => handleActiveToggle(selectedUser.id)}>
//             {selectedUser.active ? 'Deactivate' : 'Activate'}
//           </Button>
//         </Box>
//       </Box>
//     );
//   }

//   return (
//     <>
//       <Box m="20px">
//         <Box component="div">
//           <Box display="grid" gridTemplateColumns="repeat(6, 3fr)" gridAutoRows="140px" gap="20px">
//             <Box display="flex" justifyContent="space-between" alignItems="center" gridColumn="span 6">
//               <Header title="TOTAL USERS" subtitle="Managing the All User" />
//               <Button variant="contained" color="primary">
//                 DELETE USER
//               </Button>
//             </Box>
//           </Box>
//           <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
//             <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
//               <StatBox
//                 subtitle="Daily User"
//                 title="40"
//                 icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
//               />
//             </Box>
//             <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
//               <StatBox
//                 title="90"
//                 subtitle="Weekly User"
//                 icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
//               />
//             </Box>
//             <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
//               <StatBox
//                 title="60"
//                 subtitle="Monthly User"
//                 icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
//               />
//             </Box>
//             <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
//               <StatBox
//                 title="190"
//                 subtitle="Total User"
//                 icon={<TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
//               />
//             </Box>
//           </Box>

//           <Box mt="40px" sx={{ width: '100%', overflowX: 'auto' }}>
//             <Typography variant="h5" mb={2}>User Data</Typography>
//             <Box component="table" width="100%" borderCollapse="collapse">
//               <thead >
//                 <tr style={{backgroundColor: colors.primary[500]}}>
//                   <th style={{ border: `1px solid ${colors.grey[300]} `, padding: '14px 8px', textAlign: 'left', backgroundColor: colors.primary[400] }}>User Id</th>
//                   <th style={{ border: `1px solid ${colors.grey[300]}`, padding: '8px', textAlign: 'left', backgroundColor: colors.primary[400] }}>Name</th>
//                   <th style={{ border: `1px solid ${colors.grey[300]}`, padding: '8px', textAlign: 'left', backgroundColor: colors.primary[400] }}>Email</th>
//                   <th style={{ border: `1px solid ${colors.grey[300]}`, padding: '8px', textAlign: 'left', backgroundColor: colors.primary[400] }}>Role</th>
//                   <th style={{ border: `1px solid ${colors.grey[300]}`, padding: '8px', textAlign: 'left', backgroundColor: colors.primary[400] }}>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {userdata.length > 0 ? (
//                   userdata.map((user, index) => (
//                     <tr key={index} style={{ backgroundColor: colors.primary[400] }}>
//                       <td style={{ padding: '8px', backgroundColor: colors.primary[400] }}>{user.Users_PK}</td>
//                       <td style={{ padding: '8px', backgroundColor: colors.primary[400] }}>{user.name}</td>
//                       <td style={{ padding: '8px', backgroundColor: colors.primary[400] }}>{user.email}</td>
//                       <td style={{ padding: '8px', backgroundColor: colors.primary[400] }}>{user.role}</td>
//                       <td style={{ padding: '8px', backgroundColor: colors.primary[400] }}>
//                         <Box display="flex" gap="10px" justifyContent="center">
//                           <Button variant="contained" color="primary" onClick={() => handleViewProfileClick(user)}>
//                             Profile
//                           </Button>
//                           {user.active && (
//                             <Button
//                               variant="contained"
//                               color="error"
//                               onClick={() => handleActiveToggle(user.id)}
//                             >
//                               Deactivate
//                             </Button>
//                           )}
//                           <Box
//                             width="60%"
//                             m="0 auto"
//                             p="5px"
//                             sx={{ border: `2px solid ${colors.greenAccent[600]}` }}
//                           >
//                             <Typography
//                               color={user.active ? colors.greenAccent[600] : colors.redAccent[600]}
//                               sx={{ fontWeight: 'bold' }}
//                             >
//                               {user.active ? 'Active' : 'Inactive'}
//                             </Typography>
//                           </Box>
//                         </Box>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="5" style={{ textAlign: 'center', padding: '16px' }}>No Data Available</td>
//                   </tr>
//                 )}
//               </tbody>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Team;






import { useEffect, useState } from "react";
import { Box, Typography, useTheme, Button, Avatar } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import TrafficIcon from "@mui/icons-material/Traffic";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import StatBox from "../../components/StatBox";
import Header from "../../components/Header";
import axios from "axios";
import img from '../podcast/image1.jpeg'

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [team, setTeam] = useState([]); // State to hold fetched data
  const [selectedUser, setSelectedUser] = useState(null); // State to handle selected user profile
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/admin/allusers
`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        console.log("Fetched data:", result);

        // Set fetched data to state with active status as true by default
        const updatedData = result.data.map(user => ({
          ...user,
          active: true
        }));
        setCount(result.count)
        console.log(updatedData)
        setTeam(updatedData);
      } catch (error) {
        console.error('Fetching data error', error);
      }
    };
    getData();
  }, []);

  const DailyEnterpreneurHandle = () => {
    navigate('/dailyEnterpreneur');
  };

  const WeeklyEnterpreneurHandle = () => {
    navigate('/weeklyEnterpreneur');
  };

  const MonthlyEnterpreneurHandle = () => {
    navigate('/monthlyEnterpreneur');
  };

  const TotalEnterpreneurHandle = () => {
    navigate('/totalyEnterpreneur');
  };

  const handleViewProfileClick = (user) => {
    setSelectedUser(user); // Set selected user for profile view
  };

  const handleBackClick = () => {
    setSelectedUser(null); // Reset to show the table
  };

  const deActivateUser = async (id) =>{
    const data = {"isBlocked":"true"}
    console.log('deavtivating ',id)
    const req = await fetch(`http://localhost:5000/users/${id}`,{
      method:'PUT',
      headers: {
        'Content-Type': 'application/json' // Set the correct content-type header
      },
      body:JSON.stringify(data)
    })
    const d = await req.json()
    console.log({d})
  }
  const handleActiveToggle = (userId) => {
    const updatedEntrepreneurData = team.map((user) =>
      user.Users_PK === userId ? { ...user, active: !user.active } : user
    );
    setTeam(updatedEntrepreneurData);
    if (selectedUser && selectedUser.Users_PK === userId) {
      setSelectedUser({ ...selectedUser, active: !selectedUser.active });
    }
  };

  const columns = [
    {
      field: "profile",
      headerName: "Profile",
      flex: 1,
      renderCell: (params) => (
        <Avatar alt={img} src={params.row.picUrl} />
      ),
    },
    // { field: "id", headerName: "ID", valueGetter: (params) => params.row.Users_PK },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      valueGetter: (params) => params.row.name,
      cellClassName: (params) => params.row.active ? "name-column--cell" : "name-column--cell inactive",
    },
    {
      field: "isBlocked",
      headerName: "Status",
      flex: 1,
      valueGetter: (params) => params.row.isBlocked,
      cellClassName: (params) => params.row.active ? "" : "inactive",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      valueGetter: (params) => params.row.email,
      cellClassName: (params) => params.row.active ? "" : "inactive",
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      valueGetter: (params) => params.row.role,
      cellClassName: (params) => params.row.active ? "" : "inactive",
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <Box display="flex" gap="10px">
          <Button variant="contained" color="primary" onClick={() => handleViewProfileClick(params.row)}>
            Profile
          </Button>
          <Button
            variant="contained"
            color={params.row.active ? "success" : "error"}
            onClick={() => {
            handleActiveToggle(params.row.Users_PK);
            console.log(params.row.Users_PK)
            deActivateUser(params.row.Users_PK)
            }}
          >
            {params.row.active ? "Deactivate" : "Activate"}
          </Button>
        </Box>
      ),
    },
  ];

  if (selectedUser) {
    const textStyle = selectedUser.active
      ? {}
      : { color: 'red', filter: 'blur(2px)', textDecoration: 'line-through' };

    return (
      <Box m="40px 0" display="flex" flexDirection="column" alignItems="center">
        <Box sx={{ width: '50%', padding: '20px', backgroundColor: colors.primary[400], textAlign: 'center' }}>
          <ArrowBackIcon onClick={handleBackClick} sx={{ cursor: 'pointer', fontSize: '2rem', mb: 2 }} />
          <Typography variant="h4" sx={{ color: '#4CCEAC', margin: '8px', ...textStyle }} gutterBottom>
            <Avatar alt={selectedUser.name} src={selectedUser.picUrl} sx={{ width: '100%', height: 'auto', maxWidth: '150px', border: `2px solid ${colors.grey[100]}` }} />
          </Typography>
          <Typography variant="body1" color={colors.grey[100]} gutterBottom sx={{ margin: '8px', ...textStyle }}>
            ID: {selectedUser.Users_PK}
          </Typography>
          <Typography variant="body1" color={colors.grey[100]} gutterBottom sx={{ margin: '8px', ...textStyle }}>
            Name: {selectedUser.name}
          </Typography>
          <Typography variant="body1" color={colors.grey[100]} gutterBottom sx={{ margin: '8px', ...textStyle }}>
            Password: {selectedUser.password}
          </Typography>
          <Typography variant="body1" color={colors.grey[100]} gutterBottom sx={{ margin: '8px', ...textStyle }}>
            Email: {selectedUser.email}
          </Typography>
          <Typography variant="body1" color={colors.grey[100]} gutterBottom sx={{ margin: '8px', ...textStyle }}>
            Role: {selectedUser.role}
          </Typography>
          <Button variant="contained" color={selectedUser.active ? 'success' : 'error'} onClick={() => handleActiveToggle(selectedUser.Users_PK)}>
            {selectedUser.active ? 'Deactivate' : 'Activate'}
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box m="20px">
      <Box>
        <Box display="grid" gridTemplateColumns="repeat(6, 3fr)" gridAutoRows="140px" gap="20px">
          <Box display="flex" justifyContent="space-between" alignItems="center" gridColumn="span 6">
            <Header title="TOTAL ENTERPRENEUR" subtitle="Managing the All Enterpreneur" />
          </Box>
        </Box>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
          <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" onClick={DailyEnterpreneurHandle}>
            <StatBox
              subtitle="Daily Enterpreneur"
              title="40"
              icon={<InsertInvitationIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
            />
          </Box>
          <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" onClick={WeeklyEnterpreneurHandle}>
            <StatBox
              title="90"
              subtitle="Weekly Enterpreneur"
              icon={<InsertInvitationIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
            />
          </Box>
          <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" onClick={MonthlyEnterpreneurHandle}>
            <StatBox
              title="60"
              subtitle="Monthly Enterpreneur"
              icon={<InsertInvitationIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
            />
          </Box>
          <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" onClick={TotalEnterpreneurHandle}>
            <StatBox
              title={`${count}`}
              subtitle="Total Enterpreneur"
              icon={<TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
            />
          </Box>
        </Box>

        <Box m="40px 0 0 0" height="75vh" sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .name-column--cell": { color: colors.greenAccent[300] },
          "& .name-column--cell.inactive": { filter: 'blur(2px)', color: 'red', textDecoration: 'line-through' },
          "& .MuiDataGrid-columnHeaders": { backgroundColor: colors.blueAccent[700], borderBottom: "none" },
          "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
          "& .MuiDataGrid-footerContainer": { borderTop: "none", backgroundColor: colors.blueAccent[700] },
        }}>
          <DataGrid rows={team} columns={columns} getRowId={(row) => row.Users_PK} />
        </Box>
      </Box>
    </Box>
  );
};

export default Team;