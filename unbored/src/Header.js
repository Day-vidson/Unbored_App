import { useSelector } from "react-redux";
import {
    Route,
    NavLink,
    HashRouter,
    Routes
} from "react-router-dom";
import logo from "./icons/logo_black.png"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlightIcon from '@mui/icons-material/Flight';

function Header() {
    const savedCount = useSelector((state) => state.saved.posts.length)

    return (
        <div className="Header">

            <div className="Logo">
                <NavLink to="/">
                    <img className="logoImage"src={logo} alt="Unbored"></img>
                </NavLink>
            </div>


            <div className="Saved">
                <NavLink to={"/saved"}>
                    <FavoriteIcon/>
                    {savedCount}
                </NavLink>
            </div>
            
            <div className="Shared">
                <NavLink to="/shared">
                    <FlightIcon/>
                </NavLink>
            </div>
        </div>
    )
}

export default Header;