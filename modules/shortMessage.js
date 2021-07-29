const VkBot         = require('node-vk-bot-api');
const { button }    = require('node-vk-bot-api/lib/markup');
const Markup        = require('node-vk-bot-api/lib/markup');
const msg           = require('../json/msg.json')
const kBoard        = require('./k-board')
// const {VK}          = require('vk-io')
const config        = require('../config.json')

// const vk = new VK({
//     token: config.token,
// });



module.exports= async function(ctx, question, payload=null){
    console.log(9);


    switch (question) {
        case "wish_help":
            console.log("🚀 ~ file: shortmessage.js ~ line 20 ~ case wish_help")
            ctx.reply(msg[question], null,kBoard.helper)
            break;
        case "money":
            console.log("🚀 ~ file: shortmessage.js ~ line 22 ~ money")
            ctx.reply(msg[question], null,kBoard.qrCode)
            break;
        case "rule_task":
        case "choose_task":
            console.log("🚀 ~ file: shortmessage.js ~ line 33 ~", question)
            ctx.reply(msg[question].text, [msg[question].image],kBoard.helper)
            break;
        case "items":
            ctx.bot.sendMessage(ctx.message.from_id, {message:msg.items+'\n\nПривезти вы можете к нам в офис по адресу:\n г.Тамбов ул. Широкая д.4',lat:52.735712, long:41.435113, random_id:ctx.message.random_id})
            break;
        case "contacts":
            ctx.bot.sendMessage(ctx.message.from_id, {message:msg.contacts, lat:52.735712, long:41.435113, random_id:ctx.message.random_id,dont_parse_links:1,keyboard:kBoard.contact}).catch(err=>console.log(err))
            break
        default:
            console.log("🚀 ~ file: shortmessage.js ~ line 26 ~ default")
            ctx.reply(msg[question], null,kBoard.main);
            break;
    }




}

