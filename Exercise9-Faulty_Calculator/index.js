//This is a faulty calculator

function faultyCalc(a,b,c) {
    let rand = Math.random();
    if(rand<=0.1){
        if(c==="+"){
            return a-b;
        }
        if(c==="-"){
            return a/b;
        }
        if(c==="*"){
            return a+b;
        }
        if(c==="/"){
            return a**b;
        }
    }
    else{
        if(c==="+"){
            return a+b;
        }
        if(c==="-"){
            return a-b;
        }
        if(c==="*"){
            return a*b;
        }
        if(c==="/"){
            return a/b;
        }
    }
}

console.log(faultyCalc(10,2,'/'));