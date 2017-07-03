const express = require('express');
const app = express();
const path = require('path');
const woowa = require('./woowa');
const cors = require('cors');
const router = express.Router({
  caseSensitive: true
});

app.use(cors())

router.use('/woowa', woowa)

module.exports = router;