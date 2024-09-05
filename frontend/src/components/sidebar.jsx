import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import Admin from './Navigation/Admin';
import Leader from './Navigation/Leader';
import Employee from './Navigation/Employee';

const SideBar = () => {

  const {user} = useSelector(state => state.authSlice);
  
  return (
    <div className="main-sidebar">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <NavLink to="/home">✨TrackStar</NavLink>
        </div>
        <div className="sidebar-brand sidebar-brand-sm">
          <NavLink to="/home">TrackStar</NavLink>
        </div>
        {
            (user.type==='Admin') ? <Admin/> : (user.type==='Leader') ? <Leader/> : <Employee/>
        }
      </aside>
    </div>
  )
}

export default SideBar;