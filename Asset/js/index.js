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

  let lenCheck="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  document.getElementById("len").innerHTML=lenCheck.length;

  let slc="Apple, Banana, jackfruit, orange";
  document.getElementById("slice").innerHTML=slc.slice(7,13);//Banana
  document.getElementById("slice2").innerHTML=slc.slice(7);//Banana, jackfruit, orange
  document.getElementById("slice3").innerHTML=slc.slice(-12);//ruit, orange
  document.getElementById("slice4").innerHTML=slc.slice(-26,-12);//Banana, jackf
  let substr="Rose, Tulip, Lily";
  document.getElementById("substr1").innerHTML=slc.substr(7,13);
  document.getElementById("substr2").innerHTML=slc.substr(6,9);
  document.getElementById("substr3").innerHTML=slc.substr(7);
  document.getElementById("substr4").innerHTML=slc.substr(-4);
 
  function changeStr(id, sourceText, updateText){
    let text=document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML=text.replace(sourceText,updateText);
    //document.getElementById(id).innerHTML=text.replaceAll(sourceText,updateText);
  }

  function changeStr2(id,sourceText,updateText){
    let text=document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML=text.replaceAll(sourceText,updateText);
  }
  // function changeStr2(){
  //   let text=document.getElementById("chng2").innerHTML;
  //   document.getElementById("chng2").innerHTML=text.replace();
  // }
  // function changeStr3(){
  //   let text=document.getElementById("chag3").innerHTML;
  //   document.getElementById("chng3").innerHTML=text.replace("MICROSOFT","W3Schools");
  // }
  // function changeStr4(){
  //   let text1=document.getElementById("chng4").innerHTML;
  //   document.getElementById("chng4").innerHTML=text1.replace( /MICROSOFT/i,"W3Schools");
  // }

  // function changeStr5(){
  //   let text=document.getElementById("chng5").innerHTML;
  //   document.getElementById("chng5").innerHTML=text.replaceAll(/W3Schools/g,"Microsoft");
  // }


 function upperCase(){
  let text=document.getElementById("upCase").innerHTML;
  document.getElementById("upCase").innerHTML=text.toUpperCase();
 }
 function lowerCase(){
  let text=document.getElementById("lowCase").innerHTML;
  document.getElementById("lowCase").innerHTML=text.toLowerCase();
 }
function concat(){
  let text1="Hello";
  let text2="world";
  document.getElementById("cont").innerHTML=text1.concat(" ",text2);
}

function trim(){
  let x="            Hellow world";
  document.getElementById("trm").innerHTML=x.trim();

}

function startSTrim(){
  let x="            Hellow world";
  document.getElementById("trm2").innerHTML=x.trimStart();

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





  