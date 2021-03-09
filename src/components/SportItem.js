// Components are functions that return HTML and start with capital letter

const SportItem = (props) => {
  return (
    <div onClick={() => alert("hello")}>
      <h2>{props.sport.title}</h2>
      <p>
        {props.sport.title} is a {props.sport.nature} sports
        {props.sport.nature === "multiplayer"
          ? `, with teams consisting of ${props.sport.teamSize} players`
          : ""}
        , and it is ranked {props.sport.popularity} in popularity.
      </p>
    </div>
  );
};

export default SportItem;
