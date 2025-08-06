import { useLoginContext } from "./LoginContext";

function Login() {
    const {loggedIn,login} = useLoginContext();
    return ( 
        <div>
            <button onClick={login}>
                {loggedIn ? "Logout" : "Login"}
            </button>
        </div>
     );
}

export default Login;