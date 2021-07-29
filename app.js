const express = require('express');
const bodyParser = require('body-parser');
const VkBot = require('node-vk-bot-api');
const config = require('./config.json')
const command = require('./modules/commands.js')
const fs = require('fs')
const Session = require('node-vk-bot-api/lib/session');
const Stage = require('node-vk-bot-api/lib/stage');
const Scene = require('node-vk-bot-api/lib/scene');
const msg = require('./json/msg.json');
const { keyboard } = require('node-vk-bot-api/lib/markup');
const kBoard        = require('./modules/k-board')



const app = express();
const bot = new VkBot({
    token: config.token,
    confirmation: config.confirmation
});
// const session = new Session();
// const volunteer = new Scene('volunteer',
//     async(ans)=>{
//         const user = await bot.execute('users.get', {
//             user_ids: ans.message.from_id,
//         });
//         ans.reply(`Как Вас записать? \n Вы ${user[0].first_name} ${user[0].last_name}? \nЕсли нет, то просто напишите в сообщении.`,null, kBoard.volonters_name);
//         if(ans.message.text=="🔄Главное меню") {ans.scene.leave()
//             await command.switchCommand(ans)
//             return
//         };
//         ans.scene.next();

//     },
//     async(ans)=>{
//         if(ans.message.text=="🔄Главное меню") {ans.scene.leave()
//             await command.switchCommand(ans)
//             return
//         };
//         if(ans.message.text=="Назад") {ans.scene.leave()
//             await command.switchCommand(ans)
//             return
//         };
//         ans.session.name = ans.message.text
//         ans.scene.next();
//         ans.reply('Cколько вам полных лет?',null, kBoard.volonters_step)
//     },
//     async (ans)=>{
//         // console.log(ans.scene.selectStep("1"));
//         if(ans.message.text=="🔄Главное меню") {ans.scene.leave()
//             await command.switchCommand(ans)
//             return
//         };
//         if(ans.message.text=="Назад") {ans.scene.leave()
//             await command.switchCommand(ans)
//             return
//         };
//         if(!(+ans.message.text)){
//             console.log("7877",47);
//             this(ans)

//         }
//         // console.log(+ans.message.text);
//         // ans.session.age = +ans.message.text;
//         // ans.scene.next();
//         // ans.reply("По какому номеру можно с Вами связаться?")
//     },
//     (ans)=>{
//         ans.session.tel = ans.message.text;
//         ans.scene.next();
//         ans.reply("В каком районе области Вам удобно помогать нам?")
//     },
//     (ans)=>{
//         ans.session.location= ans.message.text
//         ans.scene.leave();
//         ans.reply("Спасибо")
//         console.log(ans.message.text, 2);
//         console.log(ans.session.age, ans.session.tel,ans.session.location);
//     }
// )
// var i=1
console.log("Run");
// const stage = new Stage(volunteer);

// bot.use(session.middleware());
// bot.use(stage.middleware());


// bot.use(async (ctx, next) => {
//     console.log("🚀 ~ file: index.js ~ line 90 ~ bot.use ~ ctx", ctx)
//     try {

//         if (ctx.message.out == 1) return
//         if (ctx.message.text == "🙏Делами") {
//             // ctx.scene.enter('volunteer')
//             return
//         }
//         await command.switchCommand(ctx)

//         await next()
//     } catch (e) {
//         console.error(e);
//     }
// });

// bot.command('/install', async (ctx) => {
//     await ctx.reply('Планируется потом, но пока до этого много чего надо реализовать');
// });

app.use(bodyParser.json());

app.post('/', bot.webhookCallback);

app.listen(process.env.PORT || 3000,
	() => console.log("Server is running..."))
// http://ee508a6453b2.ngrok.io

bot.event('message_new', command.switchCommand)
// bot.use(async (ctx, next) => {
//     try {
//                 console.log("🚀 ~ file: index.js ~ line 40 ~ bot.use ~ i", i)

//         i++

//         if (ctx.message.out == 1) return
//         // console.log(ctx);
//         await command.switchCommand(ctx);
//         await next()
//     } catch (e) {
//         console.error(e);
//     }
// });



// bot.on((ctx) => {
//     if (ctx.message.out == 1) return
//     if (ctx.message.text == "/volunteer") {
//             ctx.scene.enter('volunteer')
//             return
//     }
//     console.log("🚀 ~ file: index.js ~ line 40 ~ bot.use ~ i", i)
//     command.switchCommand(ctx)    // console.log("🚀 ~ file: index.js ~ line 46 ~ bot.on ~ ctx", ctx)

//     console.log(555);


// });
// bot.startPolling((err) => {
//     if (err) {
//       console.error(err);
//     }
//   })
