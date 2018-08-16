const data = require('../data/data')
const router = require('koa-router')();
router.post('/data', (ctx) => {
    ctx.body = data
})
module.exports = router
