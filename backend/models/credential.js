import mongoose from "mongoose";

const credentialSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },

    site: {
      type: String,
      required: true,
      trim: true
    },

    username: {
      type: String,
      required: true,
      trim: true
    },

    password: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
);

const Credential = mongoose.models.Credential || mongoose.model("Credential", credentialSchema);

export default Credential;