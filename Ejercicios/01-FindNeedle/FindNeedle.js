function FindNeedle(haystack, needle) {
  // Your code here:
 /*OPCION 1
  for (let i = 0; i <haystack.length; i++){
    if (haystack.slice(i, i + needle.length) === needle) return i;
  }
  return -1;*/

  //OPCION  2
  for (let i = 0; i < haystack.length; i++) {
    if( haystack[i] === needle[0]){
      let aux = haystack.slice(i, i + needle.length);
      if ( aux === needle) return i;
    }
  }
  return -1;
  //OPCION TRAMPA
  //return haystack.search(needle)
}


module.exports = FindNeedle;
