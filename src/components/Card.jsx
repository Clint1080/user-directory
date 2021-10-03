const Card = ({ data, count, persons }) => {
  return (
    <div className="container">
      <div className="card">
        <h2 className="count">
          {count + 1}/{persons.length}
        </h2>
        <h1 className="name">
          {data[count].name.first}
          {data[count].name.last}
        </h1>
        <div className="location">
          <h2>
            From:&nbsp;
            <span>
              {data[count].city},{data[count].country}
            </span>
          </h2>
        </div>
        <div className="job_title">
          <h2>
            Job Title:
            <span> {data[count].title}</span>
          </h2>
        </div>
        <div className="employer">
          <h2>
            Employer: <span>{data[count].employer}</span>
          </h2>
        </div>
        <div className="favorites">
          <h2>Favorite Movies</h2>
          <ol>
            <li>{data[count].favoriteMovies[0]}</li>
            <li>{data[count].favoriteMovies[1]}</li>
            <li>{data[count].favoriteMovies[2]}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Card;
