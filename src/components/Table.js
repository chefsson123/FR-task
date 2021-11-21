import "./Table.css";
import React, { useState } from "react";
import TableRow from "./TableRow";

import NewUser from "./NewUser";

const Table = (props) => {
  const [addUser, setAddUser] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  let users = props.fetched;

  var specialChars = /[^a-zA-Z0-9 ]/g;

  const onFirstNameHandler = (event) => {
    event.preventDefault();
    setFirstName(event.target.value);

    if (firstName.match(specialChars)) {
      setError("First Name field cannot contain special characters");
    }
  };
  const onLastNameHandler = (event) => {
    event.preventDefault();
    setLastName(event.target.value);

    if (lastName.match(specialChars)) {
      setError("Last Name field cannot contain special characters");
    }
  };
  const onEmailHandler = (event) => {
    setEmail(event.target.value);
   
  };

  const addUserHandler = (event) => {
    setAddUser(!addUser);
  };

  const addAnotherUser = (event) => {
    event.preventDefault();
    let newUser = {
      name: firstName,
      lastName: lastName,
      email: email,
      userStatus: false,
      role: document.getElementById("roles").value,
    };
    users = users.push(newUser);
    setAddUser(!addUser);
  };


  // Filter user by A-Z // 
  function filterSearch() {
    
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

  //hide rest of users// 
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.visibility = "";
        } else {
          tr[i].style.visibility = "collapse";
        }
      }
    }
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="search-container">
          <h1>Project Access</h1>
          <div className="si">
            <input
              type="text"
              id="myInput"
              placeholder="Type to filter the table"
              onKeyUp={filterSearch}
            />
            <i class="fa fa-search"></i>
          </div>
        </div>
        <button className="add" onClick={addUserHandler}>
          +
        </button>
      </div>
      <div className="table-container">
        {addUser && (
          <NewUser
            hide={addUserHandler}
            getFN={onFirstNameHandler}
            getLN={onLastNameHandler}
            getEmail={onEmailHandler}
            addUser={addAnotherUser}
            error={error}
          />
        )}
        <table id="myTable">
          <thead>
            <tr>
              <th className="user">User</th>
              <th className="role">Role</th>
              <th className="status">Status</th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((users) => (
              <TableRow key={users.id} user={users} open={props.open} />
            ))}
          </tbody>
        </table>
      </div>
      </React.Fragment>
  );
};

export default Table;
