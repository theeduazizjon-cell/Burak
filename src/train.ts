/* 

TASK Z

Masalaning sharti: 
Shunday function yozing. Bu function sonlardan iborat array
qabul qilsin. Function'ning vazifasi array tarkibidagi juft
sonlarni topib ularni yig'disini qaytarsin.

MASALAN:
sumEvens([1, 2, 3]); return 2;
sumEvens([1, 2, 3, 2]); return 4;

Yuqoridagi misolda, bizning funktsiya
berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan
sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda.

*/ 

function sumEvens(numbers: number[]): number {
  return numbers
    .filter((num) => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0);
}

console.log(sumEvens([1, 2, 3]));
console.log(sumEvens([1, 2, 3, 2]));
/*

TASK Y

Masalaning sharti: 

Shunday function yozing, uni 2'ta array parametri bo'lsin.
Bu function ikkala arrayda ham ishtirok etgan bir xil
qiymatlarni yagona arrayga joylab qaytarsin.

MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

Yuqoridagi misolda, argument sifatida berilayotgan array'larda
o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga
joylab return qilmoqda

*/ 
/*
function findIntersection(arr1: number[], arr2: number[]): number[] {
  const set2 = new Set(arr2);
  const result: number[] = [];

  for (const num of arr1) {
    if (set2.has(num) && !result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}

console.log(findIntersection([1, 2, 3], [3, 2, 0]));


/* 
TASK X

Masalaning sharti: 
Shunday function yozing, uni object va string parametrlari bo'lsin.
Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
necha marotaba takrorlanganlini sanab qaytarsin.

Eslatma => Nested object'lar ham sanalsin

MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
Funktsiya, shu ikkinchi argument 'model', birinchi argument object
tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda



function countOccurrences(obj: Record<string, any>, targetKey: string): number {
  let count = 0;

  for (const key in obj) {
    if (key === targetKey) {
      count++;
    }

    if (
      typeof obj[key] === "object" &&
      obj[key] !== null
    ) {
      count += countOccurrences(obj[key], targetKey);
    }
  }

  return count;
}

// Example
console.log(
  countOccurrences(
    {
      model: "Bugatti",
      steer: {
        model: "HANKOOK",
        size: 30,
      },
    },
    "model"
  )
);

/*
TASK W

Masalaning shart: 
Shunday function yozing, u o'ziga parametr sifatida
yagona array va number qabul qilsin. Siz tuzgan function
arrayni numberda berilgan uzunlikda kesib bo'laklarga
ajratgan holatida qaytarsin.


MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti
*


function chunkArray(array: number[], size: number): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

/* 

TASK V

Masalaning sharti: 
Shunday function yozing, uni string parametri bo'lsin.
Va bu function stringdagi har bir harfni o'zi bilan
necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
  
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

Yuqoridagi misolda, 'hello' so'zi tarkibida
qatnashgan harflar necha marotaba takrorlangini bilan
object sifatida qaytarilmoqda.

function countChars(str: string): Record<string, number> {
  const result: Record<string, number> = {};

  for (const char of str) {
    result[char] = (result[char] || 0) + 1;
  }

  return result;
}

console.log(countChars("hello"));
// { h: 1, e: 1, l: 2, o: 1 }

/* 

U - TASK 

Masalaning sharti: 
Shunday function tuzing, uni number parametri bo'lsin.
Va bu function berilgan parametrgacha, 0'dan boshlab
oraliqda nechta toq sonlar borligini aniqlab return qilsi.

MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

Masalaning yechimi: 

*

function sumOdds(num: number): number {
  let count = 0;

  for (let i = 0; i < num; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }

  return count;
}

console.log(sumOdds(9));  // 4
console.log(sumOdds(11)); // 5


/* 

T - TASK 

Masalaning shart: Shunday function tuzing, 
u sonlardan tashkil topgan 2'ta array qabul qilsin.
Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];



function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  const merged = [...arr1, ...arr2];
  return merged.sort((a, b) => a - b);
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// S - TASK 

/* 
Masalaning sharti: 
Shunday function yozing, u numberlardan tashkil topgan
 list qabul qilsin va osha numberlar orasidagi tushib qolgan
  sonni topib uni return qilsin 
  
  MASALAN: missing_number([3, 0, 1]) 
  return 2



function missingNumber(numbers: number[]): number {
  const n = numbers.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = numbers.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

console.log(missingNumber([3, 0, 1])); // 2
*/ 


// R-TASK

/* 
Masalaning sharti: 
Shunday function yozing, u string parametrga ega bolsin. 
String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.

MASALAN: calculate("1+3") return 4;

Masalaning yechimi :
/*
function calculate(str: string): number {
  return str
    .split("+")
    .map(Number)
    .reduce((sum, num) => sum + num, 0);
}

console.log(calculate("1+3")); // 4
console.log(calculate("1+2")); // 3
console.log(calculate("5+10")); // 15

// TASK Q:

/*
Masalaning sharti:

Shunday function yozing, u 2 ta parametrga ega bo'lib
birinchisi object, ikkinchisi string bo'lsin.
Agar qabul qilinayotgan ikkinchi string, objectning
biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.


MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda
*/ 

/*
Masalaning yechimi: 

function hasProperty(obj: object, prop: string): boolean {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));  // true
console.log(hasProperty({ name: "BMW", model: "M3" }, "color"));  // false



/*
Project Standards: 
 - Logging standards
 - Naming standards 
    function, method, variable => CAMEL 
    class => PASCAL 
    fodler => KEBAB 
    css => SNAKE 
 - Error handling standards

*/


/* 
Request 
Traditional API => from POST 
Rest API 
GraphQL API

*/

/*
Traditional Frontend Development => BSSR -> BackEnd Server Side Rendering | EJS 
Modern FrontEnd Development => SPA -> Single Page Application | React library 
*/

/* 
Cookies: 
 request join 
 self destroy

*/

/* 
Validations: 
-FrontEnd validation 
-
-BackEnd validation 
-Database validation

*/