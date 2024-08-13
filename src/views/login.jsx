import { Link } from "react-router-dom";
import { useRef } from "react";
import { useStateContext } from "../contexts/contextProvider";
import axiosClient from "../axiosClient";

export default function login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const { setUser, setToken } = useStateContext();

    const Submit = (e) => {
        e.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        axiosClient.post('/login', payload)
                    .then((data) => { 
                        setUser(data.user);
                        setToken(data.token);
                    })
                    .catch((err) => {
                        const response = err.response;
                        if(response && response.status === 422){
                            console.log(response.data.errors);
                        }
                    });
    }
    return (
        <div className="login-signup-form animated fadeinDown">
            <div className="form">
                <h1 className="title">Login</h1>
                <form onSubmit={Submit}>
                    <input type="email" placeholder="Email" required/>
                    <input type="password" placeholder="Password" required/>
                    <button type="submit" className="btn btn-block">Login</button>
                    <p className="message">Don't Have An Account? <Link to='/register'>Register</Link></p>
                </form>
            </div>
        </div>
    )
}