import Router from '@koa/router';
import chalk from 'chalk';
import Koa from 'koa';

const router = new Router();
router.get('/healthcheck', (ctx) => ctx.status = 201);
router.all('/v2/d/otaflash', (ctx) => {
    console.log('OTA Flash Detected', ctx);
    ctx.body = '{"error": 422}';
});
router.all('/:path(.*)', (ctx) => {
    console.log('Unknown route, but maybe it works ;)', ctx);
    ctx.body = '{"error": 422}';
});

const app = new Koa();
app.use(router.routes()).use(router.allowedMethods());
app.listen(9082);

console.log(`SONOFF OTA Flash Mock Server is listing at ${chalk.cyan(`http://localhost:9082`)}`);
