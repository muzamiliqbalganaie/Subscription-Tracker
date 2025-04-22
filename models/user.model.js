import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User Name is required'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, 'User Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 5,
        maxLength: 255,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'User Password is required'],
        minLength: 6,
        maxLength: 1024,
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
// export default mongoose.model('User', userSchema);
//{    "name": "John Doe",    "email": "john.doe@example.com",    "password": "newhashedpassword",    "createdAt": "2025-04-21T10:00:00.000Z",    "updatedAt": "2025-04-22T12:00:00.000Z" }