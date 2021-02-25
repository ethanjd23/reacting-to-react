import React, { useState, Component } from "react";
import Weather from "./Weather";

// const App = (props) => {

//     const [city, setCity] = useState("Birmingham");
//     const [opinion, setOpinion] = useState("It's great.")

//     return (
//         <>
//             <Weather sun="sunny" degrees="61" />
//             <p>{opinion}</p>
//             <p>You're in {city}.</p>
//             <input type="text" placeholder="your city" onChange={e => setCity(e.target.value)}></input>
//         </>
//     )

// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "Birmingham",
      opinion: "It's great",
      hasLoaded: false,
    };
  }

  hasLoaded() {
    // if (this.state.hasLoaded === false) {
    //   this.setState({ hasLoaded: true });
    // } else {
    //   this.setState({ hasLoaded: false });
    // }
    this.setState({ hasLoaded: !this.state.hasLoaded });
  }

  componentDidMount() {
      this.setState({hasLoaded: true});
  }

  render() {
    if (this.state.hasLoaded === false) {
      return (
        <>
          <h1>Loading...</h1>
          <button type="button" onClick={() => this.hasLoaded()}> 
            Load
          </button> 
        </>
      );
    } else {
      return (
        <>
          <Weather sun="sunny" degrees="61" />
          <p>{this.props.opinion}</p>
          <p>You're in {this.state.city}.</p>
          <input
            value={this.state.city}
            type="text"
            placeholder={this.state.city}
            onChange={(e) => this.setState({ city: e.target.value })}
          ></input>
          <button type="button" onClick={() => this.hasLoaded()}>
            Load
          </button>
        </>
      );
    }
  }
}

export default App;
