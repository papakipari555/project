class Player{
    constructor(){
    this.name = null;
    this.distance = 0;
    this.index = null;
    }
        getplayerCount(){
        var playerCountref = database.ref("playerCount")
        playerCountref.on("value", function(data){
            playerCount = data.val();
        })
        }
        update(count){
         var countref = database.ref("/")
           countref.update({
               playerCount : count
           })
        }
        updateplayerinfo(){
            var playerindex = "players/player" + this.index
            var playerref =  database.ref(playerindex)
            playerref.set({
                playername : this.name,
                  distance : this.distance

            })
        }

       static getallplayerinfo(){
       var playerref = database.ref("players")
       playerref.on("value" , (data) =>{
           allplayers = data.val()
       })
        }


}