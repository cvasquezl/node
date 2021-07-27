const store =require('./store');

function addMessage(user,message){
    return new Promise((resolve,reject)=>{
        if (!user|| !message){
            console.error('[messageController] No Hay Usuario o Menssage');
            return reject('los datos son incorrectos ');
            return false;
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        }
        store.add(fullMessage)
        resolve(fullMessage);
    })
    
}

function getMessage(filterUser){
    return new Promise((resolve, reject) =>{
        resolve(store.list(filterUser));
    })
}
function  deleteMessage(id) {
    return new Promise((resolve,reject)=>{
        if(!id){
            reject('id invalido');
            return false;
        }
        store.remove(id)
        .then (() =>{
            resolve();
        })
        .catch(e =>{
            reject(e);
        });
    });
};
 function updateMessage(id, message){

     return new Promise(async(resolve, reject) => {
         if(!id || !message){
             reject('invalid data');
             return false;
         };
        const result = await store.updateText(id,message);

        resolve(result);
     })

    };

    

module.exports = {
    addMessage,
    getMessage,
    updateMessage, 
    deleteMessage,
    
    
};