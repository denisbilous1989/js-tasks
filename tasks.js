// 1
const difference = (arr) => {
  if (arr.length <= 1) {
    return 0;
  }
  return Math.max(...arr) - Math.min(...arr);
}

console.log(difference([16,67,-34,78,-1,0,5,123,-879]));

// 2
const longerThatNumber = (str, number) => {
  let removeCharacters = str = str.replace(/[^a-zа-яё0-9\s]/gi, '');
  let arr = removeCharacters.split(' ');

  let sortArr = arr.filter(el => {
    return el.length > number
  })
  return sortArr;
}

console.log(longerThatNumber("Hello. my name is ChatBot. I can help you to learn javascript", 5));

// 3
const endsWith = (str, substr) => str.endsWith(substr);

console.log('endsWith', endsWith('abc', 'b'));

// 4
const sumPairs = arr => {
  let sum =[];
  for(i = 0; i < arr.length -1; i++) {
    sum.push((arr[i] + arr[i + 1]) / 2)
  }
  return sum;
}

console.log('sumPairs', sumPairs([1, 3, 5, 1, -10]));

// 5
const findVowels = str => {
  let result = 0;
  let lowerCaseStr = str.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for(let i = 0; i <= lowerCaseStr.length; i++) {
    if(vowels.includes(lowerCaseStr[i])){
      result++
    }
  }
  return result;
}

console.log(findVowels('hello'), );

// 5.2
const removeABC = (str, letters) => {

  if(!str.includes(letters[0] || letters[1] || letters[2])) return null;

  let res = str.split('');
  for(let i = 0; i <= res.length; i++){
    if(letters.includes(res[i])) {
      const index = res.indexOf(res[i]);
      res.splice(index, 1);
    }
  }
  return res.join('');
}


console.log(removeABC("This might be a bit hard", ['a', 'b', 'c']), 'removeABC');


// 6
const unique = (arr1, arr2) => {
  let concatArr = [...arr1, ...arr2];
  return concatArr.filter((el, index) => concatArr.indexOf(el) === index)
}

console.log(unique([1, 2, 3], [100, 2, 1, 10]));


// 7
const swap = obj => {
  const res = {};
  Object.keys(obj).forEach(el => {
    let key = obj[el];
    res[key] = el;
  });
  return res;
};

console.log(swap({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

// 8 
const calculateDifference = (things, insurance) => {
  if(!Object.keys(things).length) {
    return 'emty object'
  }
  let priceArr = Object.values(things);
  const sum = priceArr.reduce((acc, el) => acc + el, 0);
  if (sum < insurance) {
    return 'sum of items less for insurance.'
  }

  return sum - insurance;
}


console.log(calculateDifference({ skate: 10, painting: 20 }, 19));

// 9 
const doesBrickFit = (a,b,c,w,h) => {
  if(((w>=a) && (h>=b)) || (w>=b) && (h>=a)) {
    return true;
  } else if (((w>=a) && (h>=c)) || ((w>=c) && (h>=a))) {
    return true;
  } else if (((w>=c) && (h>=b)) || ((w>=b) && (h>=c))) {
    return true;
  } else {
    return false;
  }
}

console.log(doesBrickFit(1, 1, 1, 1, 1));
console.log(doesBrickFit(1, 2, 1, 1, 1));
console.log(doesBrickFit(10, 2, 2, 1, 1));

// 10
const fileName = filePath => {
  let res = '';
  let lastSlash = filePath.lastIndexOf('\\');
  res = filePath.slice(lastSlash + 1).split('.')[0];
  return res;
}

console.log(fileName('c:\\WebServershome\\testsite\\www\\myfile.txt'));

// 11
const cyclicShift = (str1, str2) => {
  if (str1.length !== str2.length) return false
  for (let i = 0 ; i < str1.length ; i++) {
      if (str1 === str2) return true
      str1 = str1.slice(1) + str1.slice(0, 1)
  }
  return false
}

console.log(cyclicShift('abc', 'bca'));
console.log(cyclicShift('abc', 'bcd'));

// 12
const SortedArrays = arr => {

  const sortedArr = [...arr].sort((a, b) => a - b)
  const minArr = [];
  const maxArr = [];
  const spreader = main => {
      let diff = Infinity;
      const closest = { min: null, max: null }
      for (let i = 0 ; i < main.length - 1 ; i++) {
          let temp = Math.abs(main[i+1] - main[i])
          if (diff > temp) {
              diff = temp
              closest.min = main[i];
              closest.max = main[i + 1];
          }
      }
      return closest
  }
  while (sortedArr.length) {
      const closest = spreader(sortedArr);
      minArr.push(closest.min)
      maxArr.push(closest.max)
      sortedArr.splice(sortedArr.indexOf(closest.max), 1);
      sortedArr.splice(sortedArr.indexOf(closest.min), 1);
  }
  return minArr, maxArr
}

console.log(SortedArrays([5, 567, 2, -876, 7, 13, 7, 90, -3, 6, 0, 6, 24, 94556]));

// 13
const changeStr = str => {
  let lowerCaseStr = str.toLowerCase();
  let words = lowerCaseStr.split(' ');
  let res ='';

  for(let i = 0; i < words.length; i++) {

    if (words[i].startsWith('www')) {
      words[i] = '[посилання заборонено]';
    } else if (words[i].indexOf('@') !== -1) {
      words[i] = '[контакти заборонені]';
    } 
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);

    if (/^[0-9]+$/.test(words[i]) === true && words[i].length > 3) {

      res = words.filter(word => word !== words[i]).join(' ')

        if(res.length > str.length) {
          setTimeout(() => alert('Do you need help?'), 5000);
        }
    }
  }
  return res
}

// console.log(changeStr('qweqTYeqwr ksdr www.csrkm cg f gdm glt st ys@yy 111 4444'));

// 14
const testBrackets = str => {
  let chars = str.split('');
  let stack = [];
  let open = '(';
  let close = ')';

   for (let i = 0; i < chars.length; i++) {

     let openIndex = open.indexOf(chars[i]);
     if (openIndex !== -1) {
      stack.push(openIndex);
     }

     let closeIndex = close.indexOf(chars[i]);

      if (closeIndex !== -1) {
        openIndex = stack.pop();
        if (closeIndex !== openIndex) return false;
      }
   }

   if (stack.length !== 0) return false;

  return true;
}

console.log(testBrackets('(1(2)))'));

// 15
const passwordGenerator = () => {

  const gererator = number => Math.floor(Math.random() * number)
  const values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'

  const length = Math.floor(Math.random() * 14 + 6)
  const password = new Array(length)
  const underscore = gererator(length);
  let firstUppercaseLetter = gererator(length);
  while ( firstUppercaseLetter === underscore ) {
      firstUppercaseLetter = gererator(length);
  }
  let secondUppercaseLetter = gererator(length);

  while ( secondUppercaseLetter === firstUppercaseLetter|| secondUppercaseLetter === underscore) {
      secondUppercaseLetter = gererator(length);
  }

  password[underscore] = '_';
  let counter = 0;
  for (let i = 0 ; i < length ; i++) {
      if (password[i] === '_') continue
      if (i === firstUppercaseLetter || i === secondUppercaseLetter) {
          password[i] = values[gererator(26)]
          continue
      }
      if (counter === 5) {
          password[i] = values[gererator(52)]
          continue
      }
      password[i] = values[gererator(values.length)]
      if (!isNaN(password[i])) {
          counter++
          if (!isNaN(password[i+1]) || !isNaN(password[i-1])) password[i] = values[gererator(52)]
      }
  }
  return password.join('')
}

console.log(passwordGenerator());

// 16
const rearRangeArray = arr => {
  const sortArray = [...arr].sort((a,b) => a-b);
  const leftArr = sortArray.filter((item, index) => index % 2 === 0);
  const rightArr = sortArray.filter((item, index) => index % 2 !== 0).reverse();

  return [...leftArr, ...rightArr]

}

console.log(rearRangeArray([1,5,7,2,6,4,3]));

// 17
const sortSymbolsInString1 = str => {
  
  const strObject = str.toLowerCase().split('').reduce((acum, item) => {
      acum[item.charCodeAt(0)] ? acum[item.charCodeAt(0)]++ : acum[item.charCodeAt(0)] = 1
      return acum
  }, {})
  const res = []
  for (const key in strObject) {
      res.push(new Array(strObject[key]).fill(String.fromCharCode(key)))
  }
  return res.sort((a, b) => b.length - a.length).reduce((acum, item) => {
      acum += item.join('')
      return acum
  }, '')
}

console.log(sortSymbolsInString1('my name is is myname'));

// 18
const longestString = (str1, str2) => {

  const wordsArr = str2.split(' ');
  let res = ''
  wordsArr.forEach(el => {
      for (let i = 0 ; i <= el.length ; i++) {
          for (let j = i + 1 ; j <= el.length ; j++) {
              const commonString = el.slice(i, j)
              if (str1.includes(commonString) && commonString.length > res.length) {
                  res = commonString;
              }
          } 
      }
  })
  return res
}

console.log(longestString("My name is de john! Hello!", "john blade !"));

// 19
const caesarСipher = (str, shift, lang) => {
  let ru = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
  let eng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let result = '';

  if(lang = 'ENG') {
    for (let i of str) {
      let place = eng.indexOf(i);
      let newPplace = place + shift;
      if (eng.includes(i)) {
        result += eng[newPplace]
      } else {
        result += 1
      }
    }
    return result;
  } else if (lang = 'RU') {
    for (let i of msg) {
      let place = ru.indexOf(i);
      let newPlace = place + shift;
      console.log(new_place);
      if (i in ru) {
        result += ru[newPlace]
      } else {
        result += 1;
      }
    }
    return result;
  }
}
console.log(caesarСipher('frau', 3, 'ENG'));

// 20
const anagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const sortStr1 = str1.split('').sort().join('');
  const sortStr2 = str2.split('').sort().join('');

  return sortStr1 === sortStr2
}

console.log(anagram("Hello world!", "Hello world!"));

// 21
const university = {
  students: [],
  Generator: function() {
      return "_id" + Math.random().toString(16).slice(2)
  },
  findByID: function(id) {
      for(let i = 0 ; i < this.students.length ; i++) {
          if (this.students[i].id === id) 
              return { index: i, student: this.students[i]}
      }
  },
  createStudent: function(name, cource, faculty) {
      const id = this.Generator()
      const student = {
          id: id,
          name: name,
          cource: cource,
          faculty: faculty
      }
      this.students.push(student)
      console.log(`CREATE: student: ${name}, id: ${id}`)
      return this
  },
  deleteStudent: function(id) {
      const student = this.findByID(id)
      this.students.splice(student.index, 1)
      console.log(`DELETE: student: ${student.student.name}, id: ${id}`)
      return this
  },
  getStudentsByCource: function(cource) {
      return this.students.reduce((acum, item) => {
          if (item.cource === cource) acum.push(item)
          return acum
      }, [])
  },
  getStudentsByFaculty: function(faculty) {
      return this.students.reduce((acum, item) => {
          if (item.faculty === faculty) acum.push(item)
          return acum
      }, [])
  },
  getSingleStudent: function(id) {
      return this.findByID(id).student
  },
  getAllStudents: function() {
      return [...this.students]
  }  
}

university.createStudent('denis', '2', 'ks');
university.createStudent('oleksiy', '1', 'kp');
university.createStudent('katay', '4', 'al');
university.createStudent('anay', '5', 'ak');
console.log(university);



// 22
const textAnalisis = str => {
  const lowerStr = str.toLowerCase();
  let statistic = {
    wordsCount: 0,
    sentencesCount: 0,
    symbolCount: 0,
    charsCount: 0,
    uniqueWords: {},
    word: '',
  }

  let curentWord = '';
  let words = lowerStr.split(' ');
  statistic.wordsCount = words.length;

  for (let i = 0; i < words.length; i++) {
    curentWord = words[i];

    if (statistic.uniqueWords[curentWord]) {
      statistic.uniqueWords[curentWord] ++;
    } else {
      statistic.uniqueWords[curentWord] = 1;
    }
  }

  let maxCount = 0;
  let frequentWords= [];

  for (let word in statistic.uniqueWords) {
    let count = statistic.uniqueWords[word];

    if (count > maxCount) {
      maxCount = count;
      frequentWords = [word]
    } else if (count === maxCount) {
      frequentWords.push(word)
    }
  }

  statistic.word = frequentWords[0];

  const chars = [' ', '.', ',', '?', '!', '-'];
  
  for (let i = 0; i < lowerStr.length; i++) {
    if(lowerStr[i+1] === '.' || lowerStr[i+1] === '!' || lowerStr[i+1] === '?') {
       statistic.sentencesCount ++
    } else if (chars.includes(lowerStr[i])) {
      statistic.charsCount ++
    } else if (!chars.includes(lowerStr[i])) {
      statistic.symbolCount ++
    }
  }

  return statistic;
}

console.log(textAnalisis('Hello my dear friends. Hello world. Hello to you too my dear John Doe!'));

