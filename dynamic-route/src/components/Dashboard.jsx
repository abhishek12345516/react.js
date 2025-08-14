import { Link, Outlet } from "react-router-dom";

function Dashborad() {
    return (
        <div className="conatiner mt-3">
            <h3 className="text-center text-bg-warning">welcome to my Dashborad</h3>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" href="#">Active</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to='Profiles'>Profiles</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to='Settings'>Settings</Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Others</a>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
}

export default Dashborad;