/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lesson/basic.ts":
/*!*****************************!*\
  !*** ./src/lesson/basic.ts ***!
  \*****************************/
/***/ (() => {


const fun = (name) => {
};
const isBoolean = true;
const isNum = 10;
const isBinary = 0b1111;
const isStr = 'nate';
// null和undefined在非严格模式下 是所有类型的子类型
const isNull = null;
const isUndefined = undefined;
const num = 1;
// 避免使用any
let anyVal = 0;
anyVal = '1';
anyVal = true;
anyVal.val;
// anyVal.getVal();
// uni
const uVal = '22';
// array
const arrNum = [1, 2, 3];
const arrNum1 = ['1', '2', '3'];
const arrNum2 = [11];
arrNum.push(2);
// tuple
const user = ['2', 4];
// arrayLike
function arrayLike() {
    console.log(arguments);
}
// void
function arrayLikeVoid() {
    console.log(arguments);
}
const foo = (a, b) => {
};
const nate = {
    id: 1,
    name: 'wang',
    age: 19,
};
// function assert
const bar = (name, age, sex) => {
    return `${name}and${age}`;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./lesson/basic.ts */ "./src/lesson/basic.ts");
const a = 'ts-design';
console.log(a);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtBQUU3QixDQUFDO0FBRUQsTUFBTSxTQUFTLEdBQVksSUFBSSxDQUFDO0FBQ2hDLE1BQU0sS0FBSyxHQUFXLEVBQUUsQ0FBQztBQUN6QixNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUM7QUFDaEMsTUFBTSxLQUFLLEdBQVcsTUFBTSxDQUFDO0FBRzdCLGtDQUFrQztBQUNsQyxNQUFNLE1BQU0sR0FBUyxJQUFJLENBQUM7QUFDMUIsTUFBTSxXQUFXLEdBQWMsU0FBUyxDQUFDO0FBRXpDLE1BQU0sR0FBRyxHQUFXLENBQUMsQ0FBQztBQUV0QixVQUFVO0FBQ1YsSUFBSSxNQUFNLEdBQVEsQ0FBQyxDQUFDO0FBQ3BCLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDYixNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ2QsTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUNYLG1CQUFtQjtBQUVuQixNQUFNO0FBQ04sTUFBTSxJQUFJLEdBQW9CLElBQUk7QUFFbEMsUUFBUTtBQUNSLE1BQU0sTUFBTSxHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuQyxNQUFNLE9BQU8sR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDMUMsTUFBTSxPQUFPLEdBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFFZCxRQUFRO0FBQ1IsTUFBTSxJQUFJLEdBQXFCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBR3hDLFlBQVk7QUFDWixTQUFTLFNBQVM7SUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBRUQsT0FBTztBQUNQLFNBQVMsYUFBYTtJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFJRCxNQUFNLEdBQUcsR0FBVyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsRUFBRTtBQUU3QyxDQUFDO0FBZUQsTUFBTSxJQUFJLEdBQVc7SUFDbkIsRUFBRSxFQUFFLENBQUM7SUFDTCxJQUFJLEVBQUUsTUFBTTtJQUNaLEdBQUcsRUFBRSxFQUFFO0NBQ1I7QUFHRCxrQkFBa0I7QUFFbEIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFZLEVBQUUsR0FBVyxFQUFFLEdBQVksRUFBVSxFQUFFO0lBQzlELE9BQU8sR0FBRyxJQUFJLE1BQU0sR0FBRyxFQUFFO0FBQzNCLENBQUM7Ozs7Ozs7VUM3RUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDckJBLHNFQUEwQjtBQUUxQixNQUFNLENBQUMsR0FBVyxXQUFXO0FBRTdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlU2NyaXB0Ly4vc3JjL2xlc3Nvbi9iYXNpYy50cyIsIndlYnBhY2s6Ly90eXBlU2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVTY3JpcHQvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBmdW4gPSAobmFtZTogc3RyaW5nKSA9PiB7XG5cbn1cblxuY29uc3QgaXNCb29sZWFuOiBib29sZWFuID0gdHJ1ZTtcbmNvbnN0IGlzTnVtOiBudW1iZXIgPSAxMDtcbmNvbnN0IGlzQmluYXJ5OiBudW1iZXIgPSAwYjExMTE7XG5jb25zdCBpc1N0cjogc3RyaW5nID0gJ25hdGUnO1xuXG5cbi8vIG51bGzlkox1bmRlZmluZWTlnKjpnZ7kuKXmoLzmqKHlvI/kuIsg5piv5omA5pyJ57G75Z6L55qE5a2Q57G75Z6LXG5jb25zdCBpc051bGw6IG51bGwgPSBudWxsO1xuY29uc3QgaXNVbmRlZmluZWQ6IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuY29uc3QgbnVtOiBudW1iZXIgPSAxO1xuXG4vLyDpgb/lhY3kvb/nlKhhbnlcbmxldCBhbnlWYWw6IGFueSA9IDA7XG5hbnlWYWwgPSAnMSc7XG5hbnlWYWwgPSB0cnVlO1xuYW55VmFsLnZhbDtcbi8vIGFueVZhbC5nZXRWYWwoKTtcblxuLy8gdW5pXG5jb25zdCB1VmFsOiBudW1iZXIgfCBzdHJpbmcgPSAnMjInXG5cbi8vIGFycmF5XG5jb25zdCBhcnJOdW06IG51bWJlcltdID0gWzEsIDIsIDNdO1xuY29uc3QgYXJyTnVtMTogc3RyaW5nW10gPSBbJzEnLCAnMicsICczJ107XG5jb25zdCBhcnJOdW0yOiBBcnJheTxudW1iZXI+ID0gWzExXTtcbmFyck51bS5wdXNoKDIpXG5cbi8vIHR1cGxlXG5jb25zdCB1c2VyOiBbc3RyaW5nLCBudW1iZXJdID0gWycyJywgNF07XG5cblxuLy8gYXJyYXlMaWtlXG5mdW5jdGlvbiBhcnJheUxpa2UoKSB7XG4gIGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XG59XG5cbi8vIHZvaWRcbmZ1bmN0aW9uIGFycmF5TGlrZVZvaWQoKTogdm9pZCB7XG4gIGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XG59XG5cblxudHlwZSBmblR5cGUgPSAoYTogbnVtYmVyLCBiOiBzdHJpbmcpID0+IHZvaWQ7XG5jb25zdCBmb286IGZuVHlwZSA9IChhOiBudW1iZXIsIGI6IHN0cmluZykgPT4ge1xuICBcbn1cblxuXG4vLyBpbnRlcmZhY2Vcbi8vIDEuIG9iamVjdCBzaGFwZSBkZXNjcmlwdGlvblxuLy8gMi4gYWJzdHJhY3QgY2xhc3Ncbi8vIDMuIGR1Y2sgVHlwaW5nXG5cbmludGVyZmFjZSBQZXJzb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGFnZTogbnVtYmVyO1xuICBob2JieT86IHN0cmluZztcbiAgcmVhZG9ubHkgaWQ6IG51bWJlcjtcbn1cblxuY29uc3QgbmF0ZTogUGVyc29uID0ge1xuICBpZDogMSxcbiAgbmFtZTogJ3dhbmcnLFxuICBhZ2U6IDE5LFxufSBcblxuXG4vLyBmdW5jdGlvbiBhc3NlcnRcblxuY29uc3QgYmFyID0gKG5hbWU6IHN0cmluZywgYWdlOiBudW1iZXIsIHNleD86IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIHJldHVybiBgJHtuYW1lfWFuZCR7YWdlfWBcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXG5pbXBvcnQgJy4vbGVzc29uL2Jhc2ljLnRzJ1xuXG5jb25zdCBhOiBzdHJpbmcgPSAndHMtZGVzaWduJ1xuXG5jb25zb2xlLmxvZyhhKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==