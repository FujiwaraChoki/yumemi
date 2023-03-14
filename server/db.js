import mongoose from "mongoose";

const url = 'mongodb+srv://admin:Sami6344@cluster0.dhbc9v8.mongodb.net/yumemi?retryWrites=true&w=majority';

mongoose.connect(url)
    .then(() => {
        console.log('Connected to the database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
    });


export const getUsers = async () => {
    const userSchema = new mongoose.Schema({
        email: String,
        password: String
    });

    const User = mongoose.model('User', userSchema);

    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        console.error(error);
    }
}

export const addUser = async (email, password) => {
    const userSchema = new mongoose.Schema({
        email: String,
        password: String
    });

    const User = mongoose.model('User', userSchema);

    try {
        const newUser = new User({ email, password });
        await newUser.save();

        if (newUser) {
            console.log('New user added');
            return {
                status: 200,
                message: 'New user added'
            }
        } else {
            console.log('Error adding new user');
            return {
                status: 500,
                message: 'Error adding new user'
            }
        }
    } catch (error) {
        console.error(error);
    }
}