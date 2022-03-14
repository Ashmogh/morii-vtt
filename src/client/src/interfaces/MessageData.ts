import type DiceRollResult from "./DiceRollResult";
import type UserSimple from "./UserSimple";

export default interface MessageData {
    senderInfo: UserSimple;
    messageText: string;
    gameID: string;
    isPublic: boolean;
    timestamp?: string;
    rollResult?: DiceRollResult;
}