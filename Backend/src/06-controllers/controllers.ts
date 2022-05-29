import express, { NextFunction, Request, Response } from "express";
import MeetingModel from "../03-models/meeting-model";
import logic from "../05-logic/logic";

const router = express.Router();

router.get("/groups", async (request: Request, response: Response, next: NextFunction) => {
    try {
         const groups = await logic.getAllGroups()

         response.json(groups)
         
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/meetings/:groupId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const groupId =  +request.params.groupId
         const meetings = await logic.getMeetingsByGroup(groupId)

         response.json(meetings)
         
    }
    catch (err: any) {
        next(err);
    }
});


router.post("/meetings", async (request: Request, response: Response, next: NextFunction) => {
    try {
        console.log(request.body)
        const meetingToAdd =  new MeetingModel(request.body)
        const meeting = await logic.addMeeting(meetingToAdd)

         response.status(201).json(meeting)
         
    }
    catch (err: any) {
        next(err);
    }
});



export default router;