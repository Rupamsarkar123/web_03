import React ,{useState} from "react";
import "./App.css";



var emojiDictionary =  {

  "😊" :"Smiling" ,
  "😂":"Laughing",
  "😳":"Disbelief",
  "😮": "Surprised",
  "😭": "Crying",
  "😑": "Annoying",
  "😌": "Peace",
  "🤔":"Thinking",
  "😋": "Delicious",
  "🤩":"Grinning  with Star Eyes",
  "🥳":"Partying ",
  "🥰":"Smiling with Hearts",
  "🤣":"Rolling on the Floor Laughing ",
  "😱":"Face Screaming in Fear",
  "❤️": "Love",
  "⭐": "Star",

  };


var emojisWeKnow = Object.keys(emojiDictionary);


export default function App(){


  const[ meaning , setMeaning] = useState("");

  function emojiInputHandler (event){   //Processing
   
   var userInput = event.target.value;
   var  meaning   = emojiDictionary[userInput] ;
   

   if (meaning === undefined){
    meaning ="we don't have it stored in our library";
   }
   setMeaning(meaning);  //React call to show output

  }
  
   function emojiClickHandler(emoji){     //Processing
   
    var  meaning   = emojiDictionary[emoji] ;

    setMeaning(meaning);  //React call to show output


   }
   /* console.log(event.target.value);
  setUserInput(event.target.value);*/

/*function listItemClickHandler(item){
  console.log("clicked",item);

}*/
  


return(
  <div className="App">
  <h1>Emoji interpreter</h1>

  <input onChange = {emojiInputHandler}/>

<h2>{meaning}</h2> 
{/*Actual output set by react using usestate*/}
<h3>emojis We know</h3>
{emojisWeKnow.map(function (emoji){
  return (
    <span
    onClick ={() => emojiClickHandler(emoji)}
    style={{fontSize:"3rem", padding : "0.5rem" , cursor:"pointer"}} 
    key= {emoji}>
    {emoji}{""}</span>
  )
  
})}
  </div>

  );






  //var headingText = "Welcome Rupam!";
/*var username = prompt("Enter Username");
var color = "blue";*/
/*var likeCounter = 0;*/


/**if we just want to color username add span tag to welcome */

/*things to notice that instead of class in react we use classname in it as Class is  a reserved keyword in JS*/
/*style takes an object insted of string " "*/

/**
 VISER--> View --> Interact --> State in Event Handler --> Render
 <button onClick={likeClickHandler}>Likes me !</button> {likeCounter}*/





 /*<input onChange = {emojiInputHandler}/>
 <div>meaning{meaning}</div>*/





/*const[ likeCounter ,setlikeCounter] = useState(0);*/
  /*function likeClickHandler (){
    likeCounter = likeCounter + 1;//processing
    console.log("clicked",likeCounter)//output*/
    
  /*function likeClickHandler(){
 var newLikeCounterValue = likeCounter +1;
  setlikeCounter(newLikeCounterValue);
}*/



/*<ul>{
  shoppingList.map(function(item,index){
    console.log(item)
    return <li key ={item}
    onClick = {() => listItemClickHandler(item)}
    style = {{backgroundColor:getBg(index)}}>{item}</li>

  }
)
}
          
</ul>*/



//var shoppingList = ["milk","Cheese","breads","biscuits","paneer","butter","pasta"];


/* function getBg (index){
   if (index % 2 === 0){
     return "white";
   }
   return "brown";*/
 }