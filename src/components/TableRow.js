import "./TableRow.css";
import StatusSlider from "./StatusSlider";
import DeleteWarning from "./DeleteWarning";
import React, { useState } from "react";

const TableRow = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false)
  
  const showModalHandler = (event) => {
    setShowModal(!showModal);
    console.log(showModal)
  };

 
const onDeleteHandler = (event) => {

setDeleteUser(!deleteUser)
}
   

  if(deleteUser) {
      return null;
  }
  else return    <React.Fragment>
  {showModal && <DeleteWarning toggleModal={showModalHandler} delete={onDeleteHandler}/>}
  <tr>
    <td>
      <i className="fa fa-user-circle-o"></i>
      <h3 >{props.user.name}</h3>
      <span>{props.user.email}</span>
    </td>
    <td>
      <h3>{props.user.role}</h3>
    </td>

    <td>
      <StatusSlider userStatus={props.user.userStatus} open={props.open} />
    </td>

    <td>
      <i className="fa fa-gear" onClick={props.open}></i>
      <i className="fa fa-trash" onClick={showModalHandler}></i>
    </td>
  </tr>
</React.Fragment>


};

export default TableRow;
