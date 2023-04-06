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
    var element=document.getElementById("circle");
    
    
    // element.classList.remove("hide_circle");
    // element.classList.add("show_circle");
    // if(element.style.display=="none"){
    //   element.style.display="block";
    // }
    // else{
    //   element.style.display="none";
    // }


    if (element.classList.contains('hide_circle')){
      element.classList.remove('hide_circle');
      element.classList.add('show_circle');

    }else{
      element.classList.remove('show_circle');
      element.classList.add('hide_circle');
    }

  }

    // const myButton = document.querySelector('#myButton');

    // myButton.addEventListener('click', () => {
    //   if (myButton.classList.contains('active')) {
    //     myButton.classList.remove('active');
    //   } else {
    //     myButton.classList.add('active');
    //   }
    // });
    

    
    // element.classList.toggle("circle");
    // x.classList.add("circle");
    // document.getElementsByClassName("rectangle").appendChild(circle);
  // };





  