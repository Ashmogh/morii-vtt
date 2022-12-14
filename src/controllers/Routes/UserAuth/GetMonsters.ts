import { Response } from "express";
import { MONSTERS } from "../../../enum/srd/MONSTERS";
import logger from "../../../logger";
import RouteController from "../RouteController";

export default class GetMonsters extends RouteController {
    public async handleRequest(): Promise<void | Response<any, Record<string, any>>> {
        try {
            if (this.req.params.id) {
                return this.res.status(200).send({ 
                    monsters: [MONSTERS.find(monster => monster.id === this.req.params.id)] ?? [],
                });
            }

            return this.res.status(200).send({ 
                monsters: MONSTERS.map(monster => { 
                    return { 
                        id: monster.id, 
                        name: monster.name, 
                        cr: monster.challenge.split(' (')[0], 
                        type: monster.meta.split(' ')[1].replace(',', '') 
                    }
                }), 
            });
        }
        catch (error) {
            logger.error({ error, status: 500 }, `failed getting monsters data`);
            return this.res.status(500).end();
        }
    }
}