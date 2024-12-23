import { useState } from "react";
import { Message } from "primereact/message";
import { InputText } from "primereact/inputtext";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export function Form() {
  const [isUsername, setUsername] = useState("");
  const [isPassword, setPassword] = useState("");
  const [isUsernameError, setUsernameError] = useState("");
  const [isPasswordError, setPasswordError] = useState("");
  const navigate = useNavigate();

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

    if (isValid) {
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
            {isUsernameError && <Message severity="error" text={isUsernameError} />}
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
            {isPasswordError && <Message severity="error" text={isPasswordError} />}
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