// import React, { Component } from "react";

// import {Router, Route, browserHistory, Redirect} from "react-router";

// import Home from './components/Home'
// import StudentHome from './components/StudentHome'
// import NewRecord from './components/NewRecord'
// import ViewRecord from './components/ViewRecord';
// import Educational from './components/EducationalDetails/Educational'
// import EducationHome from './components/EducationHome'
// import RecordDetails from './components/RecordDetails'

// import "./App.css";

// class App extends Component {

//   render() {
//       return (
//         <Router history={browserHistory}>
//             <Redirect from="/" to="/home" />
//             <Route>
//               <Route path="Student" component={StudentHome}/>
//               <Route path="newRecord" component={NewRecord}/>
//               <Route path = "viewrecord/:recordId" component = {ViewRecord}/>
//               <Route path = "home" component = {Home}></Route>
//               <Route path = "Institute" component = {EducationHome}></Route>
//               <Route path = "recordData/Education/:recordId/" component = {Educational}/>
//               <Route path = "educationUpdate/:recordId" component = {RecordDetails}></Route>

//             </Route>
//         </Router>
//     );
//   }
// }
// export default App;



// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// import Home from './components/Home';
// import StudentHome from './components/StudentHome';
// import NewRecord from './components/NewRecord';
// import ViewRecord from './components/ViewRecord';
// import Educational from './components/EducationalDetails/Educational';
// import EducationHome from './components/EducationHome';
// import RecordDetails from './components/RecordDetails';

// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Routes>
//           <Route path="/" element={<Navigate to="/home" />} />
//           <Route path="Student" element={<StudentHome />} />
//           <Route path="newRecord" element={<NewRecord />} />
//           <Route path="viewrecord/:recordId" element={<ViewRecord />} />
//           <Route path="home" element={<Home />} />
//           <Route path="Institute" element={<EducationHome />} />
//           <Route path="recordData/Education/:recordId" element={<Educational />} />
//           <Route path="educationUpdate/:recordId" element={<RecordDetails />} />
//         </Routes>
//       </Router>
//     );
//   }
// }

// export default App;

// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// import Home from './components/Home';
// import StudentHome from './components/StudentHome';
// import NewRecord from './components/NewRecord';
// import ViewRecord from './components/ViewRecord';
// import Educational from './components/EducationalDetails/Educational';
// import EducationHome from './components/EducationHome';
// import RecordDetails from './components/RecordDetails';

// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Routes>
//           <Route path="/" element={<Navigate to="/home" />} />
//           <Route path="Student" element={<StudentHome />} />
//           <Route path="newRecord" element={<NewRecord />} />
//           <Route path="viewrecord/:recordId" element={<ViewRecord />} />
//           <Route path="home" element={<Home />} />
//           <Route path="Institute" element={<EducationHome />} />
//           <Route path="recordData/Education/:recordId" element={<Educational />} />
//           <Route path="educationUpdate/:recordId" element={<RecordDetails />} />
//         </Routes>
//       </Router>
//     );
//   }
// }

// export default App;


// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import getWeb3 from './utils/getWeb3.js';
// import SimpleStorage from './utils/SimpleStorage.json';

// import Home from './components/Home';
// import StudentHome from './components/StudentHome';
// import NewRecord from './components/NewRecord';
// import ViewRecord from './components/ViewRecord';
// import Educational from './components/EducationalDetails/Educational';
// import EducationHome from './components/EducationHome';
// import RecordDetails from './components/RecordDetails';

// import "./App.css";

// class App extends Component {
//   state = {
//     web3: null,
//     accounts: null,
//     contract: null,
//     storageValue: ''
//   };

//   componentDidMount = async () => {
//     try {
//       // Get network provider and web3 instance.
//       const web3 = await getWeb3();

//       // Use web3 to get the user's accounts.
//       const accounts = await web3.eth.getAccounts();

//       // Get the contract instance.
//       const networkId = await web3.eth.net.getId();
//       const deployedNetwork = SimpleStorage.networks[networkId];
//       const instance = new web3.eth.Contract(
//         SimpleStorage.abi,
//         deployedNetwork && deployedNetwork.address,
//       );

//       // Set web3, accounts, and contract to the state.
//       this.setState({ web3, accounts, contract: instance });
//     } catch (error) {
//       // Catch any errors for any of the above operations.
//       console.error("Could not connect to contract or chain.");
//     }
//   };

//   getStorageValue = async () => {
//     const { contract, accounts } = this.state;
//     if (contract) {
//       try {
//         const value = await contract.methods.get().call({ from: accounts[0] });
//         this.setState({ storageValue: value });
//       } catch (error) {
//         console.error('Error getting storage value:', error);
//       }
//     }
//   };

//   render() {
//     return (
//       <Router>
//         <Routes>
//           <Route path="/" element={<Navigate to="/home" />} />
//           <Route path="Student" element={<StudentHome />} />
//           <Route path="newRecord" element={<NewRecord />} />
//           <Route path="viewrecord/:recordId" element={<ViewRecord />} />
//           <Route path="home" element={<Home />} />
//           <Route path="Institute" element={<EducationHome />} />
//           <Route path="recordData/Education/:recordId" element={<Educational />} />
//           <Route path="educationUpdate/:recordId" element={<RecordDetails />} />
//         </Routes>
//       </Router>
//     );
//   }
// }

// export default App;



import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import getWeb3 from './utils/getWeb3';
import SimpleStorageABI from './contracts/SimpleStorage.json';
import EducationContractABI from './contracts/EducationContract.json';
import MigrationsABI from './contracts/Migrations.json';

import Home from './components/Home';
import StudentHome from './components/StudentHome';
import NewRecord from './components/NewRecord';
import ViewRecord from './components/ViewRecord';
import Educational from './components/EducationalDetails/Educational';
import EducationHome from './components/EducationHome';
import RecordDetails from './components/RecordDetails';

import "./App.css";

class App extends Component {
  state = {
    web3: null,
    accounts: null,
    simpleStorageContract: null,
    educationContract: null,
    migrationsContract: null,
    storageValue: ''
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();
      this.setState({ web3 });

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      this.setState({ accounts });

      // Get the network ID
      const networkId = await web3.eth.net.getId();

      // Get SimpleStorage contract instance
      const simpleStorageNetwork = SimpleStorageABI.networks[networkId];
      if (simpleStorageNetwork) {
        const simpleStorageContract = new web3.eth.Contract(
          SimpleStorageABI.abi,
          simpleStorageNetwork.address,
        );
        this.setState({ simpleStorageContract });
      } else {
        console.error('SimpleStorage contract not deployed to detected network.');
      }

      // Get EducationContract instance
      const educationNetwork = EducationContractABI.networks[networkId];
      if (educationNetwork) {
        const educationContract = new web3.eth.Contract(
          EducationContractABI.abi,
          educationNetwork.address,
        );
        this.setState({ educationContract });
      } else {
        console.error('Education contract not deployed to detected network.');
      }

      // Get Migrations contract instance
      const migrationsNetwork = MigrationsABI.networks[networkId];
      if (migrationsNetwork) {
        const migrationsContract = new web3.eth.Contract(
          MigrationsABI.abi,
          migrationsNetwork.address,
        );
        this.setState({ migrationsContract });
      } else {
        console.error('Migrations contract not deployed to detected network.');
      }

    } catch (error) {
      // Catch any errors for any of the above operations.
      console.error("Could not connect to contract or chain.", error);
    }
  };

  getStorageValue = async () => {
    const { simpleStorageContract, accounts } = this.state;
    if (simpleStorageContract) {
      try {
        const value = await simpleStorageContract.methods.get().call({ from: accounts[0] });
        this.setState({ storageValue: value });
      } catch (error) {
        console.error('Error getting storage value:', error);
      }
    }
  };

  render() {
    const { accounts, storageValue } = this.state;
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="Student" element={<StudentHome />} />
          <Route path="newRecord" element={<NewRecord />} />
          <Route path="viewrecord/:recordId" element={<ViewRecord />} />
          <Route path="home" element={<Home />} />
          <Route path="Institute" element={<EducationHome />} />
          <Route path="recordData/Education/:recordId" element={<Educational />} />
          <Route path="educationUpdate/:recordId" element={<RecordDetails />} />
        </Routes>
        {/* <div>
          <h1>Your Account: {accounts && accounts[0]}</h1>
          <button onClick={this.getStorageValue}>Get Storage Value</button>
          <p>Storage Value: {storageValue}</p>
        </div> */}
      </Router>
    );
  }
}

export default App;

