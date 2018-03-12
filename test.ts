import * as restify from 'restify';

let uaddress :any='NewYork';
console.log(uaddress);
function f(){

var uname:string ='Mahesh';
console.log(uname);
    
}
function g(shouldInitialize: boolean) { 
    if (shouldInitialize){
        var x=10;
    }
    return x;
    //console.log(x);
}
function sumM(matrix: number[][])
{
    var sum=0;
    for (var i=0; i<matrix.length; i++){
        var currentRow =matrix[i];
        for (var i=0; i<currentRow.length; i++){
            sum += currentRow[i];
            console.log(sum)       
         }
    }
    return sum;}
f();
sumM([]);
g(true);
