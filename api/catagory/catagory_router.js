const router = require('express').Router()
const catagory = require('./catagory_model')

router.get('/', (req, res, next) => {
    catagory.get_all()
        .then(data => res.json(data))
        .catch(next)
})

module.exports = router;
