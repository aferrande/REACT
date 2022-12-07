import React from "react";

import Card from "../UI/Card";
import css from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={css.users}>
      <ul>
        {props.data.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} {user.age == 1 ? "ano" : "anos"})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
