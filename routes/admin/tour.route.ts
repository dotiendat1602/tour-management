import express, { Router } from "express";
const router: Router = express.Router();

import * as controller from "../../controllers/admin/tour.controller";

router.get("/", controller.index);

export const tourRoutes: Router = router;