const express = require('express');
const app = express();
const path = require('path');
const woowa = require('./woowa');
const autocompletion = require('./autocompletion');
const cors = require('cors');
const router = express.Router({
  caseSensitive: true
});

app.use(cors())

router.use('/woowa', woowa)
router.use('/ac', autocompletion)

module.exports = router;