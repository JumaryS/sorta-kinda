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

const trueIsFirst = function (truthy, wrong) {
  if (truthy < wrong) {
    return 1;
  } else if (truthy > wrong) {
    return -1;
  } else {
    return 0;
  }
};

const firstNameIsFirstAlphabetically = function (name1, name2) {
  if (name1 > name2) {
    return 1;
  } else if (name1 < name2) {
    return -1;
  } else {
    return 0;
  }
};

const firstLastNameIsFirstAlphabetically = function (lastName, secondLastName) {
  if (lastName > secondLastName) {
    return 1;
  } else if (lastName < secondLastName) {
    return -1;
  } else {
    return 0;
  }
};

/************************
// ITERATION FUNCTIONS
 ************************/
const truesFirst = function (num) {
  let newTrue = num.slice();
  return newTrue.sort(trueIsFirst);
};

const sortByNumberAscending = function (nums) {
  let newNums = nums.slice();
  return newNums.sort(firstNumberIsLess);
};

const sortByNumberDescending = function (decending) {
  let num = decending.slice();
  return num.sort();
};



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
