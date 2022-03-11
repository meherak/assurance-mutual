import mongoose from "mongoose";

const { Schema, model } = mongoose;

let demandSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  // last_name: {
  //   type: String,
  //   required: true,
  // },

  // gender: {
  //   type: String,
  //   required: true,
  // },

  // date_of_birth: {
  //   type: Date,
  //   required: true,
  // },

  // postal_code: {
  //   type: String,
  //   required: true,
  // },
  // city: {
  //   type: String,
  //   required: true,
  // },

  // email: {
  //   type: String,
  //   required: true,
  // },

  // phone: {
  //   type: String,
  //   required: true,
  // },

  // profession: {
  //   type: String,
  //   required: true,
  // },

  // contrat_date: {
  //   type: Date,
  //   required: true,
  // },

  // social_regime: {
  //   type: String,
  //   required: true,
  // },
});
demandSchema = model("demand", demandSchema);
export default demandSchema;
