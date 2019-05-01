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
    /*24*/    "24.jpg",
    /*25*/    "25.jpg",
    /*26*/    "26.jpg",
    /*27*/    "27.png",
    /*28*/    "28.png",
    /*29*/    "29.png",
    /*30*/    "30.png",
    /*31*/    "31.png",
    /*32*/    "32.png",
    /*33*/    "33.jpg",
    /*34*/    "34.jpg",
    /*35*/    "35.jpg",
    /*36*/    "36.jpg",
    /*37*/    "37.jpg",
    /*38*/    "38.jpg",
    /*39*/    "39.jpg",
    /*40*/    "40.jpg",
    /*41*/    "41.jpg",
    /*42*/    "42.PNG",
    /*43*/    "43.PNG",
    /*44*/    "44.png",
    /*45*/    "45.jpg",
    /*46*/    "46.png",
    /*47*/    "47.PNG",
    /*48*/    "48.jpg",
    /*49*/    "49.jpg",
    /*50*/    "50.PNG",
    /*51*/    "51.jpg",
    /*52*/    "52.jpg",
    /*53*/    "53.png",
    /*54*/    "54.jpg",
    /*55*/    "55.jpg",
    /*56*/    "56.PNG",
    /*57*/    "57.jpg",
    /*58*/    "58.png",
    /*59*/    "59.jpg",  
    /*60*/    "60.jpg",
    /*61*/    "61.jpg",
    /*62*/    "62.jpg",
    /*63*/    "63.PNG",
    /*64*/    "64.PNG",
    /*65*/    "65.png",
    /*66*/    "66.PNG",
    /*67*/    "67.PNG",
    /*68*/    "68.PNG",
    /*69*/    "69.PNG",
    /*70*/    "70.PNG",
    /*71 .mp4 donc non*/
    /*72*/    "72.PNG",
    /*73*/    "73.PNG",
    /*74*/    "74.PNG",
    /*75*/    "75.PNG",
    /*76*/    "76.PNG",
    /*77*/    "77.PNG",
    /*78*/    "78.PNG",
    /*79*/    "79.PNG",
    /*80*/    "80.PNG",
    /*81 .mp4 donc non*/
    /*82*/    "82.PNG",
    /*83*/    "83.png",
    /*84*/    "84.PNG",
    /*85*/    "85.PNG",
    /*86*/    "86.PNG",
    /*87*/    "87.PNG",
    /*88*/    "88.PNG",
    /*89*/    "89.PNG",
    /*90*/    "90.PNG",
    /*91*/    "91.PNG",
    /*92*/    "92.PNG",
    /*93*/    "93.jpeg",
    /*94*/    "94.PNG",
    /*95*/    "95.jpg",
    /*96*/    "96.PNG",
    /*97*/    "97.PNG",
    /*98*/    "98.PNG",
    /*99*/    "99.PNG",
    /*100*/   "100.PNG",
    /*101*/   "101.PNG",
    /*102*/   "102.PNG"
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
bot.login(process.env.BOT_TOKEN);
