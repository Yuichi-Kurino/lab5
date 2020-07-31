const db = require('../database/dbConfig');

async function getItemByUserID(id){
    try {
        return await db('users')
            .select('*')
            .join('items', {'users.uid': 'items.uid'});

    }catch(err){
        console.error("getItemByUserID failed in items", err);
        return null;
    }
}

async function insertItem(item) {
    //TODO start your code right here
    try {
        await db('items')
            .insert(item);
        return {process: "success"};
    } catch (err) {
        console.error("Insert failed in items", err);
        return {process: "fail"};
    }

}

async function deleteItem(id) {
    try {
        await db('items')
            .del('*')
            .where({id:id});
        return {process:"success"};
    }catch(err){
        console.error("item delete failed", err);
        return {process:"fail"};
    }
}

async function changeItem(item) {
    try {
        await db('items')
            .update('*')
            .where(item);
        return {process:"success"};
    }catch(err){
        console.error("item change failed", err);
        return {process:"fail"};
    }
}



module.exports={insertItem, getItemByUserID, deleteItem, changeItem}