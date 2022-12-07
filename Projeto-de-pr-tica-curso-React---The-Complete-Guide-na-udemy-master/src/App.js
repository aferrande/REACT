import React, { useState, useTransition } from "react";
import AddUsers from "./components/users/AddUsers";
import UsersList from "./components/users/UsersList";



const App = () => {
  const [users, setUsers] = useState([]);

  const newUser = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  return (
    <div>
      <AddUsers onAddUser={newUser} />
      <UsersList data={users}/>
    </div>
  );
};

export default App;
