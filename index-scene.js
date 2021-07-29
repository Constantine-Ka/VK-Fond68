const VkBot = require('node-vk-bot-api/');
const Session = require('node-vk-bot-api/lib/session');
const Stage = require('node-vk-bot-api/lib/stage');
const Scene = require('node-vk-bot-api/lib/scene');
const config        = require('./config.json')

const bot = new VkBot({
    token: config.token,
    confirmation: config.confirmation
  });
const session = new Session();
const scene = new Scene('meet',
  (ctx) => {
    ctx.scene.next();
    ctx.reply('How old are you?');
  },
  (ctx) => {
    ctx.session.age = +ctx.message.text;

    ctx.scene.next();
    ctx.reply('What is your name?');
  },
  (ctx) => {
    ctx.session.name = ctx.message.text;

    ctx.scene.leave();
    ctx.reply(`Nice to meet you, ${ctx.session.name} (${ctx.session.age} years old)`);
  });
const stage = new Stage(scene);
i=1
bot.use(session.middleware());
bot.use(stage.middleware());
bot.use(async (ctx, next) => {
        try {
                    console.log("🚀 ~ file: index.js ~ line 40 ~ bot.use ~ i", i)

            i++
  
            if (ctx.message.out == 1) return
            // console.log(ctx);
            // await command.switchCommand(ctx);
            await next()
        } catch (e) {
            console.error(e);
        }
    });
bot.command('/meet', (ctx) => {
  ctx.scene.enter('meet');
});

bot.startPolling();
