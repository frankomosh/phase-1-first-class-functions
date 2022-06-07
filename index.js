function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    return function knownFunction(){
        console.log("known function")
    };
}function returnsAnAnonymousFunction(){
    return ()=>console.log("Function works in anonymous ways!")
}