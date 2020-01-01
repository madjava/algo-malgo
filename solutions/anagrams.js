function isAnagram(str1, str2){
  if(str1.length !== str2.length){
      return false;
  }
  const lookUp = {};

  for(let char of str1) lookUp[char] = ++lookUp[char] || 1;

  for(let char of str2) {
    if(!lookUp[char]) return false;
    lookUp[char] -= 1;
  }
  
  return true;
}

module.exports = isAnagram;