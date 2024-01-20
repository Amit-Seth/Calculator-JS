function myAns(form){
    let x = form.inputBox_1.value;
    let y = form.inputBox_2.value;
    let q = form.optr.value;

    let count = addition(x,q,y)
    console.log(count);
    display(count);
}
function addition(a,w,b){
    if(w == "+"){
        return (parseInt(a) + parseInt(b)); // parsing is necessary because system considering 'a' and 'b' as string 
    }
    else if(w == "-"){
        return (a-b);
    }
    else if(w == "*"){
        return (a*b);
    }
    else if(w == "/"){
        return (a/b);
    }
    else if(w == "%"){
        return (a%b);
    }
}
function display(myNumber){ //Here we using jQuery to understand how we get element with less syntax, and comment out 'document.' feature.
    /*document.getElementById("dis").value = myNumber;*/
    $("#dis").val(myNumber);
}
function disappear(){ //This will make our answer box blank whenever we try to change any of the values which can be numbers and operator in this case. 
    /*document.getElementById("dis").value = "";*/
    $("#dis").val("");

}





