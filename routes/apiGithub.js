var returnApi = require('../connectors/apiGithub')
const router = require("express").Router();

router.get('/api', async function (req, res) {
    try {
        var returnMessage = await returnApi.returnDataGithub();
        res.status(200).send(returnMessage);
    }
    catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
