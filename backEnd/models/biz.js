const mongoose = require("mongoose");
const joi = require("joi");

const bizSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    bizName: {
      type: String,
      required: true,
    },

    bizId: {
      type: Number,
      required: true,
      unique: true,
    },

    bizPhone: {
      type: String,
      required: true,
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
    owner: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: false,
    },
  },
  { timestamps: true }
);

const Biz = mongoose.model("Biz", bizSchema, "bizes");

function bizValidation(biz) {
  const schema = joi.object({
    fullName: joi.string().min(2).max(124).required(),
    bizName: joi.string().min(2).max(20).required(),
    bizId: joi
      .string()
      .pattern(/^\d+$/) // רק ספרות
      .min(8) // לפחות 8 ספרות
      .max(20) // עד 20 ספרות
      .required(),
    bizPhone: joi.string().min(8).max(11).required(),
    email: joi.string().email().min(8).required(),
    password: joi.string().min(6).max(20).required(),
    address: joi
      .object({
        country: joi.string().required(),
        city: joi.string().required(),
        street: joi.string().required(),
        streetNumber: joi.string().required(),
      })
      .required(),
  });

  return schema.validate(biz);
}

function bizLoginValidaition(userBiz) {
  const schema = joi.object({
    bizId: joi
      .string()
      .pattern(/^\d+$/) // רק ספרות
      .min(8) // לפחות 8 ספרות
      .max(20) // עד 20 ספרות
      .required(),

    password: joi.string().min(6).max(20).required(),
  });

  return schema.validate(userBiz);
}

module.exports = {
  Biz,
  bizValidation,
  bizLoginValidaition,
};
