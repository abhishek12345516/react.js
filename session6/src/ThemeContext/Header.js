import { useLoginContext } from "../ContextDemo/LoginContext";

function Header() {
    const {loggedIn,login}=useLoginContext();
    return ( 
        <div>
            <h3>Header Component</h3>
            <p>
                {loggedIn? 'Dashboard': 'Login'}
            </p>
        </div>
     );
}

export default Header;