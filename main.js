/******************
 * YOUR CODE HERE *
 ******************/
const firstNumberIsLess = function (num1, num2) {
  if (num1 < num2) {
    return -1;
  } else if (num1 > num2) {
    return 1;
  } else {
    return 0;
  }
};
const secondNumberIsLess = function (num1, num2) {
  if (num2 < num1) {
    return -1;
  } else if (num2 > num1) {
    return 1;
  } else {
    return 0;
  }
};

const trueIsFirst = function (truth, wrong) {
  if (truth < wrong) {
    return 1;
  } else if (truth > wrong) {
    return -1;
  } else {
    return 0;
  };
} 

const firstNameIsFirstAlphabetically = function (name1, name2) {
  
  if (name1 > name2) {
    return  1;
  } else if (name1 < name2) {
    return -1;
  } else {
    return 0;
  }
};

const firstLastNameIsFirstAlphabetically = function (name1, name2) {
  const lastName1 = name1.slice(name1.indexOf(' ')+1)
  const secondLastName = name2.slice(name2.indexOf(' ')+1)
  if (lastName1 > secondLastName) {
    return 1;
  } else if (lastName1 < secondLastName) {
    return -1;
  } else {
    return 0;
  }
};

/************************
// ITERATION FUNCTIONS
 ************************/
const truesFirst = function (num) {
  const newArray = num.slice();
  return newArray.sort(trueIsFirst);
};

const sortByNumberAscending = function (nums) {
  const  newArray = nums.slice(0);
  return newArray.sort(firstNameIsFirstAlphabetically);
};

const sortByNumberDescending = function (num1) {
  const num = num1.slice(0);
  return num.sort(secondNumberIsLess);
};

const sortByNameAscending = function (name){
  const sortName = name.slice(0)
  return sortName.sort(firstNameIsFirstAlphabetically)
}

const sortByLastNameAscending = function (name){
  const sortName = name.slice(0)
  return sortName.sort(firstLastNameIsFirstAlphabetically)
}
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof firstNumberIsLess === 'undefined') {
  firstNumberIsLess = undefined;
}

if (typeof secondNumberIsLess === 'undefined') {
  secondNumberIsLess = undefined;
}

if (typeof firstNameIsFirstAlphabetically === 'undefined') {
  firstNameIsFirstAlphabetically = undefined;
}

if (typeof firstLastNameIsFirstAlphabetically === 'undefined') {
  firstLastNameIsFirstAlphabetically = undefined;
}

if (typeof sortByNumberAscending === 'undefined') {
  sortByNumberAscending = undefined;
}

if (typeof sortByNumberDescending === 'undefined') {
  sortByNumberDescending = undefined;
}

if (typeof sortByNameAscending === 'undefined') {
  sortByNameAscending = undefined;
}

if (typeof sortByLastNameAscending === 'undefined') {
  sortByLastNameAscending = undefined;
}

if (typeof trueIsFirst === 'undefined') {
  trueIsFirst = undefined;
}

if (typeof truesFirst === 'undefined') {
  truesFirst = undefined;
}


module.exports = {
  firstNumberIsLess,
  secondNumberIsLess,
  firstNameIsFirstAlphabetically,
  firstLastNameIsFirstAlphabetically,
  trueIsFirst,
  truesFirst,
  sortByNumberAscending,
  sortByNumberDescending,
  sortByNameAscending,
  sortByLastNameAscending,
  truesFirst,
}
