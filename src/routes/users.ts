import { Router } from 'express';
import { usersController } from '../controllers/UsersController';

class UsersRoutes {

    router: Router = Router();    

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', usersController.index);
        this.router.get('/add', usersController.renderFormUsers);
        this.router.post('/add', usersController.saveUsers);
        this.router.post('/edit', usersController.editUsers);
        this.router.put('/update', usersController.updateUsers);
        this.router.delete('/delete', usersController.deleteUsers);
    }

}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;