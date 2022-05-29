import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import GroupModel from "../../../Models/GroupModel";
import MeetingModel from "../../../Models/MeetingModel";
import meetingService from "../../../Services/MeetingService";
import "./AddMeeting.css";

function AddMeeting(): JSX.Element {

    const [groups, setGroups] = useState<GroupModel[]>([]);
    const {register,handleSubmit,formState} = useForm<MeetingModel>({})

    const navigate = useNavigate();

    useEffect(()=>{

        meetingService.getAllDevGroups()
            .then(groups => setGroups(groups))
            .catch(err => alert(err.message))

    },[]);

    async function submit(meeting:MeetingModel):Promise<void>{
        try{
            console.log(meeting)
            const addedMeeting = await meetingService.addMeeting(meeting)
            alert("Movie Added! ID: " + addedMeeting.meetingId)
            navigate("/meetings")


        }
       catch(err:any){
        alert(err.message)
    }

    }

    return (
        <div className="AddMeeting">

            <form onSubmit={handleSubmit(submit)}>
                <label>Choose:</label>
                <select defaultValue="" {...register("groupId", { required: {value: true, message: "Missing Group"}})}>
                    <option disabled value="" >Select Group</option>
                    {groups.map(g => <option key={g.groupId} value={g.groupId}>{g.groupName}</option>)}
                </select>
                <span>{formState.errors?.groupId?.message}</span>

                <label>Description:</label>
                <input type="text" {...register("meetingDescription", { required: {value: true, message: "Missing Description"}})}/>
                <span>{formState.errors?.meetingDescription?.message}</span>

                <label>Start Time:</label>
                <input type="datetime-local" {...register("meetingStartDate", { required: {value: true, message: "Missing Start Time"}})}/>
                <span>{formState.errors?.meetingStartDate?.message}</span>

                <label>End Time:</label>
                <input type="datetime-local" {...register("meetingEndDate", { required: {value: true, message: "Missing End Time"}})}/>
                <span>{formState.errors?.meetingEndDate?.message}</span>

                <label>Meeting Room:</label>
                <input type="text" {...register("meetingRoom", { required: {value: true, message: "Missing Meeting Room"}})}/>
                <span>{formState.errors?.meetingEndDate?.message}</span>

                <button type="submit">Add</button> 

            </form>

			
        </div>
    );
}

export default AddMeeting; 
