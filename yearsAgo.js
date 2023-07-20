export default function yearsAgo(year){
    // var getYear = new Date(year);
     var newYear = new Date();
     return newYear.getFullYear() - year;
   }