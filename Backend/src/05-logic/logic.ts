import { OkPacket } from "mysql";
import GroupModel from "../03-models/group-model";
import dal from "../04-dal/dal";
import MeetingModel from "../03-models/meeting-model";

async function getAllGroups():Promise <GroupModel[]>{

    const sql = "SELECT * FROM development_groups"
    
    const groups = await dal.execute(sql)

    return groups

}

async function getMeetingsByGroup(groupId: number):Promise <MeetingModel[]>{


    const sql = "SELECT * FROM meetings WHERE groupId = ?"
    const meetings = await dal.execute(sql, [groupId])

    return meetings

}

async function addMeeting(meeting: MeetingModel):Promise <MeetingModel>{


    const sql = "INSERT INTO meetings VALUES(DEFAULT, ?, ?, ?, ?,?)";

    const info: OkPacket = await dal.execute(sql, [meeting.groupId, meeting.meetingStartDate, meeting.meetingEndDate, meeting.meetingDescription, meeting.meetingRoom]);
    meeting.meetingId = info.insertId;

    return meeting

}








export default {
    getAllGroups,
    getMeetingsByGroup,
    addMeeting};

