import { useState } from "react";
import './Signin.css';
function Signin() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function login(e) {
        e.preventDefault();

        if (!firstName || !email || !password) {
            alert("Please fill all required fields");
            return;
        }

        alert("Login Successfully 🎉");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    }
    return (
        <form onSubmit={login}>
            <h1>Signin</h1>
            <div className="input">
                <input
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Submit</button>

            </div>

        </form>
    );
}

export default Signin;
// https://docs.google.com/forms/d/e/1FAIpQLScAL638BSFUl7nT6v8Aj_9wTxtJEyX-otJY3G4Y4s7ZTJ1rhw/viewform
