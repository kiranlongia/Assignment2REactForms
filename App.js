import React, { useRef, useState } from "react";
	

function App() {
  const userName = useRef("");
  const password = useRef("");
  const email = useRef("");
   const isRemembered = useRef(false);
   const [userNameState, setUserNameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [isRememberedState, setIsRememberedState] = useState(false);
  const [isFormDataShown, setisFormDataShown] = useState(false);


  const clickHandler = (e) => {
    e.preventDefault();
    setUserNameState(userName.current.value);
    setPasswordState(password.current.value);
    setEmailState(email.current.value);
     setIsRememberedState(isRemembered.current.checked);
    setisFormDataShown(true);
  };
  return (
    <>
      <div className="container">
        <form className="form">
          <div className="form-control">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" ref={userName}></input>
          </div>
          <div className="form-control">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" ref={password}></input>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" ref={email}></input>
          </div>
          <div className="form-control">
            <label htmlFor="remember">Remember me</label>
            <input type="checkbox" id="remember" ref={isRemembered}></input>
          </div>
          <button type="button" onClick={clickHandler}>
            SUBMIT
          </button>
        </form>
      </div>
 {isFormDataShown && (
        <div className="container" color="#fdfdfd">
          <h4> <u>Submitted Successfully</u></h4>
          <h4>!!!!!!!!!WELCOME!!!!!!!</h4>
          <p> Username: {userNameState}</p>
          <p> Password: {passwordState}</p>
          <p> Email: {emailState}</p>
         {!isRememberedState && "not"}
        </div>
      )}
    </>
  );
}


export default App;

