import pool from "../innerJS/postgresql.js";

class PostController {
    async createPost (req, res) {
        console.log('post created')
        console.log(req)
        const {title, content, username} = req.body;
        const newPost = await pool.query(`INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`, [`${title} - by ${username}`, content, 2]);
        res.json(newPost.rows);
    }

    async getPosts (req, res) {
        const posts = await pool.query('select * from post')
        console.log(posts.rows)
        res.json(posts.rows)
        
    }

    async getOnePost (req, res) {
        const posts = await pool.query('select * from post')
        const {id} = req.query
        for (let i = 0; i < posts.rows.length; i++) {
            if(id==posts.rows[i].id) {
                res.json(posts.rows[i])
            }
        }
    }
}

const postController = new PostController()

export default postController