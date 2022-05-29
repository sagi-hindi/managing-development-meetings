class MeetingModel{
    public meetingId : number; 
    public groupId : number; 
    public meetingStartDate	: string;
    public meetingEndDate: string;
    public meetingDescription: string;
    public meetingRoom: string;

    public constructor(meeting: MeetingModel ){
        this.meetingId = meeting.meetingId;
        this.groupId = meeting.groupId;
        this.meetingStartDate = meeting.meetingStartDate;
        this.meetingEndDate = meeting.meetingEndDate;
        this.meetingDescription = meeting.meetingDescription
        this.meetingRoom = meeting.meetingRoom;

    }


}

export default MeetingModel