let exp = "";

function display(){
    document.getElementById('input').value = exp;
}

function number(val){
    exp += val;
    display()
}

function allclear(){
    exp='';
    display()
}

function equal(){
    exp = eval(exp);
    display()
}

function pow(){
    exp = Math.pow(exp, 2)
    display()
}

function sqrt(){
    exp = Math.sqrt(exp, 2)
    display()
}

function log(){
    exp = Math.log(exp)
    display()
}

function e(){
    exp = '2.71';
    display()
}

function pi(){
    exp = '3.14';    
    display()
}

function backspace(){
    exp = exp.substring(0, exp.length-1);
    display()
}

function sin(){
    exp = Math.sin()
    display()
}

function cos(){
    exp = Math.cos()
    display()
}

function tan(){
    exp = Math.tan()
    display()
}
