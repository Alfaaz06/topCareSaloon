import express from 'express';
const router = express.Router();
import Message from '../models/message.js'


router.post("/send/message", async(req, res) => {
    try {
        const { name, phone, message } = req.body;
        await Message.create({ name, phone, message })
        req.flash("message", "We have received your message")
        res.redirect("/")
    } catch (error) {
        console.log(error)
    }
})

export default router;