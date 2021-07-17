const VkBot         = require('node-vk-bot-api');
const { button }    = require('node-vk-bot-api/lib/markup');
const Markup        = require('node-vk-bot-api/lib/markup');
const msg           = require('../json/msg.json')
const kBoard        = require('./k-board')
const {VK}          = require('vk-io')
const config        = require('../config.json')

// const vk = new VK({
//     token: config.token,
// });



module.exports= async function(ctx, question, payload=null){
    console.log("🚀 ~ file: shortmessage.js ~ line 7 ~ question", question)
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

            // ctx.reply(msg[question], ["photo-40960278_457239046"],kBoard.helper)

            break;
        
        default:
            console.log("🚀 ~ file: shortmessage.js ~ line 26 ~ default")
            ctx.reply(msg[question], null,kBoard.main);
            break;
    }




}

