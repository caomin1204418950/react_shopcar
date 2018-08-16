const data = require('../data/data')
const router = require('koa-router')();
router.get('/data', (ctx) => {
    ctx.body = data
})
module.exports = router
