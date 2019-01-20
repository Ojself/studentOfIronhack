// TODO
/* Should the rooms be objects or classes?
How to structure... */



let roomKitchen = {
    id: 0, //unnecessary?
    desrcibe: "You see a somewhat clean kitchen with a coffee machine, water and ice dispenser. Next to you, there's phonebooths and a hallway.",
    describeCloser: "Seems like someone left their computer next to the sink. Probably one of the TA's who leaves their stuff all over the place. You carefully grab the computer for later usage.",
    describeCloserFalse: "You already picked up the computer that was laying here.."
    item: true, // meaning it's available for grabs
    availableRooms: [roomPhoneBooth, hallway],
    interact: function(){
        player.stamina += 5;
        player.anxiety += 2;
        "You make yourself a cup of coffee and feel more refreshed than ever. Your stamina and anxiety level rises.."},
}

let roomPhoneBooth = {
    id: 1,
    desribe: "You feel somewhat claustrophobic as you climb into the phonebooth. Some poor student has been here before you and written something on the wall",
    desribeCloser: "it says: 'For when Javascript gives me the fear, I come here to shed a tear'",
    availableRooms: [roomKitchen],
    interact: function(){
        player.anxiety = 0;
        "Your eyes become watery as you question your ability to code. The overwhelming feeling of information that have been bombarded towards you the last few days finaly gets to you and you burst into tears. After a couple of minutes you pick yourself up and whipe the tears away from your cheek. You feel the stress relieve from your body...for now "
    }
}

let hallway = {
    id: 2,
    desribe: "You see four elevator surrounding you and a couple of buttons to call them. Next to you is the kitchen and the classroom.",
    interact:function(skill, item){
        if (skill < 5 && item !== "screwDriver"){
            return "You have neither the skills nor the tools to do anything here"
        } else if (skill < 5 && item === "screwDriver"){
            return "You don't have the skills to do anything here"
        } else if (skill >= && item !== "scrwDriver"){
            return "You have the skills to do something, but are missing some kind of tool.."
        } else {
            // start task to fix the elevator
            return "You use your screwdriver to flip open the button and connect your computer to the chip you see inside"
        }
    }
}













 