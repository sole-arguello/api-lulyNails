import mongoose from "mongoose";

const appointmentCollection = "turnos";

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
        type: Object,
        required: true
    }

    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "users",
    //     required: true
    // }
});

export const appointmentModel = mongoose.model(appointmentCollection, appointmentSchema)