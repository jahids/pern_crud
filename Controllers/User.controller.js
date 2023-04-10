const Admin = require("../models/admin.model");
const User = require("../models/user.model");



const adminpost = async (req, res) => {
    console.log(req.body);
    try {
        const { email, password, name, age } = req.body;
        const user = await Admin.create({ email, password, name, age });
        // const h = await Admin.reload();
        // res.json(h);
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong admin' });
    }
}


const getdata = (req, res) => {
    res.send('Welcome to my router!');
}

const postData = async (req, res) => {
    console.log(req.body);
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        await user.reload();
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}

const findBYid = async (req, res) => {
    // const { id } = req.params.id;
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        })

        res.json({ data: user })
    } catch (error) {
        res.send(error)
    }
}


const Allyousersget = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}

 const update = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const { id } = req.params;
        const user = await User.findByPk(id);
        user.name = name;
        user.email = email;
        user.password = password;
        await user.save();
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}


const deleteData = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        await user.destroy();
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}


module.exports = {
    getdata,
    postData,
    Allyousersget,
    update,
    deleteData,
    adminpost,
    findBYid
}