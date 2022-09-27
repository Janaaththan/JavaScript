/* /* /* for (i = first; i <localStorage; i++) {
    if (a[i] is target) 
        return i;


function linearSearch (arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }   return null;


if (size == 0)
    found = false;
else {
    middle = index of (apprximate) midpoint of array segment;
    if (target == a[middle])
        target has been found;
    else if (target < a[middle]) 
        search for target in area before midpoint
    else {
        search for target in the area after midpoint;
    }


array.unshift(el1, el2) adds and moves the elements to the front of the array
array.shift(el) removes the array
array.push(el) adds element to the end of the array 
array.splice(splice Number, optional(removing number), add Element, ...) */

function insertion_Sort(arr) {
    for (var i = 1; i = arr.length; i++) {
        if (arr[i] < arr[0]) {
            arr.unshift(arr.splice(1,1) [0]);
        }
        else if (arr[i] > arr[i-1]) {
            continue;
        }
        else {
            for (var j = 1; j < i; j++) {
                if (arr[i] > arr[j-1] && arr[i] < arr[j]) {
                    arr.splice(j, 0, arr.splice(i,1) [0])
                }
            }
        }
    }
    return arr;
}