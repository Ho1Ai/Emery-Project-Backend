import pool from "../innerJS/postgresql.js";

class UserController {
    async createUser (req,res) {
        const {name, password} = req.body;
        // console.log(name, password)
        const newUser = await pool.query(`INSERT INTO person (name, password) values ($1, $2) RETURNING *`, [name, password]);
        
        res.json(newUser.rows[0]);
    }

    async getUsers (req, res) {
        const getUser = await pool.query(`SELECT * FROM person`)
        res.json(getUser.rows)
    } 

    async getOneUser (req, res) {
        const id = req.params.id
        const user = await pool.query(`SELECT * FROM person where id = $1`, [id])
        res.json(user.rows[0])
    }

    async updateUser (req, res) {
        const {id, name, password} = req.body
        const user = await pool.query(`UPDATE person set name = $1, password = $2 where id = $3`, [name, password, id])
        res.json(user.rows)
    }
}

const userController = new UserController();

export default userController;