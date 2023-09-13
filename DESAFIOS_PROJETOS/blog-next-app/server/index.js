const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

app.use(cors())
app.use(express.json())

app.post("/posts", async (req, res) => {
        try {
        const { title, description, created_at, body } = req.body;
        const newPost = await pool.query("INSERT INTO post (title, description, created_at, body) VALUES($1, $2, $3, $4) RETURNING *",
            [title, description, created_at, body]
        )
        res.json(newPost.rows[0]);
        } catch (error) {
            console.log(error);
        }
})
    
app.get("/posts", async (req, res) => {
    try {
        const post = await pool.query("SELECT * FROM post")
        res.json(post.rows)
    } catch (error) {
        console.log(error);
    }
})

app.delete('/posts/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const deletePost = await pool.query(
                "DELETE FROM post WHERE id = $1",
                [id]
            )
            res.json("Deleted")
        } catch (error) {
            console.log(error)
        }
    })

    app.put('/posts/:id', async (req, res) => {
            try {
                const { id } = req.params;
                const { title, description, created_at, body } = req.body
                const updatePost = await pool.query(
                    "UPDATE post SET title = $1, description = $2, created_at = $3, body = $4  WHERE id = $5",
                    [title, description, created_at, body, id]
                )
                res.json("Updated")
            } catch (error) {
                console.log(error)
            }
        })

app.listen(5000, () => {
    console.log('O servidor iniciou na porta 5000')
})