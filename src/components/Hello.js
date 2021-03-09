import { HelloText } from "./styles";

const Hello = (props) => {
  return (
    <HelloText color="pink">
      {props.greeting} {props.name}, you are {props.age}
    </HelloText>
  );
};

export default Hello;
