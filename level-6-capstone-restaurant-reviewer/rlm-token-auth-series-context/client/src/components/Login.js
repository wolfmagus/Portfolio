import React, { useState } from "react";

const Login = props => {

  const initialUserState = {
    name: "",
    id: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    props.login(user)
    props.history.push('/');
  }

  return (
    <div className="submit-form">
      <div>
        <div className="form-group">
          <label htmlFor="user">Username</label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            value={user.name}
            onChange={handleInputChange}
            name="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            className="form-control"
            id="id"
            required
            value={user.id}
            onChange={handleInputChange}
            name="id"
          />
        </div>

        <button onClick={login} className="btn btn-success">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from 'react'

// const initInputs = {
//   title: "",
//   description: "",
//   imgUrl: ""
// }

// export default function TodoForm(props){
//   const [inputs, setInputs] = useState(initInputs)
//   const { addTodo } = props

//   function handleChange(e){
//     const {name, value} = e.target
//     setInputs(prevInputs => ({
//       ...prevInputs,
//       [name]: value
//     }))
//   }

//   function handleSubmit(e){
//     e.preventDefault()
//     addTodo(inputs)
//     setInputs(initInputs)
//   }

//   const { title, description, imgUrl } = inputs
//   return (
//     <form onSubmit={handleSubmit}>
//       <input 
//         type="text" 
//         name="title" 
//         value={title} 
//         onChange={handleChange} 
//         placeholder="Title"/>
//       <input 
//         type="text" 
//         name="description" 
//         value={description} 
//         onChange={handleChange} 
//         placeholder="Description"/>
//       <input 
//         type="text" 
//         name="imgUrl" 
//         value={imgUrl} 
//         onChange={handleChange} 
//         placeholder="Image Url"/>
//       <button>Add Todo</button>
//     </form>
//   )
// }

// import React, { useState, useContext } from 'react'
// import AuthForm from './AuthForm.js'
// import { UserContext } from '../context/UserProvider.js'

// const initInputs = { username: "", password: "" }

// export default function Auth(){
//   const [inputs, setInputs] = useState(initInputs)
//   const [toggle, setToggle] = useState(false)

//   const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)

//   function handleChange(e){
//     const {name, value} = e.target
//     setInputs(prevInputs => ({
//       ...prevInputs,
//       [name]: value
//     }))
//   }

//   function handleSignup(e){
//     e.preventDefault()
//     signup(inputs)
//   }

//   function handleLogin(e){
//     e.preventDefault()
//     login(inputs)
//   }

//   function toggleForm(){
//     setToggle(prev => !prev)
//     resetAuthErr()
//   }

//   return (
//     <div className="auth-container">
//       <h1>Issue App</h1>
//       { !toggle ?
//         <>
//           <AuthForm 
//             handleChange={handleChange}
//             handleSubmit={handleSignup}
//             inputs={inputs}
//             btnText="Sign up"
//             errMsg={errMsg}
//           />
//           <p onClick={toggleForm}>Already a member?</p>
//         </>
//       :
//         <>
//           <AuthForm 
//             handleChange={handleChange}
//             handleSubmit={handleLogin}
//             inputs={inputs}
//             btnText="Login"
//             errMsg={errMsg}
//           />
//           <p onClick={toggleForm}>Not a member?</p>
//         </>
//       }
//     </div>
//   )
// }


// import React, { useState } from "react";

// const Login = props => {

//   const initialUserState = {
//     name: "",
//     id: "",
//   };

//   const [user, setUser] = useState(initialUserState);

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setUser({ ...user, [name]: value });
//   };

//   const login = () => {
//     props.login(user)
//     props.history.push('/');
//   }

//   return (
//     <div className="submit-form">
//       <div>
//         <div className="form-group">
//           <label htmlFor="user">Username</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             required
//             value={user.name}
//             onChange={handleInputChange}
//             name="name"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="id">ID</label>
//           <input
//             type="text"
//             className="form-control"
//             id="id"
//             required
//             value={user.id}
//             onChange={handleInputChange}
//             name="id"
//           />
//         </div>

//         <button onClick={login} className="btn btn-success">
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

//export default Login;

