import React, { useState, Component } from 'react';
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
    render() {
    const [city, setCity] = useState("Birmingham");
    const [opinion, setOpinion] = useState("It's great.")
    return(    
        <>
             <Weather sun="sunny" degrees="61" />
             <p>{opinion}</p>
             <p>You're in {city}.</p>
             <input type="text" placeholder="your city" onChange={e => setCity(e.target.value)}></input>
         </>
    )
    }

}

export default App;