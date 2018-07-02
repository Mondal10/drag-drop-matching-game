var arr1 = [];
var arr2 = [];
var count=0;

// Drag
function drag(e){
    e.dataTransfer.setData("image", e.target.id);
    // console.log(e.target.name);
    arr1.push(e.target.name);
    // console.log(arr1);
    check(arr1,arr2,count);
}

function check(arr1,arr2,count){
	// console.log(arr1);
	// console.log(arr2);
	
	// console.log(count);
	// var arr3 = arr1 + arr2;
	// console.log(arr3);

	if(count==4){
 	if(arr1[0] == arr2[0] && arr1[1] == arr2[1] && arr1[2] == arr2[2] && arr1[3] == arr2[3] ){
 		console.log("win");
 		alert("WINNER");
 	}
 	else{
 		console.log("loose");
 		alert("Sorry, please try again");
 	}
 }
 	// if(arr1===arr2){
 	// 	console.log("test");
 	// }
 	// else{
 	// 	console.log("testno");
 	// }
}

// Drop
function drop(e){
	e.preventDefault();
    var data = e.dataTransfer.getData("image");
    e.target.appendChild(document.getElementById(data));	
	// console.log(e.target.id);
    arr2.push(e.target.id);
    // console.log(arr2);
    // return arr2;
   
	count ++;
    check(arr1,arr2,count);
    
}

// Dragover
function allowDrop(e) {
    e.preventDefault();

}

