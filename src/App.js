import { useState, useEffect } from "react";
import "./App.css";
import api from "./api/persons";
import Header from "./components/Header";
import Card from "./components/Card";
import Button from "./components/Button";
import usersData from "./data/data";

function App() {
  const [count, setCount] = useState(0);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get("/persons");
        setPersons(data);
        console.log(data);
      } catch (e) {
        if (e.response) {
          console.log(e.response.data);
          console.log(e.response.status);
          console.log(e.response.headers);
        } else {
          console.log(e.message);
        }
      }
    };
    getData();
  }, []);

  const handlePrev = () => {
    if (count > 0) {
      setCount(() => count - 1);
    }
  };
  const handleNext = () => {
    if (count <= usersData.length - 2) {
      setCount(() => count + 1);
    }
  };

  return (
    <div className="App">
      <Header />
      {persons.length > 1 ? (
        <Card data={persons} count={count} />
      ) : (
        <div>Loading</div>
      )}
      {/* <Card count={count} data={usersData} /> */}
      <div className="buttons">
        <Button onClick={handlePrev} className="prev" text="<prev" />
        <Button className="edit" text="Edit" />
        <Button className="delete" text="Delete" />
        <Button className="new" text="New" />
        <Button onClick={handleNext} className="next" text="next>" />
      </div>
    </div>
  );
}

export default App;
