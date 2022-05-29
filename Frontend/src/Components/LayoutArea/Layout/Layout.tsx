import { NavLink } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            


            <NavLink to="/meetings">Meetings</NavLink>
            <span> | </span>
            <NavLink to="/addMeeting">Add Meeting</NavLink>
            <span> | </span>

            <hr />

			<h1>Managing group development meetings</h1>

            <Routing/>

            

        </div>
    );
}

export default Layout;
