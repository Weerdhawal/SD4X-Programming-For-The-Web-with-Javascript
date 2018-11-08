/*
 * Implement all your JavaScript in this file!
 */
//Commented  version works but changed due to Autograder errors 
/*var mapper = {
  "addButton" : (a, b) => a + b,
	"subtractButton" : (a, b) => a - b,
	"multiplyButton" : (a, b) => a * b,
	"divideButton" : (a, b) => a / b


  function calcc(arr){
    return mapper[arr[1]](arr[0],arr[2]);
  }
*/




function calcc(arr){
    if(arr[1]=="addButton") {
       return arr[0]+arr[2];
     }else if(arr[1]=="subtractButton") {
      return arr[0]-arr[2];
    }else if(arr[1]=="multiplyButton") {
       return arr[0]*arr[2];
     }else if(arr[1]=="divideButton") {
       return arr[0]/arr[2];
  }
}


var arr = []; //variable to store entered values
var display = ''; // variable to display current elements
var now; // values for current elements


$(function() {
        $("#button1,#button2,#button3,#button4,#button5,#button6,#button7,#button8,#button9,#button0").click(function(){
          if(arr.length==1 || arr.length==3){
            display='';
            arr=[];
          }

          display+=$(this).val();
          $("#display").val(Number(display));
          now = Number(display);
        });


        $("#clearButton").click(function(){
          display='';
          arr=[];
          now=NaN;
          $("#display").val(display);
        });


        $("#addButton,#subtractButton,#multiplyButton,#divideButton").click(function(){
          if(arr.length==1){
            arr.push(this.id);
          }else if (arr.length==2){
            if(isNaN(now)){
              arr[1]=this.id;
            }else{
              arr.push(Number(display));
              display=calcc(arr);
              $("#display").val(display);
              arr = [display,this.id];
            }
          }else if(arr.length==3){
            arr = [];
 			      arr.push(Number(display));
 			      arr.push(this.id);
          }
          else{
            arr.push(Number(display));
            arr.push(this.id);
            display='';
          }
          now= NaN;
          display='';
        });


        $("#equalsButton").click(function(){
          if(arr.length==0){
            if(now){
              arr=[now];
            }
          }
          else if (arr.length == 2) {
              if (!isNaN(now)) {
                  arr.push(Number(display));
                  console.log(arr);
                  display = calcc(arr);
                  $("#display").val(display);
                  }
                }
           else if (arr.length == 3) {
                  arr[0] = display;
                  display = calcc(arr);
                  $("#display").val(display);
                }
              });
});
