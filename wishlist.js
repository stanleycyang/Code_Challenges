/*var wishlist = [*/
    //{name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    //{name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    //{name: "Card Game", size: "small", clatters: "no", weight: "light"}
//];

//var presents = [
        //{size: "medium", clatters: "a bit", weight: "medium"},
        //{size: "small", clatters: "yes", weight: "light"}
/*];*/

var wishlist = [
    {"name":"socks","size":"small","clatters":"no","weight":"light"},
    {"name":"card game","size":"small","clatters":"no","weight":"light"}
    ,{"name":"bobble hat","size":"small","clatters":"no","weight":"light"}
]; 

var presents = [
    {"size":"small","clatters":"no","weight":"light"},
    {"size":"small","clatters":"no","weight":"light"}
];

//- Expected: ["bobble hat","card game","socks"], instead got: ["bobble hat","bobble hat","card game","card game","socks","socks"]

function guessGifts(wishlist, presents){
    var matched = [];
    // Loop through wishlist
    wishlist.forEach(function(listItem, listIndex){
        // Loop through presents
        presents.forEach(function(present, presentIndex){
            // Loop through properties of wishlist
            if(listItem['size'] === present['size'] && listItem['clatters'] === present['clatters'] && listItem['weight'] === present['weight']){
                if(matched.indexOf(listItem['name']) === -1){
                    matched.push(listItem['name']);
                }
            }
        });
    });

    return matched;
}

console.log(guessGifts(wishlist, presents));

/*function guessGifts(wishlist, presents) {*/
  //return wishlist.filter(function(x){
    //return presents.some(function(y){
      //return x.size == y.size && x.clatters == y.clatters && x.weight == y.weight;
    //});
  //}).map(function(x){ return x.name; });
/*}*/
