// 0 is empty
// 1 is X
// 2 is O
// return -1 is board is not solved
// 1 if X won
// 2 if O won
// 0 if cat's game

/*
     *     273                 84
     *        \               /
     *          1 |   2 |   4  = 7
     *       -----+-----+-----
     *          8 |  16 |  32  = 56
     *       -----+-----+-----
     *         64 | 128 | 256  = 448
     *       =================
     *         73   146   292
     *
     */


var board = [
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0]
];

//function isSolved(board){
    //var results,
        //array = [];

    //board.forEach(function(row, rowIndex){
        //array = array.concat(row);
    //});
    

    //return results;
//}


/*console.log(isSolved(board));*/


console.log(solveBoard(board));

function isSolved(board) {
   board = board.join('-').replace(/,/g,'');
   if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
   if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
   if(/0/.test(board)) return -1;
   return 0;
}
