class GroupModel{
    public groupId: number;
    public groupName: string;

    public constructor(group: GroupModel){
        this.groupId = group.groupId;
        this.groupName = group.groupName;

    }
}

export default GroupModel