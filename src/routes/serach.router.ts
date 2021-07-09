import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();
import SearchController from '../Controller/Search/SearchController';
import jwtverify from '../Middlewares/jwtVerify';
import Mail from '../Helper/Mail';

router.get(
    '/',
    jwtverify,
    (req: Request, res: Response, next: NextFunction) => {
        new SearchController(req, res, next).search();
    }
);

router.get(
    '/users',
    jwtverify,
    (req: Request, res: Response, next: NextFunction) => {
        new SearchController(req, res, next).searchAllUsers();
    }
);

router.get(
    '/user/:id/videos',
    jwtverify,
    (req: Request, res: Response, next: NextFunction) => {
        new SearchController(req, res, next).getAllVideosOFusers();
    }
);

router.get('/test', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await Mail.send('jaiprakash.sharma44@gmail.com', 'test', 'test');
        res.send('ok');
    } catch (error) {
        console.error(error.message);
        res.send('error');
    }
});

export default router;
