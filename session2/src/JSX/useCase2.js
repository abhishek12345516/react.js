import logo from '../image/logo.png'
import  '../image/style.css'

function UseCase2() {
    const name = "SKILL ACADEMY";
    return ( 
        <>
        <h1 className='temp'>Welcome to {name}</h1>
        <img src={logo} alt='logo' height='250'width='250'/>
        </>
     );
}

export default UseCase2;