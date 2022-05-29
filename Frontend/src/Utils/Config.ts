class Config {

}

class DevelopmentConfig extends Config {
    public devGroups = "http://localhost:3001/api/groups/";
    public meetingsByGroup = "http://localhost:3001/api/meetings/";
    public addMeeting = "http://localhost:3001/api/meetings/";
    
}

class ProductionConfig extends Config {
    public devGroups = "http://localhost:3001/api/groups/";
    public meetingsByGroup = "http://localhost:3001/api/meetings/";
    public addMeeting = "http://localhost:3001/api/meetings/";

}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
