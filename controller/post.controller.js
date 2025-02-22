import pool from "../innerJS/postgresql.js";

class PostController {
    async createPost (req, res) {
        const {title, content, user_id} = req.query;
        const newPost = await pool.query(`INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`, [title, content, user_id]);
        res.json(newPost.rows);
    }

    async getPosts (req, res) {
        const posts = await pool.query('select * from post')
        console.log(posts.rows)
        res.json(posts.rows)
        
    }
}

const postController = new PostController()

export default postController