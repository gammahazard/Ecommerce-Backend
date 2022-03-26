const router = require('express').Router();
const APIRoutes = require('./api');

router.use('/api', APIRoutes);

router.use((req, res) => {
    res.send("<title>Invalid Route</title>")
});

module.exports = router;