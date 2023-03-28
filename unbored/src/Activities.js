import {
    Route,
    NavLink,
    HashRouter,
    Routes
} from "react-router-dom";

function Activites() {
    return(
        <ul className="Activities">
            <li><NavLink to="/listOfJokes">🤠</NavLink></li>
            <li><NavLink to="/bored">✅</NavLink></li>
            <li><NavLink to="/post">⏹</NavLink></li>
            <li><NavLink to="chuckNorris">🤠</NavLink></li>
            <li><NavLink to="chuckNorris">🤠</NavLink></li>
            <li><NavLink to="chuckNorris">🤠</NavLink></li>
            <li><NavLink to="chuckNorris">🤠</NavLink></li>

        </ul>
    )
}

export default Activites;
