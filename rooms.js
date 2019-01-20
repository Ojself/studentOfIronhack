// TODO
/* Should the rooms be objects or classes?
How to structure... */



let roomKitchen = {
    id: 0, //unnecessary?
    desrcibe: "You see a somewhat clean kitchen with a coffee machine, water and ice dispenser. Next to you, there's phonebooths and a hallway.",
    describeCloser: "Seems like someone left their computer next to the sink. Probably one of the TA's who leaves their stuff all over the place. You carefully grab the computer for later usage.",
    describeCloserFalse: "You already picked up the computer that was laying here.."
    item: true, // meaning it's available for grabs
    interact: function(){
        player.stamina += 5;
        player.anxiety += 2;
        "You make yourself a cup of coffee and feel more refreshed than ever. Your stamina and anxiety level rises.."},
}

let roomPhoneBooth = {
    id: 1,
    desribe: "You feel somewhat claustrophobic as you climb into the phonebooth. Some poor student has been here before you and written something on the wall",
    desribeCloser: "it says: 'For when Javascript gives me the fear, I come here to shed a tear'",
    interact: function(){
        player.anxiety = 0;
        "Your eyes become watery as you question your ability to code. The overwhelming feeling of information that have been bombarded towards you the last few days finaly gets to you and you burst into tears. After a couple of minutes you pick yourself up and whipe the tears away from your cheek. You feel the stress relieve from your body...for now "
    }
}











 