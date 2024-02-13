module.exports.getChats = async function getChats(req,res){
    res.status(200).json({chat:{
        id:11,
        firstUser:1,
        SecondUser:2,
        // messages:{
            // message:{
            //     id:"??",
            //     text:"Привки",
            //     sender:"id??",
            //     time:"timeSend"
            // }
            // message:{
            //     id:"??",
            //     text:"Привки",
            //     sender:"id??",
            //     time:"timeSend"
            // }
        // }

        }})
}
module.exports.isSignUp = async function isSignUp(req,res,next){
    res.status(200).json({login:true})

}
