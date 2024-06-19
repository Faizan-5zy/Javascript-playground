let  arr = ['a','f','c','d','a','e','f','c']

let removeDuplicate = () =>{
    return arr.filter(function(item,pos){
        return arr.indexOf(item)==pos
    })
}

console.log(removeDuplicate())
