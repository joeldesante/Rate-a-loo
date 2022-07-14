import { Router } from "./mod.ts";
import { 
    getLocations, 
    getLocation, 
    createLocation, 
    getReviews, 
    createReview, 
    processBlob, 
    getBlob,
    getLocationCoverImage
} from "./controller.ts";

const router = new Router();
router.get('/locations', getLocations);
router.get('/locations/:id', getLocation);
router.get('/locations/:id/coverImage', getLocationCoverImage);
router.post('/locations', createLocation);
router.get('/locations/:id/reviews', getReviews);
router.post('/locations/:id/reviews', createReview);
router.post('/blobs', processBlob);
router.get('/blobs/:id', getBlob);

export default router;