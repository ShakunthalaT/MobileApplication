import { Component } from "react";
import HomeItems from "../HomeItems";

class Home extends Component {
  state = {
    getDataList: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const url = "https://swapi.dev/api/people";
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    if (response.ok === true) {
      const updatedData = data.results.map((each) => ({
        birthYear: each.birth_year,
        created: each.created,
        edited: each.edited,
        eyeColor: each.eye_color,
        films: each.films,
        gender: each.gender,
        hairColor: each.hair_color,
        height: each.height,
        homeWorld: each.home_world,
        mass: each.mass,
        skinColor: each.skin_color,
        url: each.url,
      }));

      this.setState({ getDataList: updatedData });
    }
  };

  renderList = () => {
    const { getDataList } = this.state;
    return (
      <div>
        {getDataList.map((each) => (
          <HomeItems key={each.id} itemsDetails={each} />
        ))}
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>hii</h1>
        {this.renderList()}
      </div>
    );
  }
}

export default Home;
