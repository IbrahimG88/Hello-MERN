import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // refers to the User model
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    daysTillDepletion: {
      type: Number,
      required: true,
      default: 0,
    },
    unit: {
      type: String,
      required: true,
    },
    testsPerUnit: {
      type: Number,
      required: true,
      default: 0,
    },

    consumptionPerDay: {
      type: Number,
      required: true,
      default: 0,
    },
    recentOrderAmount: {
      type: Number,
      required: true,
      default: 0,
    },
    amountInStockTotal: {
      type: Number,
      required: true,
      default: 0,
    },
    reorderAmount: {
      type: Number,
      required: true,
      default: 0,
    },
    recentOrderDate: {
      type: Date,
    },
    reorderDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
