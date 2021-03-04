import "./App.css";
import Hello from "./components/Hello";
import SportItem from "./components/SportItem";

const sports = [
  {
    title: "football",
    nature: "multiplayer",
    teamSize: 11,
    popularity: 1,
  },
  {
    title: "basketball",
    nature: "multiplayer",
    teamSize: 5,
    popularity: 2,
  },
  {
    title: "running",
    nature: "solo",
    popularity: 3,
  },
];

const user = "Hasan";

function App() {
  return (
    <div className="App">
      <h1>Salam Hasan, you are 3</h1>
      <h1>Hello John, you are 7</h1>
      <h1>Hallo Jop, you are 8</h1>

      <Hello name={user} age={3} greeting="Salam" />
      <Hello name="John" age={7} greeting="Hello" />
      <Hello name="Jop" age={8} greeting="Hallo" />

      <div>
        {sports.map((sport) => (
          <SportItem sport={sport} />
        ))}
      </div>
    </div>
  );
}

export default App;
