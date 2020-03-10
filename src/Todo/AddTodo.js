import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(""),
    value: () => value
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue("");

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
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
        {...input.bind}
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
