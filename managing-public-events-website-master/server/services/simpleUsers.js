const db = require('./db');

async function getAllSimple() {
    let result = await db.query('select * from simpleUsers');
    return result || [];
}
async function getSingleSimple(id) {
    let result = await db.query(`select * from simpleUsers where personal_id=${id}`);
    console.log("result in single dsimple: " + result);
    if (!result) {
        result = "user does not exist"
    }
    return result;
}


async function setNewUser(user) {
    console.log("insert, user = " + user);
    let q=`insert into showme.simpleUsers (personal_id,f_name,l_name,phone,address,user_email,user_password,user_type) values (${JSON.stringify(user.personal_id)},${JSON.stringify(user.first_name)},${JSON.stringify(user.last_name)},${JSON.stringify(user.phone)},${JSON.stringify(user.address)},${JSON.stringify(user.email)},${JSON.stringify(user.password)},'simpleUsers')`
    console.log(q);
    const result = await db.query(q);
    return result;
}

async function deleteUser(id) {
    const result = await db.query(`delete from showme.simpleusers where personal_id=${id}`);
    return result;
}

async function updateUser(userId, user) {
    console.log(user);
    const result = await db.query(`UPDATE showme.simpleusers
                                   SET user_password=${JSON.stringify(user.password)},
                                   address=${JSON.stringify(user.address)},
                                   phone=${JSON.stringify(user.phone)},
                                   l_name=${JSON.stringify(user.last_name)},
                                   user_email=${JSON.stringify(user.email)}
                                   WHERE personal_id = ${userId};`);
    return result;
}

module.exports = {
    getAllSimple, getSingleSimple, setNewUser, deleteUser, updateUser
}

