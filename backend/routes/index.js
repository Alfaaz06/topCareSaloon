import express from 'express';
const router = express.Router()


router.get("/", (req, res) => {
    res.render("index", { title: "The Top Care Beauty Saloon and Makeup" })
})

export default router