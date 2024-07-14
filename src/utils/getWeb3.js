

// import Web3 from "web3";

// const getWeb3 = () =>
//   new Promise((resolve, reject) => {
//     // Wait for loading completion to avoid race conditions with web3 injection timing.
//     window.addEventListener("load", async () => {
//       // Modern dapp browsers...
//       if (window.ethereum) {
//         const web3 = new Web3(window.ethereum);
//         try {
//           // Request account access if needed
//           await window.ethereum.enable();
//           // Acccounts now exposed
//           resolve(web3);
//         } catch (error) {
//           reject(error);
//         }
//       }
//       // Legacy dapp browsers...
//       else if (window.web3) {
//         // Use Mist/MetaMask's provider.
//         const web3 = window.web3;
//         console.log("Injected web3 detected.");
//         resolve(web3);
//       }
//       // Fallback to localhost; use dev console port by default...
//       else {
//         const provider = new Web3.providers.HttpProvider(
//           "http://127.0.0.1:7545"
//         );
//         const web3 = new Web3(provider);
//         console.log("No web3 instance injected, using Local web3.");
//         resolve(web3);
//       }
//     });
//   });

// export default getWeb3;




// import React, { useState, useEffect } from 'react';
// import getWeb3 from './getWeb3';
// import educationContractABI from './EducationContractABI.json';
// import migrations from './Migrations.json';
// import SimpleStorage from './SimpleStorage.json';

// const educationContractAddress = '*';
// const migrations = '*';

// const simpleStorageContractAddress = '*';

// const Blockchain = () => {
//   const [web3, setWeb3] = useState(null);
//   const [account, setAccount] = useState(null);
//   const [educationContract, setEducationContract] = useState(null);
//   const [migrations, setmigrations] = useState(null);

//   const [simpleStorageContract, setSimpleStorageContract] = useState(null);
//   const [storedValue, setStoredValue] = useState(null);
//   const [inputValue, setInputValue] = useState('');

//   useEffect(() => {
//     const initWeb3 = async () => {
//       try {
//         const web3Instance = await getWeb3();
//         setWeb3(web3Instance);

//         const accounts = await web3Instance.eth.getAccounts();
//         setAccount(accounts[0]);

//         const eduContract = new web3Instance.eth.Contract(educationContractABI, educationContractAddress);
//         const migrationsContract = new web3Instance.eth.Contract(migrationsContractABI, migrationsContractAddress);

//         const simpStorageContract = new web3Instance.eth.Contract(SimpleStorage, simpleStorageContractAddress);
        
//         setEducationContract(eduContract);
//         setMigrationsContract(migrationsContract);
//         setSimpleStorageContract(simpStorageContract);
//       } catch (error) {
//         console.error('Failed to load web3, accounts, or contract. Check console for details.', error);
//       }
//     };

//     initWeb3();
//   }, []);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSetData = async () => {
//     if (simpleStorageContract && account) {
//       await simpleStorageContract.methods.set(inputValue).send({ from: account });
//     }
//   };

//   const handleGetData = async () => {
//     if (simpleStorageContract) {
//       const value = await simpleStorageContract.methods.get().call();
//       setStoredValue(value);
//     }
//   };

//   return (
//     <div>
//       <h1>Hello, Blockchain!</h1>
//       {account ? (
//         <p>Your account: {account}</p>
//       ) : (
//         <p>Loading account...</p>
//       )}
//       <div>
//         <input
//           type="number"
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleSetData}>Set Data</button>
//       </div>
//       <div>
//         <button onClick={handleGetData}>Get Data</button>
//         {storedValue !== null && <p>Stored Value: {storedValue}</p>}
//       </div>
//     </div>
//   );
// };

// export default Blockchain;


// import Web3 from 'web3';

// const getWeb3 = () =>
//   new Promise((resolve, reject) => {
//     const onLoad = async () => {
//       // Modern dapp browsers...
//       if (window.ethereum) {
//         const web3 = new Web3(window.ethereum);
//         try {
//           // Request account access if needed
//           await window.ethereum.request({ method: 'eth_requestAccounts' });
//           // Accounts now exposed
//           resolve(web3);
//         } catch (error) {
//           reject(new Error('User denied account access'));
//         }
//       }
//       // Legacy dapp browsers...
//       else if (window.web3) {
//         // Use Mist/MetaMask's provider.
//         const web3 = window.web3;
//         console.log('Injected web3 detected.');
//         resolve(web3);
//       }
//       // Fallback to localhost; use dev console port by default...
//       else {
//         const provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
//         const web3 = new Web3(provider);
//         console.log('No web3 instance injected, using Local web3.');
//         resolve(web3);
//       }
//     };

//     if (document.readyState === 'complete') {
//       onLoad();
//     } else {
//       window.addEventListener('load', onLoad);
//     }
//   });

// export default getWeb3;



import Web3 from 'web3';

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    const onLoad = async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          // Accounts now exposed
          resolve(web3);
        } catch (error) {
          reject(new Error('User denied account access'));
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log('Injected web3 detected.');
        resolve(web3);
      }
      // Fallback to localhost; use dev console port by default...
      else {
        const provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
        const web3 = new Web3(provider);
        console.log('No web3 instance injected, using Local web3.');
        resolve(web3);
      }
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
    }
  });

export default getWeb3;
