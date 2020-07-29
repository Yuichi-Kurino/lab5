const bcrypt = require('bcrypt');
const db = require('../database/dbConfig');

async function insertUser(userJSON) {
    //TODO start your code right here
    try {
        await db('users')
            .insert(userJSON);
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

module.exports={insertUser,getUserByEmail,getUserByID};

// async function insertUser(userJSON);
// async funcion getUserByID(id);
// async function getUserByEmail(email);
