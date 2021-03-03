module.exports = {
    name: 'notbremse',
    description: "Kein Bock mehr auf Admin!",
    execute(message, args){

        if(message.member.roles.cache.has('816647247688368149')){
            message.member.roles.remove('816647247688368149');
        
        
        } else {
            message.channel.send('Alles OK!!!');
           
        }
    }
}