var returnApi = require('../connectors/apiGithub')
const router = require("express").Router();

router.get('/', async function (req, res) {
    try {
        var returnMessage = await returnApi.returnData();
        res.status(200).send(returnMessage);
    }
    catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
