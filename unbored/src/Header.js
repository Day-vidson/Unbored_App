import { useSelector } from "react-redux";
import {
    Route,
    NavLink,
    HashRouter,
    Routes
} from "react-router-dom";
import logo from "./icons/logo_black.png"


function header() {
    const savedCount = useSelector((state) => state.saved.posts.length)

    return (
        <div className="Header">
            <div className="Logo">
                <NavLink to="/">
                    <img className="logoImage"src={logo} alt="Unbored"></img>
                </NavLink>
            </div>
            <div className="Saved">
                <NavLink to="/saved">
                    {/* <img src="">
                        
                    </img> */}
                    ❤{savedCount}
                </NavLink>
            </div>
            <div className="Shared">
                <NavLink to="/shared">
                    ✈
                </NavLink>
            </div>
        </div>
    )
}

export default header;