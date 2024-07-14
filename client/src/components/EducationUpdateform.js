import React, { Component } from 'react';
import getWeb3 from "../utils/getWeb3";
import SimpleStorageContract from "../contracts/SimpleStorage.json";

class EducationUpdateForm extends Component {
  state = {
    web3: null,
    accounts: null,
    contract: null,
    record_id: '',
    address: '',
    timestamp: '',
    record_code: '',
    description: ''
  };

  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      if (!deployedNetwork) {
        throw new Error(`Contract not deployed on network with ID ${networkId}`);
      }
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      this.setState({ web3, accounts, contract: instance });
      this.onGetDate();
    } catch (error) {
      alert(`Failed to load web3, accounts, or contract. Check console for details.`);
      console.error(error);
    }
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const { accounts, contract, record_id, address, timestamp, record_code, description } = this.state;
    try {
      await contract.methods.addrecordReport(record_id, address, timestamp, record_code, description).send({ from: accounts[0] });
      alert("Record added successfully!");
    } catch (error) {
      console.error("Error adding record:", error);
      alert("Failed to add record. Check console for details.");
    }
  };

  onGetDate = () => {
    const date = new Date();
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 101).toString().substring(1);
    const day = (date.getDate() + 100).toString().substring(1);
    const hour = (date.getHours() + 100).toString().substring(1);
    const mins = (date.getMinutes() + 100).toString().substring(1);
    const sec = (date.getSeconds() + 100).toString().substring(1);
    this.setState({
      timestamp: `${year}-${month}-${day} ${hour}:${mins}:${sec}`
    });
  };

  render() {
    return (
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col s6">
              <div className="card reportCard">
                <div className="card-title cardTitle2">
                  <h4 className="cardTitle">New Record</h4>
                </div>
                <div className="card-content">
                  <form onSubmit={this.onSubmit}>
                    <div className="input-field">
                      <input type="text" id="recodId" onChange={(evt) => this.setState({ record_id: evt.target.value })} required />
                      <label htmlFor="recodId">Student ID</label>
                    </div>
                    <div className="input-field">
                      <input type="text" id="address" onChange={(evt) => this.setState({ address: evt.target.value })} required />
                      <label htmlFor="address">Institute Address</label>
                    </div>
                    <div className="input-field">
                      <input value={this.state.timestamp} type="text" id="timestamp" readOnly required />
                    </div>
                    <div className="input-field">
                      <input type="text" id="offCode" onChange={(evt) => this.setState({ record_code: evt.target.value })} required />
                      <label htmlFor="offCode">Record Name</label>
                    </div>
                    <div className="form-submit center">
                      <button type="submit" className="dropbtn1" style={{ marginTop: "10px" }}>Upload to Blockchain</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col s6">
              <div className="card reportCard">
                <div className="card-title cardTitle">
                  <h4 className="cardTitle">Enter Description</h4>
                </div>
                <div className="card-content">
                  <div className="input-field">
                    <textarea id="report" className="textAreaHeight" onChange={(evt) => this.setState({ description: evt.target.value })} required></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EducationUpdateForm;
