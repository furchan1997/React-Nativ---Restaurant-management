const mongoose = require("mongoose");
const joi = require("joi");

const bizSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  bizName: {
    type: String,
    required: true,
  },

  bizId: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: { type: String, required: true },

  address: {
    country: {
      type: String,
      required: true,
    },
    city: { type: String, required: true },
    street: { type: String, required: true },
    streetNumber: { type: String, required: true },
  },
});
