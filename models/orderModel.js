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