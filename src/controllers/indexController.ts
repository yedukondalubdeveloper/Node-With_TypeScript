import { Request, Response } from 'express';

class IndexController {

    index (req: Request, res: Response) {
        res.render('index', { title: 'Welcome to User Management'});        
    }

}

export const indexController = new IndexController();