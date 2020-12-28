
const express = require("express");

const Blog = require("../models/Blog");

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.render('index', { title: 'Homepage', blogs: blogs });
    } catch(err) {
        res.send(`<h1 style='text-align: center'>${err}</h1>`)
    }
})

module.exports = router