const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!'

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./Commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Krasse Bananes Bot is online!');
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;






    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift() .toLowerCase();

if(command === 'Pulse_Xd-Is-Noob'){
    client.commands.get('Pulse_Xd-Is-Noob').execute(message, args);
} 
else if (command == 'youtube'){
    client.commands.get('youtube').execute(message, args);
}
else if (command == 'partner'){
   client.commands.get('partner').execute(message, args);
}
else if (command === 'Pulse_Xd-Is-Gay'){
    client.commands.get('Pulse_Xd-Is-Gay').execute(message, args);
}



});


client.login('ODE1NjkyNTYyNTIyMzA4NjQ5.YDwG5Q.4Jt4--3hQKVVfn-upI2NAB5esK0')