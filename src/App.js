import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home  from './pages/HomePage/Home'
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { Topbar } from './components'
import GlobalStyle from './globalStyles';
import ManageAppointment from './pages/Admin/Appointmtnt/ManageAppointment';
import CreateAppointment from './pages/Admin/Appointmtnt/CreateAppointment';
import ManageUsers from './pages/Admin/Users/ManageUsers';
import CreateUsers from './pages/Admin/Users/CreateUsers';





const App = () => {
  const user = true;
  return (
    <>
        <Router>
          <GlobalStyle />
          <Topbar />
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/sign-up' element={user ? <Home/> :<Register/>} />
            <Route path='/login' element={user ? <Home/> :<Login/>} />
            <Route path='/manage-appointment' element={user ? <ManageAppointment /> :<Register/>} />
            <Route path='/create-appointment' element={user ? <CreateAppointment /> :<Register/>} />
            <Route path='/manage-users' element={user ? <ManageUsers /> :<Register/>} />
            <Route path='/create-users' element={user ? <CreateUsers /> :<Register/>} />
          </Routes>
        </Router>
    </>
  )
}

export default App


// import Topbar from "./Components/Topbar/Topbar";
// import Home from "./Components/Home/Home";
// import Register from "./Pages/Register/Register";
// import Login from "./Pages/Login/Login";
// import Write from "./Pages/Write/Write";
// import Settings from "./Pages/Settings/Settings";
// import Single from "./Pages/Single/Single";


// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// function App() {
//   const user = true;
//   return (
//    <Router>
//       <Topbar />
//       <Routes>
//           <Route exact path='/' element={<Home/>} />
//           <Route path='/Register' element={user ? <Home/> :<Register/>} />
//           <Route path='/Login' element={user ? <Home/> :<Login/>} />
//           <Route path='/Write' element={user ? <Write/> :<Register/>} />
//           <Route path='/Settings' element={user ? <Settings/> :<Register/>} />
//           <Route path=':id' element={<Single/>} />
//       </Routes>
//    </Router>
//   );
// }

// export default App;
