import React, { useState } from "react";
import Card from "../UI/Card";
import css from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [newId, setNewID] = useState(0);
  const [error, setError] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [phtext, setPhtext] = useState({
    placeholderUser: "Insira um nome",
    placeholderAge: "Insira a idade",
  });

  const IdCounter = () => {
    setNewID((prevID) => {
      let x = 1;
      prevID += x++;
      return prevID;
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (usernameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setError({
        header: "Dados inválidos!",
        text: "Insira um nome e idade válidos (valores não vazios).",
      });
      setAgeInput("");
      return setPhtext({
        placeholderUser: "Insira um nome de usuário válido",
        placeholderAge: "Insira um valor válido, >0",
      });
    }

    if (+ageInput < 1) {
      return (
        setAgeInput(""),
        setError({
          header: "Idade inválida!",
          text: "Insira uma idade válida. (Valor maior que zero)",
        }),
        setPhtext((prevState) => {
          return { ...prevState, placeholderAge: "Insira um valor válido, >0" };
        })
      );
    }
    IdCounter();

    const newUser = {
      name: usernameInput,
      age: ageInput,
      id: newId,
    };

    props.onAddUser(newUser);

    setUsernameInput("");
    setAgeInput("");
    setPhtext({
      placeholderUser: "",
      placeholderAge: "",
    });
  };

  const usernameHandler = (event) => {
    setUsernameInput(event.target.value);
  };

  const ageHandler = (event) => {
    setAgeInput(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          headerError={error.header}
          textError={error.text}
          closeModal={errorHandler}
        />
      )}

      <Card className={css.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Nome de usuário</label>
          <input
            id="username"
            type="text"
            value={usernameInput}
            onChange={usernameHandler}
            placeholder={phtext.placeholderUser}
          ></input>
          <label htmlFor="age">Idade</label>
          <input
            id="age"
            type="number"
            value={ageInput}
            onChange={ageHandler}
            placeholder={phtext.placeholderAge}
          ></input>
          <Button type="submit">Adicionar Usuário</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
