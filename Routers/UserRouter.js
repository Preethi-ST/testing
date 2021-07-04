import express from 'express';
import { User } from '../modals/users.js';


const userRouter = express.Router();

userRouter.get('/',async (req,res) => {
    const users = await User.find();
    res.send(users);
})

userRouter.get('/:id',async (req,res) => {
    const user = await User.find({id: req.params.id})
    /* or const user = await User.findById(req.params.id)
       or const user = await User.findOne(req.params.id) 
    */
    res.send(user);
})

/* with below code we can't check for validation */
/* app.post('/users',async(req,res) => {
    const user = req.body;
    console.log(user);
    await User.insertMany(user)   --- Done using Mongo DB
    res.send(await User.find())
}) */

userRouter.post('/',async(req,res) => {
    const addUser = req.body;
    const addUsermongoose = new User(addUser);
    try{
        const newUser = await addUsermongoose.save();
        res.send(newUser);
    }catch (err) {
        res.status(500);
        res.send(err);
    }
})

userRouter.delete('/:id',async (req,res) => {
    const {id} = req.params;
    try{
        
        const user = await User.findById(id);
        console.log(user);
        if(user !== null){
            await user.remove();
            res.send({...user,message : "Deleted"})
        }else{
            res.status(500)
            res.send("User with the given ID doesn't exist")
        }
        
    }catch(err){
        console.log(err)
        res.status(500)
    }
    
})

// since for get and post route ('/') - is common - we can combine both

/* userRouter.route('/')
.get(async (req,res) => {
    const users = await User.find();
    // console.log(users);
    res.send(users);
})
.post(async(req,res) => {
    const addUser = req.body;
    const addUsermongoose = new User(addUser);
    try{
        const newUser = await addUsermongoose.save();
        res.send(newUser);
    }catch (err) {
        res.status(500);
        res.send(err);
    }
}) */

// since for get by ID and delete by id have same route - ('/:id') - we can combine

/* userRouter.route('/:id')
.get(async (req,res) => {
    const user = await User.find({id: req.params.id});
    res.send(user);
})
.delete(async (req,res) => {
    const {id} = req.params;
    try{
        
        const user = await User.findById(id);
        console.log(user);
        if(user !== null){
            await user.remove();
            res.send({...user,message : "Deleted"})
        }else{
            res.send("User with the given ID doesn't exist")
        }
        
    }catch(err){
        console.log(err)
        res.status(500)
    }
    
})
 */
export {userRouter}