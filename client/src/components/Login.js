// import React, { Component } from 'react';
// import '../CSS/login.css'
// import notesCover from '../Images/back.jpg';
// import {useNavigate} from 'react-router';

// class Login extends Component {
//     componentDidMount(){
//         document.title = "Login"
//     };
//     state = {
//         username:'',
//         password:'',
//         loginType:''
//     };
//     validate = (state) =>{
//         var uname = this.state.username;
//         var pass =  this.state.password;
//         var type = this.state.loginType;
//         if(uname==null || uname == '' || pass==null || pass=='')
//             {
//                 alert("Username / Password Missing!!!");
//             }
//         else
//             {
//                 if((uname=="ST1234") && (pass=="1234") && (type=="Student"))
//                 {
//                   // alert("Student Login");
//                     browserHistory.push('/Student');
//                 }
//                 else if( (uname=="IN1234") && (pass=="1234") && (type=="Institute"))
//                 {

//                     // browserHistory.push('/');
//                     browserHistory.push('/Institute');
//                 }
//                 else
//                 {
//                     alert("Wrong Username or Password");
//                     // browserHistory.push('/');
//                 }
//             }
//     };
//     render()
//     {
//         return(
//             <div className = "container signInCard center" >
//             <div className="card setCardWidth">
//             <div className="card-image ">
//               <img src={notesCover} alt="Notes" className = "cardImageHeight"/>
//             </div>
//           <div className="signInContainer card-content">
//               <h4 className="grey-text card-title">Sign In</h4>
//               <form onSubmit={this.submitted} className="signInForm">
//                   <div className="input-field">
//                       <i className="material-icons prefix grey-text text-darken-3">fingerprint</i>
//                       <input type="text" id="email" onChange={(evt) => { this.state.username =  evt.target.value; }}/>
//                       <label htmlFor="loginID">Login ID</label>
//                   </div>
//                   <div className="input-field">
//                       <i className="material-icons prefix grey-text text-darken-3">lock</i>
//                       <input id="password" type="password" onChange={(evt) => { this.state.password =  evt.target.value; }}></input>
//                       <label htmlFor="password">Password</label>
//                   </div>
//                   <div className="input-field row">
//                       <p className="col s4">
//                           <label>
//                               <input name="dept" type = "radio" value = "Student" onChange={(evt) => { this.state.loginType = "Student" }}/>
//                               <span>Student</span>
//                           </label>
//                       </p>
//                       <p className="col s4">
//                           <label>
//                               <input name="dept" type = "radio" value = "Institute" onChange={(evt) => { this.state.loginType = "Institute" }}/>
//                               <span>Institute</span>
//                           </label>
//                       </p>
//                   </div>
//                   <div className="input-field center card-action">
//                       <button className="btn grey darken-3" onClick={this.validate}>Sign In!</button>
//                   </div>
//               </form>
//             </div>
//           </div>
//             </div>
//         )
//     }
// }

// export default Login;


// import React, { Component } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../CSS/login.css';
// import notesCover from '../Images/back.jpg';

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//       loginType: ''
//     };
//     this.navigate = useNavigate();
//   }

//   componentDidMount() {
//     document.title = "Login";
//   }

//   validate = () => {
//     const { username, password, loginType } = this.state;
//     if (!username || !password) {
//       alert("Username / Password Missing!!!");
//     } else {
//       if (username === "ST1234" && password === "1234" && loginType === "Student") {
//         this.navigate('/Student');
//       } else if (username === "IN1234" && password === "1234" && loginType === "Institute") {
//         this.navigate('/Institute');
//       } else {
//         alert("Wrong Username or Password");
//       }
//     }
//   };

//   render() {
//     return (
//       <div className="container signInCard center">
//         <div className="card setCardWidth">
//           <div className="card-image">
//             <img src={notesCover} alt="Notes" className="cardImageHeight" />
//           </div>
//           <div className="signInContainer card-content">
//             <h4 className="grey-text card-title">Sign In</h4>
//             <form onSubmit={(e) => e.preventDefault()} className="signInForm">
//               <div className="input-field">
//                 <i className="material-icons prefix grey-text text-darken-3">fingerprint</i>
//                 <input
//                   type="text"
//                   id="email"
//                   onChange={(evt) => { this.setState({ username: evt.target.value }); }}
//                 />
//                 <label htmlFor="loginID">Login ID</label>
//               </div>
//               <div className="input-field">
//                 <i className="material-icons prefix grey-text text-darken-3">lock</i>
//                 <input
//                   id="password"
//                   type="password"
//                   onChange={(evt) => { this.setState({ password: evt.target.value }); }}
//                 />
//                 <label htmlFor="password">Password</label>
//               </div>
//               <div className="input-field row">
//                 <p className="col s4">
//                   <label>
//                     <input
//                       name="dept"
//                       type="radio"
//                       value="Student"
//                       onChange={() => { this.setState({ loginType: "Student" }); }}
//                     />
//                     <span>Student</span>
//                   </label>
//                 </p>
//                 <p className="col s4">
//                   <label>
//                     <input
//                       name="dept"
//                       type="radio"
//                       value="Institute"
//                       onChange={() => { this.setState({ loginType: "Institute" }); }}
//                     />
//                     <span>Institute</span>
//                   </label>
//                 </p>
//               </div>
//               <div className="input-field center card-action">
//                 <button className="btn grey darken-3" onClick={this.validate}>Sign In!</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/login.css';
import notesCover from '../Images/back.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('');

  useEffect(() => {
    document.title = "Login";
  }, []);

  const validate = () => {
    if (!username || !password) {
      alert("Username / Password Missing!!!");
    } else {
      if (username === "ST1234" && password === "1234" && loginType === "Student") {
        navigate('/Student');
      } else if (username === "IN1234" && password === "1234" && loginType === "Institute") {
        navigate('/Institute');
      } else {
        alert("Wrong Username or Password");
      }
    }
  };

  return (
    <div className="container signInCard center">
      <div className="card setCardWidth">
      
        <div className="signInContainer card-content">
          <h4 className="grey-text card-title">Sign In</h4>
          <form onSubmit={(e) => e.preventDefault()} className="signInForm">
            <div className="input-field">
              <i className="material-icons prefix grey-text text-darken-3">fingerprint</i>
              <input
                type="text"
                id="email"
                onChange={(evt) => setUsername(evt.target.value)}
              />
              <label htmlFor="loginID">Login ID</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix grey-text text-darken-3">lock</i>
              <input
                id="password"
                type="password"
                onChange={(evt) => setPassword(evt.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-field row">
              <p className="col s4">
                <label>
                  <input
                    name="dept"
                    type="radio"
                    value="Student"
                    onChange={() => setLoginType("Student")}
                  />
                  <span>Student</span>
                </label>
              </p>
              <p className="col s4">
                <label>
                  <input
                    name="dept"
                    type="radio"
                    value="Institute"
                    onChange={() => setLoginType("Institute")}
                  />
                  <span>Institute</span>
                </label>
              </p>
            </div>
            <div className="input-field center card-action">
              <button className="btn grey darken-3" onClick={validate}>Sign In!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
