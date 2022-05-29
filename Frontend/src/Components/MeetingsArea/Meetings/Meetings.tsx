import { SyntheticEvent, useEffect, useState } from "react";
import GroupModel from "../../../Models/GroupModel";
import MeetingModel from "../../../Models/MeetingModel";
import meetingService from "../../../Services/MeetingService";
import "./Meetings.css";

function Meetings(): JSX.Element {

    const [groups, setGroups] = useState<GroupModel[]>([]);
    const [meetings, setMeeting] = useState<MeetingModel[]>([]);

    useEffect(() => {
        meetingService.getAllDevGroups()
            .then(groups => setGroups(groups))
            .catch(err => alert(err.message));
    }, []);


    async function handleChange(args: SyntheticEvent) {
        try {
            const groupId = +(args.target as HTMLSelectElement).value;
            const meetings = await meetingService.getMeetingsByGroup(groupId);
            setMeeting(meetings);
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    


    function dateFormat(dateTime:string):string{
        const d = new Date(dateTime);
        return d.toLocaleString();

    }


    return (
        <div className="Meetings">

            <select defaultValue="" onChange={handleChange}>
                <option disabled value="" >Select Group</option>
                {groups.map(g => <option key={g.groupId} value={g.groupId}>{g.groupName}</option>)}
            </select>

            <br />

            <div className="container">
            {meetings.map(m => <span className="card" key={m.meetingId}>
            <span>Description: {m.meetingDescription}</span>
            <br/>
            <span>Start Time:{dateFormat(m.meetingStartDate)}</span>
            <br/>
            <span>End Time:{dateFormat(m.meetingEndDate)}</span>
            <br/>
            <span>Room Name:{m.meetingRoom}</span>
            </span>)}
            </div>

            
			
        </div>
    );
}

export default Meetings;
