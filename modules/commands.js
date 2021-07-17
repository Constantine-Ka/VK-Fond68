const VkBot         = require('node-vk-bot-api');
const { button }    = require('node-vk-bot-api/lib/markup');
const Markup        = require('node-vk-bot-api/lib/markup');
const Session       = require('node-vk-bot-api/lib/session');
const Stage         = require('node-vk-bot-api/lib/stage');
const Scene         = require('node-vk-bot-api/lib/scene');

const msg           = require('../json/msg.json');
const config        = require('../config.json')
const shortmessage = require('./shortMessage');

const bot = new VkBot({
    token: config.token,
    confirmation: config.confirmation
});


const switchCommand = function(ctx){
    // console.log("🚀 ~ file: commands.js ~ line 18 ~ switchCommand ~ ctx", ctx.message.from_id   )
    // const user = await bot.execute('users.get', {
    //     user_ids: 1,
    // })
    if(ctx.message.text.toLowerCase()=="начать"){
        shortmessage(ctx, 'start')
        return
    }else if (ctx.message.payload){
        payloadButton = JSON.parse(ctx.message.payload).button;
        switch (payloadButton) {
            case "start":
            case "about":
            case "contacts":
            case "wish_help":
            case "items":
            case "money":
            case "volunteer":
            case "rule_task":
            case "choose_task":
                shortmessage(ctx,payloadButton)
                break;
            case 'volunteer':
                console.log("Волонтеры ");
                // const session = new Session();

                break;
            default:
                mess = `Не распознанный payload-button от @id${ctx.message.from_id} cо следующим содержанием:\n \n${payloadButton}`
                bot.sendMessage("2000000001",mess)
                break;
        }
    }else{
        if(ctx.from_id<0)return
        mess = `Не распознаное сообщение от @id${ctx.message.from_id} cо следующим содержанием:\n \n${ctx.message.text}`
        bot.sendMessage("2000000001",mess)
    }


}

module.exports.switchCommand				= switchCommand
