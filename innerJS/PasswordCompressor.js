import {CharCompressorKey} from './keys.js'

const MAININNERSERVERMODULES__PasswordCompressorFunction = (password) => {
    let compressedPassword = "";
    for (let i = 0; i < password; ++i) {
        if (CharCompressorKey.password[i]){
            compressedPassword += CharCompressorKey[password[i]]
            console.log(CharCompressorKey.password[i])
        } else {
            compressedPassword += password[i]
        }
    }

    console.log(compressedPassword)
}

export default MAININNERSERVERMODULES__PasswordCompressorFunction


