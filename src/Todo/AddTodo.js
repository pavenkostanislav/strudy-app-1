import React, { useState } from "react";
import PropTypes from "prop-types";

function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

  return (
    <form
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: ".5rem 1rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        marginBottom: ".5rem"
      }}
      onSubmit={submitHandler}
    >
      <input
        style={{
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: ".5rem 1rem"
        }}
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button
        style={{
          background: "green",
          borderRadius: "5%",
          color: "#fff",
          border: "none"
        }}
        type='submit'
      >
        Добавить запись
      </button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
};

export default AddTodo;
