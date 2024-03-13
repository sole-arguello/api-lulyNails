import mongoose from "mongoose";

const appointmentCollection = "appointments";

const appointmentSchema = new mongoose.Schema({

    date:{
        type: Date,
        required: true
    },
    hour:{
        type: String,
        required: true
    },
    formData:{
        type: {
            name: String,
            email: {type: String, unique: true},
            phone: {type: String, unique: true},
        },
        required: true,
        
    }

    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "users",
    //     required: true
    // }
});


export const appointmentModel = mongoose.model(appointmentCollection, appointmentSchema)