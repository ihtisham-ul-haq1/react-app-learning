import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
export const Navbar = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/menu"> Menu </Link>
          </li>

          <li>
            <Link to="/todo"> Todo </Link>
          </li>
          <li>
            <Link to="/prayer"> Prayer </Link>
          </li>
          <li>
            <Link to="/Login"> Login </Link>
          </li>
          <li>
            <Link to="/reactQuery"> React Query </Link>
          </li>

           <li>
            <Link to="/register"> Formik </Link>
          </li>
          <li>
            <Link to="/customHook"> MyHook </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/redux"> Redux </Link>
          </li>
          <li>
            <Link to="/reduxThunk"> ReduxThunk </Link>
          </li>

          <li>
            <Link to="/todo"> ReduxRTK </Link>
          </li>
          <li>
            <Link to="/prayer"> Zustand </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
