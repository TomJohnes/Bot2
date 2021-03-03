module.exports = {
    name: 'Pulse_Xd-Is-Gay',
    description: "lol!",
    execute(message, args){

        if(message.member.roles.cache.has('726858437148934295')){
            message.channel.send('Everything OK!');

        } else {
            message.channel.send('Starting....')
            message.member.roles.add('726858437148934295');
        }
    }
}