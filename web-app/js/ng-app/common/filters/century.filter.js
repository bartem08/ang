angular.module('ang').filter('century', CenturyFilter);

function CenturyFilter() {

   return function (year) {
       var centuryIndex = Math.ceil(year / 100) - 1;

       return [
           'I' , 'II' , 'III' , 'IV' , 'V' , 'VI' , 'VII' , 'VIII' , 'IX' , 'X',
           'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'
       ][centuryIndex];
   }
}