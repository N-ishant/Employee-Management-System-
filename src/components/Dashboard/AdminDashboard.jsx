import React from "react";
import PropTypes from "prop-types";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTasks from "../Other/AllTasks";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-7">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

AdminDashboard.propTypes = {
  changeUser: PropTypes.func.isRequired,
};

export default AdminDashboard;