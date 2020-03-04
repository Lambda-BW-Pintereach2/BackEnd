const Articles = require("../data/helpers/articles-model");

const express = require("express");

const router = express.Router();

const restricted = require("../auth/restricted-middleware");

router.get("/", restricted, async (req, res) => {
  try {
    const articles = await Articles.find();
    res.status(200).json(articles);
  } catch (err) {
    res
      .status(500)
      .json({ err, message: "Unable to find Articles" });
  }
});

router.get("/:id", restricted, async (req, res) => {
  try {
    const articles = await Articles.findById(req.params.id);
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Unable to find this article id"
    });
  }
});

router.post("/", restricted, async (req, res) => {
  try {
    const articles = await Articles.insert(req.body);
    res.status(200).json({
      articles,
      message: "You have successfully added an article!"
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: "Unable to add an Article."
    });
  }
});

router.put("/:id", restricted, async (req, res) => {
  try {
    const articles = await Articles.update(req.params.id, req.body);
    res.status(200).json({ articles, message: "You have edited this article" });
  } catch (error) {
    res.status(500).json({ error, message: "Unable to edit this Article" });
  }
});

router.delete("/:id", restricted, async (req, res) => {
  try {
    const articles = await Articles.remove(req.params.id);
    res
      .status(200)
      .json({ articles, message: "You have deleted this article" });
  } catch (error) {
    res.status(500).json({ error, message: "Unable to delete this Article" });
  }
});

module.exports = router;