const express = require("express");
const app = express();

const port = 8080;

const simpleUsersRouter = require('./routes/simpleUserRouter')
const auditoriumOwnersRouter = require('./routes/auditoriumOwnersRouter')
const auditoriumsRouter = require('./routes/auditoriumsRouter')
const artistsRouter = require('./routes/artistsRouter')
const showsRouter = require('./routes/showsRouter')
const showsTypesRouter = require('./routes/showTypesRouter')
const emailRouter = require('./routes/emailRouter')


app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const cors = require('cors');
const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use('/api/simple-users', simpleUsersRouter);
app.use('/api/auditorium-owners', auditoriumOwnersRouter);
app.use('/api/auditoriums', auditoriumsRouter);
app.use('/api/artists', artistsRouter);
app.use('/api/shows', showsRouter);
app.use('/api/shows-types', showsTypesRouter);
app.use('/api/send', emailRouter);



app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  res.status(200)
  res.json('error', { error: err })
})

app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`);
});
