import { Navigate, Route, Routes } from "react-router-dom";
import AddMeeting from "../../MeetingsArea/AddMeeting/AddMeeting";
import Meetings from "../../MeetingsArea/Meetings/Meetings";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">

            <Routes>
                <Route path="/meetings" element={<Meetings/>} />
                <Route path="/addMeeting" element={<AddMeeting/>} />
                <Route path="/" element={<Navigate to="/meetings"/>} />
            </Routes>
           
        </div>
    );
}

export default Routing;
