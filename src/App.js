import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SideNav from "./components/SideNav";
import { Routes,Route } from "react-router-dom";

import LoginLayout from "./LayOut/LoginLayout";
import AdminLayout from "./LayOut/AdminLayout";
import Login from "./components/Login";
import Wizard from "./components/Wizard";
function App() {
  return (
    <div className="wrapper">
      {/* <Header></Header>
      <Home></Home> 
      <Footer></Footer>
      <SideNav></SideNav>  */}
      
      <Routes>
      <Route path="/" element={<LoginLayout></LoginLayout>}>
        <Route index element={<Login></Login>} />
      </Route>
      <Route path="/user/" element={<AdminLayout></AdminLayout>}>
        <Route index element={<Home />} />
        <Route path="wizard" element={<Wizard></Wizard>} />
      
        

      </Route>
      </Routes>
    </div>
  );
}

export default App;
