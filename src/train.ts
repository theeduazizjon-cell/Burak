/* 

T - TASK 

Masalaning shart: Shunday function tuzing, 
u sonlardan tashkil topgan 2'ta array qabul qilsin.
Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

*/ 

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
Traditional API 
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