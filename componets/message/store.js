const model = require('./model')

//



console.log('[db] conectada correctamente ')


function addMessage(message){
//list.push(message);
const myMessage = new model(message);
myMessage.save();
}

async function getMessage(filterUser){
    let filter = {};
    if (filterUser !== null){
     filter = {user:filterUser}
    }
    const message = await model.find(filter); 
    return message;
}

function removeMessage(id){
    return model.deleteOne({
        _id:id
        
    });

}



async function updateText(id,message){
    const foundMessage = await model.findOne({
        _id:id
    })

    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}





module.exports = {
    add:addMessage,
    list: getMessage,
    updateText:updateText,
    remove:removeMessage,
    
}