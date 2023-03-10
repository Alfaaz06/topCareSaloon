import express from 'express';
export const app = express();
import index from "./routes/index.js"
import message from "./routes/message.js"
import path from 'path'
const __dirname = path.resolve();
import session from 'express-session'
import flash from 'connect-flash'


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/backend/public')))
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/backend/views'));

app.use(session({
    secret: "anthing",
    cookie: { maxAge: 60000 },
    saveUninitialized: true,
    resave: true
}));

app.use(flash())

app.use((req, res, next) => {
    res.locals.message = req.flash("message")
    delete req.session.sessionFlash;
    next()
})

app.use(index)
app.use(message)