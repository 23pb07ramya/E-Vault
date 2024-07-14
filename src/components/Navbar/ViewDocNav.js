// import React from 'react';
// import {Link, useNavigate} from 'react-router-dom'

// const ViewDocNav = (props) =>
// {
//     var {recordId} = props;
//     var url = "/recordData/Education/"+recordId;
//     return (

//         <nav className="nav-wrapper grey darken-4 navbar">
//             <div className="container">
//                 <b><a href="/" className="brand-logo">Records</a></b>
//                 <ul className = "right">
//                 <li><a href="">Record Details</a></li>
//                 <li> <a href={url}> Education Reports</a></li>
//                 <li><a href=""> Other Reports</a></li>
//                 <li> <a href="">Record Photographs</a></li>
//                 </ul>
//                 </div>
//         </nav>

//     )

// }


// export default ViewDocNav;


import React from 'react';
import { Link } from 'react-router-dom';

const ViewDocNav = () => (
  <nav>
    <ul>
      <li><Link to="/home">Home</Link></li>
      {/* Add other links here */}
    </ul>
  </nav>
);

export default ViewDocNav;
