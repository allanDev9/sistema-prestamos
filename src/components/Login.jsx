import { useState, useRef, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Messages } from 'primereact/messages';

export function Form({ onLogin }) {
  const [isUsername, setUsername] = useState("");
  const [isPassword, setPassword] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();
  const usernameErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);

  useEffect(() => {
    if (isUsername.trim() !== "" && isPassword.trim() !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [isUsername, isPassword]);

  const handleValidation = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:3003/api/usuarios/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: isUsername, password: isPassword })
        });

        const data = await response.json();

        if (response.ok) {
            onLogin(isUsername);
            navigate("/cartera");
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al iniciar sesión');
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
              // className={isUsernameError ? 'p-invalid mr-2' : 'mr-2'}
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
              // className={isPasswordError ? 'p-invalid mr-2' : 'mr-2'}
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