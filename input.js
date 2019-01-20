
const inputHandler = (input, currentRoom, inventoryArray) => {

if (input == ""){
    return noInput()
}
// if input is not valid. return something about the input being invalid
} 


const noInput = ( ) => {
    const noInputArray = ["You forgot to type something", "Input field is empty..", "Try commands such as talk, walk and look to interact with your surroundings", "Your silence gets you nowhere", "Enter your commands in the input field"]

    let randomNumber = Math.floor(Math.random()*noInputArray.length)

    return noInputArray[randomNumber]
}