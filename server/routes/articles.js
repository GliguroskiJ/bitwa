let express = require('express');
let router = express.Router();
var debug = require('debug')('router:articles');

const options = {
    verbose: console.debug
}
const db = require('better-sqlite3')('foobar.db', options);

let articles = [
    {
        id: 1,
        image: 'https://picsum.photos/seed/picsum/500',
        title: "Title",
        date: new Date(),
        text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit - lol.`
    },
    {
        id: 2,
        image: 'https://picsum.photos/seed/picsum/500',
        title: "Title",
        date: new Date(),
        text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.`
    },
    {
        id: 3,
        image: 'https://picsum.photos/seed/picsum/500',
        title: "Title",
        date: new Date(),
        text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.`
    },
];
router.get("/", function (req, res) {
    const articles = db.prepare('SELECT * FROM ARTICLE').all();
    console.log(articles);
    res.send(articles);
});
router.get('/:id', (req, res) => {
    const id = req.params.id

    if (id) {
        const article = articles.find((a) => a.id === Number.parseInt(id));
        res.send(article);
    } else {
        res.send("Not Found");
    }
});
router.post('/', (req, res) => {
    const body = req.body;
    const done = "Post done";
    const article = {
        id: articles.length + 1,
        title: body.title,
        text: body.text,
        date: new Date()
    }
    articles.push(article);
    console.table(articles);
    res.send(done);
});
router.patch("/:id", (req, res) => {
    const body = req.body;
    const id = req.params.id;

    if (id) {
        const article = articles.find((a) => a.id === Number.parseInt(id));
        const done = "Update done";
        if (article) {
            article.title = body.title;
            console.table(articles);
            res.send(done);
        } else {
            res.sendStatus(404)
        }
    } else {
        res.sendStatus(404);
    }
});
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const done = "Delete done";
    if (id) {
        articles = articles.filter((a) => a.id !== Number.parseInt(id));
        console.table(articles);
        res.send(done);
    } else {
        res.sendStatus(404);
    }
});
module.exports = router;
