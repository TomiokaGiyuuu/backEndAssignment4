import './register.css'

const Register = () => {
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
                    <div className="loginBox">
                        <input placeholder="username" className="loginInput"/>
                        <input placeholder="email" className="loginInput"/>
                        <input placeholder="password" className="loginInput"/>
                        <input placeholder="repeat your password" className="loginInput"/>
                        <button className="loginButton">Sign Up</button>
                        <span className="loginForgot">Already have an account?</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;