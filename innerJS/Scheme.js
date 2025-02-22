import mongoose from 'mongoose'

const UserData = new mongoose.Schema({
    name: {type: 'String', required: true},
    nickname: {type: 'String', required: true},
    password: {type: 'String', required: true}
})

export default mongoose.model('UserData', UserData);

//unused. I don't use mongoose since it is banned in my country. Now I can't use it