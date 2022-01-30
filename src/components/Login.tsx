import { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="login">
            <form>
                <h1>Login</h1>
                <div className="login-username">
                <label>Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
                </div>
                <div className="login-password">
                <label>Password</label>
                <input value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter your password" />
                </div>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;