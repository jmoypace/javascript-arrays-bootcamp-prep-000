<<<<<<< HEAD
var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element){
  array=[element,...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element){
  array=[...array,element]
  return array
}
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}
function accessElementInArray(array,index){
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  var newarr =array.slice(1)
  return newarr
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
function removeElementFromEndOfArray(array){
var newarr =array.slice(0,array.length-1)
return newarr
}
=======
var cholateBars=[]
function addElementToBeginningOfArray(){}
function destructivelyAddElementToBeginningOfArray(){}
>>>>>>> b8f2af4daa279b3c5420fdb7c7e996dc71c94abb
