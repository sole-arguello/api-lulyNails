import mongoose from 'mongoose'

const usercollection = 'users'

const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        trim: true
    },
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'employee', 'client'],
        default: 'employee'
    },
    last_connection: {
        type: Date,
        default: null
    },
    status: {
        type: String,
        Boolean: true,
        required: true,
        enum: ['complete', 'incomplete', 'pending'],
        default: 'pending'
    },
    documents: {
      type: [
        {
            name:{ type: String, required: true },
            reference: { type: String, required: true },
        },
      ],
      default: [],  
    },
    avatar: {
        type: String,
        default: ''
    }
})

export const userModel = mongoose.model(usercollection, userSchema)