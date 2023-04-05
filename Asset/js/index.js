//var btn = document.getElementById('btn').style.backgroundColor="green";
 document.getElementById('box').style.backgroundColor = "green";


 function changeShapeWithColor() {
  console.log(document.getElementById('box').style.backgroundColor )
  //color change
  if(document.getElementById('box').style.backgroundColor == "red")
  {
    document.getElementById('box').style.backgroundColor = "green";
  }else{
    document.getElementById('box').style.backgroundColor ="red"
  }
 
  //shape change
  var element=document.getElementById("box");
  element.classList.add("rectangle1");
  if(element.classList=="rectangle1"){
    element.classList="circle1";
  }
  else{
    element.classList="rectangle1";
  }
};
      
  // function flag(){
  //   var circle= document.createElement("div");
  //   circle.classList.add("circle2");
  //   document.getElementById("rectangle2").appendChild(circle) ;
       
  // };

  function drawCircle() {
    // Create a new circle element
    var circle = document.createElement("div");

    
    circle.classList.add("circle");
    
    // Append the circle element to the rectangle element
    document.getElementById("rectangle").appendChild(circle);
  }

  