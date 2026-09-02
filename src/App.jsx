import "./App.css";
import Welcome from "./comps/Welcome";
import UserCard from "./comps/UserCard";
import Fruits from "./comps/Fruits";
import TodoList from "./comps/TodoList";
import React from "react";
import FilterList from "./comps/FilteringList";
import DynamicList from "./comps/DynamicList";
import NameForm from "./comps/NameForm";

const styles = {
  backgroundColor: "red",
  color: "white",
};

const App = () => {
  return (
    <>
      <h1 style={styles}>Hi all</h1>
      <Welcome name="Sasa" />
      <UserCard name={"Sasa"} role={"Art"} />
      <UserCard name={"Mika"} role={"Sound"} />
      <Fruits />
      <TodoList />
      <FilterList />
      <DynamicList />
      <NameForm />
    </>
  );
};
export default App;
