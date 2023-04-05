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
  element.classList.add("rectangle");
  if(element.classList=="rectangle"){
    element.classList="circle";
  }
  else{
    element.classList="rectangle";
  }
};
      



  function flag(){
    var circle= document.createElement("div");
    circle.classList.add("circle2");
    document.getElementById("rectangle2").appendChild(circle) ;
       
  };