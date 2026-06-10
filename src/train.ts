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

// Masalaning yechimi: 

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
Traditional API 
Rest API 
GraphQL API

*/

/*
Traditional Frontend Development => BSSR -> BackEnd Server Side Rendering | EJS 
Modern FrontEnd Development => SPA -> Single Page Application | React library 
*/