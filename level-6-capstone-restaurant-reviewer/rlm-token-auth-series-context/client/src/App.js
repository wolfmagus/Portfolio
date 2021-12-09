import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddReview from "./components/add-review";
import Restaurant from "./components/Restaurant";
import RestaurantsList from "./components/RestaurantList";
import Login from "./components/Login";
import Auth from "./components/Auth";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-brand">
          Restaurant Reviews
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/restaurants"} className="nav-link">
              Restaurants
            </Link>
          </li>
          <li className="nav-item" >
            { user ? (
              <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                Logout {user.name}
              </a>
            ) : (            
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
            )}

          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/restaurants"]} component={RestaurantsList} />
          <Route 
            path="/restaurants/:id/review"
            render={(props) => (
              <AddReview {...props} user={user} />
            )}
          />
          <Route 
            path="/restaurants/:id"
            render={(props) => (
              <Restaurant {...props} user={user} />
            )}
          />
          <Route 
            path="/login"
            render={(props) => (
              <Login {...props} login={login} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;


// import React, { useContext } from "react";
// import { Switch, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import AddReview from "./components/add-review";
// import Restaurant from "./components/Restaurant";
// import RestaurantsList from "./components/RestaurantList";
// //import Login from "./components/Login";
// import Auth from "./components/Auth";
// import ProtectedRoute from './components/ProtectedRoute.js'
// import { UserContext } from './context/UserProvider.js'
// import Navbar from './components/Navbar.js'

// function App() {
//   const { token, logout } = useContext(UserContext)
  
//   const [user, setUser] = React.useState(null);

//   async function login(user = null) {
//     setUser(user);
//   }

//   // async function logout() {
//   //   setUser(null)
//   // }

//   return (
//     <div>
//       <nav className="navbar navbar-expand navbar-dark bg-dark">
//         <a href="/restaurants" className="navbar-brand">
//           Restaurant Reviews
//         </a>
//         <div className="navbar-nav mr-auto">
//           <li className="nav-item">
//             <Link to={"/restaurants"} className="nav-link">
//               Restaurants
//             </Link>
//           </li>
//           <li className="nav-item" >
//             { user ? (
//               <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
//                 Logout {user.name}
//               </a>
//             ) : (            
//             <Link to={"/login"} className="nav-link">
//               Login
//             </Link>
//             )}

//           </li>
//         </div>
//       </nav>

//       <div className="container mt-3">
//       { token && <Navbar logout={ logout }/> }
//         <Switch>
//           <Route exact path={["/", "/restaurants"]} component={RestaurantsList} />
//           <Route 
//             path="/restaurants/:id/review"
//             render={(props) => (
//               <AddReview token={token} {...props} user={user} />
//             )}
//           />
//           <Route 
//             path="/restaurants/:id"
//             render={(props) => (
//               <Restaurant  {...props} user={user} />
//             )}
//           />
//           <Route 
//             path="/login"
//             render={(props) => (
//               <Auth {...props}  /> //{...props}login={login}
//             )}
//           />
//         </Switch>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useContext } from 'react'
// import { Switch, Route, Redirect } from 'react-router-dom'
// import Navbar from './components/Navbar.js'
// import Auth from './components/Auth.js'
// import Profile from './components/Profile.js'
// import Public from './components/Public.js'
// import ProtectedRoute from './components/ProtectedRoute.js'
// import { UserContext } from './context/UserProvider.js'
// import Restaurant from '/components/Restaurant.js'
// //import { Switch, Route, Link } from "react-router-dom";

// export default function App(){
//   const { token, logout } = useContext(UserContext)
//   return (
//     <div className="app">
//       { token && <Navbar logout={ logout }/> }
//       <Switch>
//         <Route 
//           exact path="/" 
//           render={()=> token ? <Redirect to="/profile"/> : <Auth />}
//         />
//         <ProtectedRoute 
//           path="/profile"
//           component={Restaurant}
//           redirectTo="/"
//           token={token}
//         />
//         <ProtectedRoute 
//           path="/public"
//           component={Public}
//           redirectTo="/"
//           token={token}
//         />
//       </Switch>
//     </div>
//   )
// }


// import React, { useContext } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";

// import AddReview from "./components/add-review";
// import Restaurant from "./components/Restaurant";
// import RestaurantsList from "./components/RestaurantList";
// //import Login from "./components/Login";


// import Navbar from './components/Navbar.js'





