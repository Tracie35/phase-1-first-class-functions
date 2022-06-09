function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    return function fn(){
        console.log("named function")
    }
}

function returnsAnAnonymousFunction(){
    return ()=> 
    console.log("yes")
    

}