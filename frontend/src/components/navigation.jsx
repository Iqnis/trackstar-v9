import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { dLogout } from "../http";
import { setAuth } from "../store/auth-slice";


const Navigation = () =>
{
    const {name,image} = useSelector((state)=>state.authSlice.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = async () =>
    {
        await dLogout();
        dispatch(setAuth(null))
        return history.push('/login');
    }

    return(
        <>

        <div className="navbar-bg"></div>
            <nav className="navbar navbar-expand-lg main-navbar">
                <form className="form-inline mr-auto">
                <ul className="navbar-nav mr-3">
                    <li><NavLink to='/' id='sidebarCollapse' data-toggle="sidebar" className="nav-link nav-link-lg"><i className="fas fa-bars"></i></NavLink></li>
                    <li><NavLink to='/' data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i className="fas fa-search"></i></NavLink></li>
                </ul>
                </form>
                <ul className="navbar-nav navbar-right">
                <li className="dropdown dropdown-list-toggle"><a href='#' data-toggle="dropdown" className="nav-link notification-toggle nav-link-lg beep"><i className="far fa-bell"></i></a>
                </li>
                <li className="dropdown"><a href='#' data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                    <div className="d-sm-none d-lg-inline-block">Hi, {name}</div></a>
                    <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-title">Logged in 5 min ago</div>
                    <div className="dropdown-divider"></div>
                    <NavLink to='/' onClick={logout} className="dropdown-item has-icon text-danger">
                        <i className="fas fa-sign-out-alt"></i> Logout
                    </NavLink>
                    </div>
                </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;