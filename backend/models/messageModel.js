const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    content: { type: String, required: true },
    sender: { type: mongoose.Schema.Types.ObjectId, ref:"User", required: true },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
