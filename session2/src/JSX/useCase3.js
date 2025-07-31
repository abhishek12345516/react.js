function UseCase3() {
    const loggedIn = false;
    return ( 
        <>
         {loggedIn? <button>Logout</button> : <button>Login</button>}
            {loggedIn? <h1>Welcome, User!</h1> : <h1>Please login to access the content.</h1>}
        </>
     );
}

export default UseCase3;