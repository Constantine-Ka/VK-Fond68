const VkBot         = require('node-vk-bot-api');
const { button }    = require('node-vk-bot-api/lib/markup');
const Markup        = require('node-vk-bot-api/lib/markup');
const Session       = require('node-vk-bot-api/lib/session');
const Stage         = require('node-vk-bot-api/lib/stage');
const Scene         = require('node-vk-bot-api/lib/scene');
const config        = require('../config.json')


const bot = new VkBot({
    token: config.token,
    confirmation: config.confirmation
  });
const session = new Session();
const scene = new Scene

const volunteer         =function(ctx,payloadButton){
    new Scene
}

module.exports.scene.volunteer      =volunteer
