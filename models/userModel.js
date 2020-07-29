const bcrypt = require('bcrypt');
const db = require('../database/dbConfig');
var tokenUtil = require('../Auth/token');

async function insertUser(user) {
    //TODO start your code right here
    try {
        await db('users')
            .insert({email:user.email, password:await bcrypt.hashSync(user.password,0)});
        return true;
    }catch(err){
        console.error("Insert failed in users", err);
        return false;
    }
}

async function getUserByID(id){
    try {
        return await db('users')
            .select('*')
            .where('uid',id);

    }catch(err){
        console.error("getUserByID failed in users", err);
        return null;
    }
}

async function getUserByEmail(email){
    try {
        return await db('users')
            .select('*')
            .where('email',email);

    }catch(err){
        console.error("getUserByEmail failed in users", err);
        return null;
    }
}

async function authenticateUser(user){
    //     .select('password'),user);
    // console.log(await db('users'
    try {
        const checked=await db('users')
            .select('password')
            .where('email',user.email);
        console.log(checked.length!==0&&await bcrypt.compareSync(user.password, checked[0].password));
        try{
            if(checked.length!==0&&await bcrypt.compareSync(user.password,checked[0].password)){
                const token = await tokenUtil.generateToken(userDataPacket);
                if(!token){
                    res.clearCookie('userToken');
                }else {
                    res.clearCookie('userToken');
                    res.cookie("userToken", token, {expire: new Date() + 1});
                    console.log(token);
                }
                return true;
            }else{
                return false;
            }
        }catch(err){
            console.log(err);
            return false;
        }
    }catch(err){
        console.error("Insert failed in users", err);
        return false;
    }
}


module.exports={insertUser,getUserByEmail,getUserByID,authenticateUser};

// async function insertUser(userJSON);
// async funcion getUserByID(id);
// async function getUserByEmail(email);
