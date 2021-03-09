import { useState } from "react";
import sportStore from "../store/sportStore";

const CreateSport = () => {
  const [name, setName] = useState("");
  const [nature, setNature] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [popularity, setPopularity] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNatureChange = (event) => {
    setNature(event.target.value);
  };
  const handleTeamSizeChange = (event) => {
    setTeamSize(event.target.value);
  };
  const handlePopularityChange = (event) => {
    setPopularity(event.target.value);
  };

  const createSport = () => {
    sportStore.createSport(name, nature, teamSize, popularity);
  };

  return (
    <div>
      <input onChange={handleNameChange} placeholder="sport name" />
      <input onChange={handleNatureChange} placeholder="sport nature" />
      <input onChange={handleTeamSizeChange} placeholder="team size" />
      <input onChange={handlePopularityChange} placeholder="popularity" />
      <button onClick={createSport}>Create Store</button>
    </div>
  );
};

export default CreateSport;
