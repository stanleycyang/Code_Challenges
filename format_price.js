// Format plain number to display as price
// Use standard comma for every 3 numbers and dot to separate cents
// 2 decimal points

Number.prototype.formatMoney = function(c, d, t){
var n = this,
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + (n - i).toFixed(c).slice(2) : "");
 };



function numberToPrice(number){
  if(typeof number !== 'number') return 'NaN';
  return number.formatMoney(2);
}

console.log(numberToPrice(321312312.312312));

// Number.prototype.formatMoney = function(places){
// 	var number = this,
// 		decimalPlaces = isNaN(decimalPlaces = Math.abs(places)) ? 2 : decimalPlaces,
// 		period = ".",
// 		comma = ",",
// 		sign = number < 0 ? "-" : "",
// 		displayNumber = parseInt(Math.abs(number || 0).toFixed(decimalPlaces)),
// 		length = displayNumber.length > 3 ? displayNumber % 3 : 0;

// 		return sign + (length ? displayNumber.substr(0, length) + comma : "") + displayNumber.substr(length).replace(/(\d{3})(?=\d)/g, "$1" + comma);
// };