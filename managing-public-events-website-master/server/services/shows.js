const db = require('./db');

async function getAllShows() {
    console.log("getting all shows, before");
    let result = await db.query('select * from showme.shows');
    console.log(result);
    return result;
}

async function getSingleShow(id) {
    // let result = db.query(`select * fro mshowme.shows where id=${id}`, (res) => result = res);
    let s = `select * from shows  sh
    join artists ar on ar.personal_id = sh.id_of_presenter
    join auditoriums au on  sh.show_location = au.auditorium_id
    join shows_types sht on sht.show_type_id = sh.type_of_show
    where id = ${id}`;
    console.log(s);
    let result = await db.query(s);
    return result;
}

async function getArtistShows(firstName, lastName) {
    console.log("getting by name");
    let q = `SELECT *
    FROM artists
    LEFT JOIN Shows
    on shows.id_of_presenter=artists.personal_id
    where artists.f_name = '${firstName}' and artists.l_name='${lastName}'`
    let result = await db.query(q);
    console.log(q);
    return result;
}

async function getShowByType(showType) {
    let result = await db.query(`select * from showme.shows where type_of_show=${showType}`);
    return result;
}

async function getShowsByDate(date) {
    let q = `SELECT * FROM shows WHERE shows.show_date LIKE '%${date}%'`;
    console.log(q + "=================");
    let result = await db.query(q);
    return result;
}

async function getShowsByIncreasedDate(date) {
    let q = `select * from showme.shows where show_date > '${date}'`;
    console.log(q + "--------------------------------------------------------");
    let result = await db.query(q);
    return result;
}

async function getShowByAuditorium(auditorium, date) {
    let q = `SELECT * FROM shows WHERE shows.show_location=${auditorium} and
    shows.show_date LIKE '%${date}%'`;
    console.log(q + "getting by auditorium =================");
    let result = await db.query(q);
    return result;
}

async function getShowByAuditoriumName(auditorium) {
    let q = `SELECT * FROM shows WHERE shows.show_location=${auditorium}`;
    console.log(q + "getting by auditorium =================");
    let result = await db.query(q);
    return result;
}

async function getShowByType(type) {
    let q = `SELECT *
             FROM shows_types
             LEFT JOIN Shows
             on shows.type_of_show=shows_types.show_type_id
             where shows.type_of_show = ${type}`;
    console.log(q + "getting by auditorium =================");
    let result = await db.query(q);
    return result;
}

async function getShowByPrice(price) {
    let q = `SELECT * FROM shows WHERE shows.show_price<${price}`;
    console.log(q + " getting by price =================");
    let result = await db.query(q);
    return result;
}

async function setNewShow(show) {
    console.log("seting show:   " + JSON.stringify(show.auditorium))
    let a = `insert into showme.shows values (default,${JSON.stringify(show.presentor_id)},
    ${JSON.stringify(show.name)},${JSON.stringify(show.description)},${JSON.stringify(show.type)},
    ${JSON.stringify(show.price)},${JSON.stringify(show.date)},${JSON.stringify(show.auditorium)},${JSON.stringify(show.url)})`
    console.log(a);
    const result = await db.query(a);
    return result;
}


// async function addNewInShow(showId) {
//     const result = await db.query(`update showme.shows  set numberOfTickets = numberOfTickets+1 where id = ${showId}`);
//     return result;
// }


module.exports = {
    getAllShows,
    getSingleShow,
    getArtistShows,
    getShowByType,
    getShowsByDate,
    getShowsByIncreasedDate,
    setNewShow,
    getShowByAuditorium,
    getShowByPrice,
    getShowByAuditoriumName,
    // addNewInShow
}


