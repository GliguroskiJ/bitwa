let express = require('express');
let router = express.Router();
let debug = require('debug')('router:articles');

const options = {
    verbose: console.debug
}
const db = require('better-sqlite3')('articles.sqlite', options);

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
    const articlesdb = db.prepare('SELECT * FROM ARTICLE').all();
    console.log(articlesdb);
    res.send(articlesdb);
});
router.get('/:id', (req, res) => {
    const id = req.params.id
    /*if (id) {
        const article = articles.find((a) => a.id === Number.parseInt(id));
        res.send(article);
    } else {
        res.send("Not Found");
    }*/
    const article_get = db.prepare('SELECT ID, TITLE, DATE, TEXT FROM ARTICLE WHERE ID = ?').get(id);
    console.log(article_get);
    res.send(article_get);
});
router.post('/', (req, res) => {
    const body = req.body;
    const article = {
        IMAGE: body.image,
        TITLE: body.title,
        TEXT: body.text,
        DATE: body.date
    }
    /*articles.push(article);
    console.table(articles);
    res.send(done);*/
    const article_get = db.prepare('INSERT INTO ARTICLE (IMAGE, TITLE, TEXT, DATE) VALUES (?, ?, ?, ?)');
    article_get.run(article.IMAGE, article.TITLE, article.TEXT, article.DATE);
    console.log(article_get);
    res.send(article);
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
