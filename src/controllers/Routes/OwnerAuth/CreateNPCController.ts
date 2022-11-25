import { Response } from "express";
import { Collection, Document, ObjectId } from "mongodb";
import { getCollection } from "../../../db/Mongo";
import RouteController from "../RouteController";
import { CHARACTER_SKELETON } from "../../../enum/CHARACTER_SKELETON";


export default class CreateNPCController extends RouteController {

    public async handleRequest(): Promise<void | Response<any, Record<string, any>>> {
        const { campaignID, characterTemplate } = this.req.body;
        const userID = this.req.user?._id;
    
        try {
            const campaignsCollection = <Collection<Document>> await getCollection('campaigns');
            const usersCollection = <Collection<Document>> await getCollection('users');
            const charactersCollection = <Collection<Document>> await getCollection('characters');
           
            const newNPCObj = Object.assign({}, { _id: new ObjectId(), playerID: userID, ... CHARACTER_SKELETON, ... characterTemplate });

            const insertResult = await charactersCollection.insertOne(newNPCObj);
            const newCharacterID = insertResult.insertedId;

            await usersCollection.updateOne({_id: userID}, {$push: { characters: newCharacterID }});
            await campaignsCollection.updateOne({_id: new ObjectId(campaignID)}, {$push: { npcs: newCharacterID }});
            
            // sends newly created blank npc(~=character) object
            return this.res.status(200).send({characterInfo: Object.assign(newNPCObj, {_id: insertResult.insertedId.toString(), playerID: userID?.toString()})});
        }
        catch (error) {
            return this.res.status(500).send('Creation failed');
        }
    }
}