function sumIntervals(intervals){
    intervals.forEach(function(elem, index){
        elem.forEach(function(element){
            console.log(element);
        });
    });
}

var test1 = [[1,5]];
var test2 = [[1,5],[6,10]]; // 8
var test3 = [[1,4], [7,10], [3,5]]; // 7
var test4 = [[1,2], [6,10], [11,15]]; // 9
var test5 = [[1,4], [7,10], [3,5]]; // 7

console.log(sumIntervals(test1));
console.log(sumIntervals(test2));
console.log(sumIntervals(test3));
console.log(sumIntervals(test4));
console.log(sumIntervals(test5));
