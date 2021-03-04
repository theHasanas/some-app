const Hello = (props) => {
  return (
    <h1>
      {props.greeting} {props.name}, you are {props.age}
    </h1>
  );
};

export default Hello;
