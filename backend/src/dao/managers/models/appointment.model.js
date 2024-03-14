import mongoose from "mongoose";

const appointmentCollection = "appointments";

const appointmentSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
  subServices: {
    type: Object,
    required: true,
    
  },
  formClient: {
    type: Object,
    required: true,
  },

  // client: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "clients",
  //     required: true
  // }
});

export const appointmentModel = mongoose.model(
  appointmentCollection,
  appointmentSchema
);
