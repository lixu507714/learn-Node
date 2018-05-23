var getUser = (id, callback) => {
    var user = {
        id:1,
        name: 'lx'
    };
    setTimeout(()=>{
        callback(user);
    },(2000))
};

getUser(23, (userObj)=>{
    console.log(userObj);
});