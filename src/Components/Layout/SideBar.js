import React from "react";
import { uiActions } from "../../Store/ui-slice";
import { useDispatch,useSelector } from "react-redux";
import { Container,Button } from "react-bootstrap";
import classes from "./SideBar.module.css";
import { CiInboxIn, CiInboxOut } from "react-icons/ci";
import { GrAdd } from "react-icons/gr";
import {NavLink} from'react-router-dom';
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import { authActions } from "../../Store/auth-slice";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  const dispatch = useDispatch();
  const toggleCompose = () => {
    dispatch(uiActions.toggle());
  };
  
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
  const totalMails =  useSelector((state)=>state.mail.totalMails)
    const navigate = useNavigate();
  const logoutHandler=()=>{
  dispatch(authActions.logout());
  navigate('/login');
  }
  return (
    <Container style={{ height:"100%",marginTop: "2rem",borderRight:" 3px solid rgb(156, 156, 156)"}}>
      <div className={classes.buttonCotainer}>
        {" "}
        {/* <span>{totalMails}</span> */}
        <button id={classes.compose} onClick={toggleCompose}>
          <GrAdd /> Compose{" "}
        </button>
      </div>
     {  <div className={classes.inoutContainer}>
        <div className={classes.SideBarItem}>
        {/* <span>{totalMails}</span> */}
          <CiInboxIn className={classes.icons} />
          <NavLink className={classes.link} to="/inbox">Inbox</NavLink>
        </div>
        <div className={classes.SideBarItem}>
        <span>{totalMails}</span>
          <CiInboxOut className={classes.icons} />
          <NavLink className={classes.link} to="/home">SentBox</NavLink>
        </div>
      </div>}
      <div>
      <div  className={classes.navConatiner} style={{padding:"0",margin:"0"}}>
                {(
                  <li className="nav-item">
                    <NavLink to="/home" className="nav-link fs-5">
                      <AiIcons.AiOutlineHome
                        style={{ position: "relative", bottom: "3px" }}
                      />{" "}
                      Home
                    </NavLink>
                  </li>
                )}
                { (
                  <li className="nav-item ">
                    <NavLink to="/login" className="nav-link fs-5">
                      <AiIcons.AiOutlineLogin
                        style={{ position: "relative", bottom: "3px" }}
                      />{" "}
                      Login
                    </NavLink>
                  </li>
                )}
                {!isLoggedIn &&  (
                  <li className="nav-item ">
                    <NavLink to="/" className="nav-link fs-5">
                      <BsIcons.BsClipboard
                        style={{ position: "relative", bottom: "3px" }}
                      />{" "}
                      SignUp
                    </NavLink>
                  </li>
                )}
                {(
                  <li className="nav-item ">
                    <NavLink to="/home/profile" className="nav-link fs-5 me-2">
                      <CgIcons.CgProfile
                        style={{ position: "relative", bottom: "2px" }}
                      />{" "}
                      My Profile
                    </NavLink>
                  </li>
                )}
                { (
                  <li className="nav-item d-flex  align-items-center">
                    <Button
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        padding: "0 5px 0 3px",
                        color:"black"
                      }}
                      className="fs-5"
                      onClick={logoutHandler}
                    >
                      <AiIcons.AiOutlineLogout
                        style={{ position: "relative", bottom: "2px" }}
                      />{" "}
                      Logout
                    </Button>
                  </li>
                )}
                

              </div>
      </div>
    </Container>
  );
};
export default SideBar;
