import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Form() {
    const navigate = useNavigate();

    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");

    const handleUname = (e) => {
        setUname(e.target.value)
    }

    const handlePass = (e) => {
        setPass(e.target.value)
    }

    const check = () => {
        const loginDetails = axios.get(`http://localhost:7000?username=${uname}&password=${pass}`)
       
        loginDetails.then((data) => {
            if (data.data === true) {
                navigate("/success")
            } else {
                navigate("/fail")
            }
        })
    }

    return (
        <div>
            <h1>Login Form</h1>
            <section>
                <input value={uname} onChange={handleUname} type="text" name="username" placeholder="User Name" /><br />
                <input value={pass} onChange={handlePass} type="text" name="password" placeholder="Password" /><br />
                <button onClick={check}>Login</button>
            </section>

            <p>User Name: zaheer</p>
            <p>Password: 777</p>
        </div>
    );
}

export default Form;