import './login.css'
import {useRef} from "react";

const Login = () => {
    const email = useRef();
    const password = useRef();

    const btnClick = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">YouMe</h3>
                    <span className="loginDesc">
                        We are together!
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={btnClick}>
                        <input
                            placeholder="email" type="email" required className="loginInput"
                            ref={email}/>
                        <input
                            placeholder="password" type="password" required className="loginInput"
                            minLength="8"
                            ref={password}/>

                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <hr className="loginHr"/>
                        <div className="btnCenter">
                            <button className="loginRegisterBtn">Create a new account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;