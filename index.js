function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}

// This fuction will allow us to pass any array and invoke the callback for each element
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}
