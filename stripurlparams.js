/*function stripUrlParams(url, paramsToStrip){*/
    //if(paramsToStrip){
        //paramsToStrip.forEach(function(e){
            //var re = new RegExp("\\&?" + e + "\\=\\w+");
            //url  = url.replace(re, '');
        //});
    //}

    //var params = (url.indexOf('?')!== -1)? url.substring(url.indexOf('?') + 1).split('&') : '';
    //var fixed = "";
    //if(params !== ''){
        //params.forEach(function(e, index){
            //var re = new RegExp(e.substring(0, e.indexOf('=')) + '\\=\\w+', 'g');
            //var matched = url.match(re);
            //for(var i = 1; i < matched.length; i++){
                //var removeExtras = new RegExp("\\&?" + matched[i]);
                //url = url.replace(removeExtras, '');
            //}
        //});
    //}
    //return url;
//}

//console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2'));
//console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']));
//console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2&c=4&d=9', ['b', 'c', 'd']));

function stripUrlParams(url, paramsToStrip){
  return url.replace(/&?([^?=]+)=.+?/g, function(m, p1, qPos) {
    return url.indexOf(p1 + '=') < qPos || (paramsToStrip||[]).indexOf(p1) > -1 ? "": m;
   });
}
