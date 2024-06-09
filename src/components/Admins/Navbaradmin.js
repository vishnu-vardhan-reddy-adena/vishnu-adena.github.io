import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnlink,
} from "./Navbarelements";

const Navbars = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/Admin">Home</NavLink>
          <NavLink to="/Admin/AuthorizedComponent">Users</NavLink>
          <NavLink to="/Admin/ReservationDetails">Reservations</NavLink>

          <NavLink to="/Admin/AutoMobileUpdate">EditAutoMobile</NavLink>
          <NavLink to="/Admin/handleDelete">DeleteAutoMobile</NavLink>

          <NavLink to="/Admin/Automobile">AddAutomobile</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbars;
