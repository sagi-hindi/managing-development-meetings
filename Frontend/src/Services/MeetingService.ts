import axios from "axios";
import GroupModel from "../Models/GroupModel";
import MeetingModel from "../Models/MeetingModel";
import config from "../Utils/Config";

class MeetingService{

    
    public async getAllDevGroups():Promise <GroupModel[]>{ 

        const response = await axios.get<GroupModel[]>(config.devGroups)
        return response.data

    }




    public async getMeetingsByGroup(groupId: number):Promise <MeetingModel[]>{

        const response = await axios.get<MeetingModel[]>(config.meetingsByGroup + groupId)
        return response.data

    }



    public async addMeeting(meeting: MeetingModel):Promise <MeetingModel>{
        const response = await axios.post<MeetingModel>(config.addMeeting, meeting)
        return response.data
    }

    

}

const meetingService = new MeetingService()

export default meetingService