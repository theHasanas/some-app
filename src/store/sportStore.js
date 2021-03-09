import { makeAutoObservable } from "mobx";
import { sports } from "../data";

class SportStore {
  allSports = sports;

  constructor() {
    makeAutoObservable(this);
  }

  createSport = (name, nature, teamSize, popularity) => {
    this.allSports.push({ title: name, nature, teamSize, popularity });
  };
}

const sportStore = new SportStore();
export default sportStore;
