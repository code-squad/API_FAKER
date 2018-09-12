const express = require('express');
const app = express();
const path = require('path');
const woowa = require('./woowa');
const autocompletion = require('./autocompletion');
const amazon = require('./amazon');
const wonder = require('./wonder');
const cors = require('cors');
const router = express.Router({
  caseSensitive: true
});

app.use(cors())

router.use('/woowa', woowa)
router.use('/ac', autocompletion)
router.use('/amazon', amazon)
router.use('/wonder', wonder)

module.exports = router;