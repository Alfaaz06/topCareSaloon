import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        length: [10, 'Phone number must be 10 digits']
    },
    message: {
        type: String,
        required: true
    }
})

export default mongoose.model("Message", messageSchema);