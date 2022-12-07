import React from "react";
import Card from "./Card";
import Button from "./Button";
import css from "./ErrorModal.module.css";

const ErrorModal = (props) => {

  return (
    <div>
      <div className={css.backdrop} onClick={props.closeModal}/>
      <Card className={css.modal}>
        <header className={css.header}>
          <h2>{props.headerError}</h2>
        </header>
        <div className={css.content}>
          <p>{props.textError}</p>
        </div>
        <footer className={css.actions}>
          <Button onClick={props.closeModal}>OK</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
