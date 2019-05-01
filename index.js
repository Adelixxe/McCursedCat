const Discord = require('discord.js');
const bot = new Discord.Client();

var cli = new Discord.Client({autoReconnect:true});
var maximum = 100;
var images = [
    /*01*/    "1.PNG",
    /*02*/    "2.PNG",
    /*03*/    "3.PNG",
    /*04*/    "4.PNG",
    /*05*/    "5.PNG",
    /*06*/    "6.PNG",
    /*07*/    "7.PNG",
    /*08*/    "8.PNG",
    /*09*/    "9.jpg",
    /*10*/    "10.png",
    /*11*/    "11.PNG",
    /*12*/    "12.PNG",
    /*13*/    "13.PNG",
    /*14*/    "14.PNG",
    /*15*/    "15.jpg",
    /*16*/    "16.jpg",
    /*17*/    "17.png",
    /*18*/    "18.jpg",
    /*19*/    "19.jpg",
    /*20*/    "20.jpg",
    /*21*/    "21.jpg",
    /*22*/    "22.jpg",
    /*23*/    "23.jpg",
    /*24*/    "24.jpg"
    /*25*/     
    /*26*/     
    /*27*/     
    /*28*/     
    /*29*/     
    /*30*/  
    /*31*/
    /*32*/
    /*33*/
    /*34*/
    /*35*/
    /*36*/
    /*37*/
    /*38*/
    /*39*/
    /*40*/
    /*41*/
    /*42*/
    /*43*/
    /*44*/
    /*45*/
    /*46*/
    /*47*/
    /*48*/
    /*49*/
    /*50*/
    /*51*/
    /*52*/
    /*53*/
    /*54*/
    /*55*/
    /*56*/
    /*57*/
    /*58*/
    /*59*/
    /*60*/
    /*61*/
    /*62*/
    /*63*/
    /*64*/
    /*65*/
    /*66*/
    /*67*/
    /*68*/
    /*69*/
    /*70*/
    /*71*/
    /*72*/
    /*73*/
    /*74*/
    /*75*/
    /*76*/
    /*77*/
    /*78*/
    /*79*/
    /*80*/
    /*81*/
    /*82*/
    /*83*/
    /*84*/
    /*85*/
    /*86*/
    /*87*/
    /*88*/
    /*89*/
    /*90*/
    /*91*/
    /*92*/
    /*93*/
    /*94*/
    /*95*/
    /*96*/
    /*97*/
    /*98*/
    /*99*/
    /*100*/
    /*101*/
    /*102*/
    ];

bot.commands = new Discord.Collection();
bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));
bot.on('ready', function() {
    console.log("Le JDR peut commencer! ")
});

bot.on('ready', () => {
    bot.user.setPresence({
        game: 
        {name: "Random cursed cat pics @Adelixxe",
         type: 3
        }});
});

bot.on('message', message => {
    var prefix = '!'
if (message.content.startsWith(`${prefix}cats`)) {
    i = Math.floor((Math.random() * maximum) + 1);
    console.log(i);
    var embed = new Discord.RichEmbed()
        .setTitle("Cursed Cat Pic")
        .setColor("#f58e00")
        .attachFile(`./cursedcat/${images[i]}`)
        .setImage(`attachment://cursedcat/${images[i]}`)
        .setFooter("Requested by ",message.author.username)
        .setTimestamp();
        
    message.channel.send({embed});
    
}
})
