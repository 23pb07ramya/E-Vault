// import React, { Component } from 'react';
// import '../CSS/StudentHome.css';
// import RecordList from './RecordList';


// class StudentHome extends Component {
//     render() {
//         return(
//             <div>
//             <nav className="nav-wrapper grey darken-4 navbar">
//             <div className="container">
//             <b><a href="/" className="brand-logo">Records</a></b>
//                <ul className = "right">
//                    <li active><a href = "/student">Home</a></li>
//                    <li><a href = "/newRecord">Request Record</a></li>
//                    <li><a href = "/">Log out</a></li>
//                </ul>
//             </div>

//         </nav>
//         <h4 className="title-styled" style={{marginTop: "40px", marginLeft: "235px", marginBottom:"10px"}}>List of records</h4>
//             <div className = "container homeList center">
//                 <div className="card blue darken-3 headers">
//                     <div className="row ">
//                         <div className="col s3 white-text  ">
//                             <h6>Institute ID</h6>
//                         </div>
//                         <div className="col s3 white-text ">
//                             <h6>Record Name</h6>
//                         </div>

//                         <div className="col s3 white-text ">
//                             <h6>Description</h6>
//                         </div>
//                         <div className="col s3 white-text ">
//                             <h6>Created Timestamp</h6>
//                         </div>
//                     </div>
//                 </div>
//                 <RecordList/>
//             </div>
//             </div>
//         )
//     }
// }

// export default StudentHome;


import React, { Component } from 'react';
import '../CSS/StudentHome.css';
import getWeb3 from "../utils/getWeb3";
import SimpleStorageContract from "../contracts/SimpleStorage.json";

class StudentHome extends Component {
  state = {
    web3: null, accounts: null, contract: null, records: []
  };

  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      this.setState({ web3, accounts, contract: instance }, this.fetchRecords);
    } catch (error) {
      console.error(error);
    }
  };

  fetchRecords = async () => {
    const { contract } = this.state;
    try {
      const recordCount = await contract.methods.recordCount().call();
      const records = [];
      for (let i = 1; i <= recordCount; i++) {
        const record = await contract.methods.records(i).call();
        records.push(record);
      }
      this.setState({ records });
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  render() {
    const { records } = this.state;

    return (
      <div>
        <nav className="nav-wrapper grey darken-4 navbar">
          <div className="container">
            <b><a href="/" className="brand-logo">Records</a></b>
            <ul className="right">
              <li><a href="/student">Home</a></li>
              <li><a href="/newRecord">Request Record</a></li>
              <li><a href="/">Log out</a></li>
            </ul>
          </div>
        </nav>
        <h4 className="title-styled" style={{ marginTop: "40px", marginLeft: "235px", marginBottom: "10px" }}>List of records</h4>
        <div className="container homeList center">
          <div className="card blue darken-3 headers">
            <div className="row ">
              <div className="col s3 white-text">
                <h6>Institute ID</h6>
              </div>
              <div className="col s3 white-text">
                <h6>Record Name</h6>
              </div>
              <div className="col s3 white-text">
                <h6>Description</h6>
              </div>
              <div className="col s3 white-text">
                <h6>Created Timestamp</h6>
              </div>
            </div>
          </div>
          {records.map((record, index) => (
            <div key={index} className="card blue lighten-4 recordCard">
              <div className="row">
                <div className="col s3">{record.address}</div>
                <div className="col s3">{record.record_code}</div>
                <div className="col s3">{record.description}</div>
                <div className="col s3">{record.timestamp}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StudentHome;
