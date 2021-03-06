import { useState } from "react";
// import api from "../api/persons";

const Form = ({ addNewPerson }) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [title, setTitle] = useState("");
  const [employer, setEmployer] = useState("");
  const [movie1, setMovie1] = useState("");
  const [movie2, setMovie2] = useState("");
  const [movie3, setMovie3] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!first) {
      alert("Please add first name");
      return;
    }
    if (!last) {
      alert("Please add last name");
      return;
    }

    addNewPerson({
      name: { first, last },
      city,
      country,
      title,
      employer,
      favoriteMovies: [movie1, movie2, movie3],
    });

    setFirst("");
    setLast("");
    setCity("");
    setCountry("");
    setTitle("");
    setEmployer("");
    setMovie1("");
    setMovie2("");
    setMovie3("");
  };

  return (
    <div className="container">
      <form action="" className="newPerson" onSubmit={onSubmit}>
        <div className="form-control">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={(e) => setFirst(e.target.value)}
              value={first}
              type="text"
              id="firstName"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={(e) => setLast(e.target.value)}
              value={last}
              type="text"
              id="lastName"
            />
          </div>
        </div>
        <div className="form-control">
          <div>
            <label htmlFor="city">City</label>
            <input
              onChange={(e) => setCity(e.target.value)}
              value={city}
              type="text"
              id="city"
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              type="text"
              id="country"
            />
          </div>
        </div>
        <div className="form-control">
          <div>
            <label htmlFor="title">Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              id="title"
            />
          </div>
          <div>
            <label htmlFor="employer">Employer</label>
            <input
              onChange={(e) => setEmployer(e.target.value)}
              value={employer}
              type="text"
              id="employer"
            />
          </div>
        </div>
        <div className="form-control">
          <div>
            <label htmlFor="movie1">1 Favorite Movie</label>
            <input
              onChange={(e) => setMovie1(e.target.value)}
              value={movie1}
              type="text"
              id="movie1"
            />
          </div>
        </div>
        <div className="form-control">
          <div>
            <label htmlFor="movie2">2 Favorite Movie</label>
            <input
              onChange={(e) => setMovie2(e.target.value)}
              value={movie2}
              type="text"
              id="movie2"
            />
          </div>
        </div>
        <div className="form-control">
          <div>
            <label id="movie3">3 Favorite Movie</label>
            <input
              onChange={(e) => setMovie3(e.target.value)}
              value={movie3}
              type="text"
              id="movie3"
            />
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
