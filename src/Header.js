import { useSelector } from "react-redux";
import {
    NavLink
} from "react-router-dom";
import logo from "./icons/logo_black.png"
import Badge from '@mui/material/Badge';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function Header() {
    const savedCount = useSelector((state) => state.saved.posts.length + state.savedActivity.posts.length)

    return (
        <div className="Header">

            <div className="Logo">
                <NavLink to="/">
                    <img className="logoImage"src={logo} alt="Unbored"></img>
                </NavLink>
            </div>


            <div className="Saved">
                <NavLink to={"/saved"}>
                    <Badge badgeContent={savedCount} color="primary">
                        <BookmarkIcon/>
                    </Badge>
                </NavLink>
            </div>
        </div>
    )
}

export default Header;