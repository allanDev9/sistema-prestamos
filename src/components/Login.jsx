import { useState , useRef, useEffect} from "react";
import { InputText } from "primereact/inputtext";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Messages } from 'primereact/messages';
import users from './data/user.json';
        

export function Form({ onLogin, data }) {
  const [isUsername, setUsername] = useState("");
  const [isPassword, setPassword] = useState("");
  const [isUsernameError, setUsernameError] = useState("");
  const [isPasswordError, setPasswordError] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();
  console.log(isUsername);
  const usernameErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);

  useEffect(() => {
    if (isUsername.trim() !== "" && isPassword.trim() !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [isUsername, isPassword]);

  const handleValidation = (e) => {
    e.preventDefault();
    let isValid = true;

    const user = users.find(user => user.username === isUsername);

    if (!user) {
      setUsernameError("Username not found");
      usernameErrorRef.current.show({ severity: 'error', detail: 'Username not fund' });
      setButtonDisabled(false);
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (user && user.password !== isPassword) {
      setPasswordError("Incorrect password");
      passwordErrorRef.current.show({ severity: 'error', detail: 'Incorrect password' });
      isValid = false;
    } else {
      setPasswordError("");
    }

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
            <Messages ref={usernameErrorRef} />
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
            <Messages ref={passwordErrorRef}/>
          </div>
          <div className="container-btn">
            <button className="btn-login rounded-3 hover-te" onClick={handleValidation} disabled={isButtonDisabled}>Enviar</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Form;