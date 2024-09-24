//Mouse Event
// Event Performed                 Event Handler                       Description

// click                           onclick                             When mouse click on an element
// mouseover                       onmouseover                         When the cursor of the mouse comes
//                                                                      over the element
// mouseout                        onmouseout                          When the cursor of the mouse leaves
//                                                                      an element
// mousedown                       onmousedown                         When the mouse button is pressed over
//                                                                      the element
// mouseup                         onmouseup                           When the mouse button is released 
//                                                                     over the element
// mousemove                       onmousemove                         When the mouse movement takes place.




// var btn1 =document.querySelectorAll('button')[0];
// btn1.onclick = function (){
//     document.querySelectorAll('button')[0].style.backgroundColor = 'blue';
// }



// Keyboard events:
// Event Performed                  Event Handler                       Description
// Keydown & Keyup               // onkeydown & onkeyup              // When the user press and then    
                                                                    //  release the key


// var body = document.body;
// var counter = 0;
// body.onkeyup = (e)=>{
//     var div = document.querySelector('div');
//     if(counter==1)
//     {
//         div.innerText = div.innerText + " " + e.key;
//         counter=0;
//         return 0;
//     }
//     if(e.key==' ')
//     {
//         counter = 1;
//     }
//     div.innerText = div.innerText + e.key;
// }

// body.onkeydown = ()=>{
//     console.log("down");
// }
// body.onkeyup = ()=>{
//     console.log("up");
// }
// body.onkeypress = ()=>{
//     console.log("press");
// }


