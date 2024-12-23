import { useState } from "react";
import { Message } from "primereact/message";
import { InputText } from "primereact/inputtext";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Alert } from "reactstrap";

export function Form({ onLogin }) {
  const [isUsername, setUsername] = useState("");
  const [isPassword, setPassword] = useState("");
  const [isUsernameError, setUsernameError] = useState("");
  const [isPasswordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  console.log(isUsername);

  const handleValidation = (e) => {
    e.preventDefault();
    let isValid = true;

    if (isUsername.trim() === "") {
      setUsernameError("Username is required");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (isPassword.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }
    if (isPassword.length < 8) {
      setPasswordError("Minimum 8 characters required");
      isValid = false;
    }
    // if (isPassword.length === '') {
    //   setPasswordError("");
    // }

    if (isValid) {
      onLogin(isUsername);
      navigate("/cartera");
    }
  };
  return (
    <main className="body">
      <div
        style={{ background: "rgba(37, 37, 37, 0.765)" }}
        className="container-form"
      >
        <form action="" method="POST" className="form">
          <h1>Login</h1>
          <div className="flex flex-wrap align-items-center mb-3 gap-2">
            <label htmlFor="username" className="p-sr-only">
              Username
            </label>
            <InputText
              id="username"
              placeholder="Username"
              type="username"
              value={isUsername}
              onChange={(e) => setUsername(e.target.value)}
              className={isUsername ? 'p-invalid mr-2' : 'mr-2'}
            />
            {isUsernameError && <Alert color="warning">{isUsernameError}</Alert>}
          </div>
          <div className="flex flex-wrap align-items-center gap-2">
            <label htmlFor="password" className="p-sr-only">
              Password
            </label>
            <InputText
              id="password"
              placeholder="Password"
              type="password"
              value={isPassword}
              onChange={(e) => setPassword(e.target.value)}
              className={isPassword ? 'p-invalid mr-2' : 'mr-2'}
            />
            {isPasswordError && <Alert color="warning">{isPasswordError}</Alert>}
          </div>
          <div className="container-btn">
            <button className="btn-login" onClick={handleValidation}>Enviar</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Form;