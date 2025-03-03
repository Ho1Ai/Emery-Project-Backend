import pool from "../innerJS/postgresql.js";

class CommentController {
    async appendComment (req, res) {
        // console.log('post created')
        // console.log(req.body)
        const {target_id, content, author} = req.body;
        const newComment = await pool.query('INSERT INTO comments (author, content, target_id) values ($1, $2, $3) RETURNING *', [author, content, target_id]);

        res.json(newComment.rows)
    }

    async getComments (req, res) {
        const {post_id} = req.query;
        const list = (await pool.query('SELECT * FROM comments')).rows
        // console.log(list)
        let returner = [];

        for (let index = 0; index < list.length; index++) {
            if(list[index].target_id==post_id){
                returner.push(list[index])
            }        
        }

        res.status(200).json(returner)
    }
}

const commentController = new CommentController()

export default commentController;