import express from 'express';
import verifyToken from "../middleware/auth";
import KickPlayerController from '../controllers/Routes/OwnerAuth/KickPlayerController';
import CreateInviteCodeController from '../controllers/Routes/OwnerAuth/CreateInviteController';
import RemoveInviteCodeController from '../controllers/Routes/OwnerAuth/RemoveInviteController';
import DeleteCampaignController from '../controllers/Routes/OwnerAuth/DeleteCampaignController';
import CreateNPCController from '../controllers/Routes/OwnerAuth/CreateNPCController';
import verifyOwner from '../middleware/ownerAuth';
import RenameCampaignController from '../controllers/Routes/OwnerAuth/RenameCampaignController';
import FavoriteMonsterController from '../controllers/Routes/OwnerAuth/FavoriteMonsterController';

const router = express.Router();

router.post("/api/kick-player", verifyToken, verifyOwner, async (req, res) => {
    await new KickPlayerController(req, res).handleRequest();
});

router.post("/api/create-invite-code", verifyToken, verifyOwner, async (req, res) => {
    await new CreateInviteCodeController(req, res).handleRequest();
});

router.post("/api/remove-invite-code", verifyToken, verifyOwner, async (req, res) => {
    await new RemoveInviteCodeController(req, res).handleRequest();
});

router.post("/api/delete-campaign", verifyToken, verifyOwner, async (req, res) => {
    await new DeleteCampaignController(req, res).handleRequest();
});

router.post('/api/create-npc', verifyToken, verifyOwner, async (req, res) => {
    await new CreateNPCController(req, res).handleRequest();
});

router.post("/api/rename-campaign", verifyToken, verifyOwner, async (req, res) => {
    await new RenameCampaignController(req, res).handleRequest();
});

router.post("/api/favorite-monster", verifyToken, verifyOwner, async (req, res) => {
    await new FavoriteMonsterController(req, res).handleRequest();
});

export default router;