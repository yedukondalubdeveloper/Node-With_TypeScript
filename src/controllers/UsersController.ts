import { Request, Response } from 'express';
import UserModel, { User } from '../models/User';

class UsersController {

    async index(req: Request, res: Response) {
        const users = await UserModel.find({});
        res.render('users/index', { 
            title: 'User Panel',
            users
        });
    }

    renderFormUsers(req: Request, res: Response) {
        res.render('users/add', {
            title: 'Add A Users'
        });
    }

    async saveUsers(req: Request, res: Response) {
        const { fname, lname, email, phone } = req.body;
        const newUser: User = new UserModel({
            fname,
            lname,
            email,
            phone
        });
        await newUser.save();
        res.redirect('/users');
    }
    async editUsers(req: Request, res: Response) {
        const { email } = req.body;
        const users = await UserModel.findOne({email:email});
        res.send(users);
    }
    
    async updateUsers(req: Request, res: Response) {
        const { fname, lname, email, phone } = req.body;
        const newUser: User = new UserModel({
            fname,
            lname,
            email,
            phone
        });
        await UserModel.findOneAndUpdate({ email: email }, req.body);
        res.send({message: 'success'})
        res.redirect('/users');
    }

    async deleteUsers(req: Request, res: Response) {
        const { email } = req.body;
        await UserModel.findOneAndDelete({email:email});
        res.send({message: 'success'})
        res.redirect('/users');
    }

}

export const usersController = new UsersController();
