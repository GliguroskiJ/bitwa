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
    const article_getAll = db.prepare('SELECT * FROM article').all();

    console.log(article_getAll);
    res.send(article_getAll);
});
router.get('/:id', (req, res) => {
    const id = req.params.id
    const article_get = db.prepare('SELECT id, title, date, text FROM article WHERE id = ?').get(id);

    console.log(article_get);
    res.send(article_get);
});
router.post('/', (req, res) => {
    const body = req.body;
    const article = {
        image: body.image,
        title: body.title,
        text: body.text,
        date: body.date
    }
    const article_get = db.prepare('INSERT INTO article (image, title, text, date) VALUES (?, ?, ?, ?)');

    article_get.run(article.image, article.title, article.text, article.date);
    console.log(article_get);
    res.send(article);
});
router.patch("/:id", (req, res) => {
    const body = req.body;
    const id = req.params.id;

    if (id) {
        const article = articles.find((a) => a.id === Number.parseInt(id));
        if (article) {
            article.title = body.title;
            console.table(articles);
            res.send();
        } else {
            res.sendStatus(404)
        }
    } else {
        res.sendStatus(404);
    }
});
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const article_delete = db.prepare('DELETE FROM article WHERE id = ?').run(id);

    console.log(article_delete);
    res.send(article_delete);
});
module.exports = router;
