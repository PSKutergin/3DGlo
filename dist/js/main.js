/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ \"./modules/forms.js\");\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('10 october 2023')\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\n    const calcInputs = document.querySelectorAll('input.calc-item')\n\n    calcInputs.forEach(item => {\n        item.addEventListener('input', (e) => {\n            e.target.value = e.target.value.replace(/\\D+/, \"\")\n        })\n    })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/forms.js":
/*!**************************!*\
  !*** ./modules/forms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst forms = () => {\n    const forms = document.querySelectorAll('[name=\"user_form\"]');\n\n    forms.forEach(form => {\n        const inptsForm = form.querySelectorAll('input');\n\n        inptsForm.forEach(input => {\n            switch (input.type) {\n                case 'text':\n                    input.addEventListener('blur', (e) => {\n                        e.target.value = e.target.value.replace(/[^а-яА-Я\\s\\-]/g, \"\").replace(/^(\\s*)|(\\s*)$/g, '').replace(/\\s+/g, ' ').replace(/\\-+/g, '-').replace(/( |^)[а-я]/g, (x) => x.toUpperCase());\n                    }, true);\n                    break;\n                case 'email':\n                    input.addEventListener('blur', (e) => {\n                        e.target.value = e.target.value.replace(/[^A-Za-z0-9\\@\\-\\_\\.\\!\\~\\*\\']/g, \"\").replace(/\\-+/g, '-')\n                    }, true);\n                    break;\n                case 'tel':\n                    input.addEventListener('blur', (e) => {\n                        e.target.value = e.target.value.replace(/[^0-9\\(\\)\\-]/g, \"\").replace(/\\-+/g, '-')\n                    }, true);\n                    break;\n            }\n        })\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n//# sourceURL=webpack:///./modules/forms.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menuBtn = document.querySelector('.menu');\n    const menu = document.querySelector('menu');\n    const closeBtn = menu.querySelector('.close-btn');\n    const menuItems = menu.querySelectorAll('ul>li>a');\n\n    const handleMenu = () => {\n        menu.classList.toggle('active-menu')\n    };\n\n    menuBtn.addEventListener('click', handleMenu);\n    closeBtn.addEventListener('click', handleMenu);\n\n    menuItems.forEach((menuItem) => menuItem.addEventListener('click', handleMenu));\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n    const modal = document.querySelector('.popup');\n    const buttons = document.querySelectorAll('.popup-btn');\n    const closeBtn = modal.querySelector('.popup-close');\n    let idInterval;\n    let opacity = 0;\n\n    window.clearTimeout(timer);\n\n    buttons.forEach(btn => {\n        btn.addEventListener('click', () => {\n            modal.style.display = 'block'\n            if (innerWidth >= 768) animModalShow()\n        })\n    });\n\n    closeBtn.addEventListener('click', () => {\n        if (innerWidth >= 768) animModalClose()\n        modal.style.display = 'none'\n    });\n\n    const animModalShow = () => {\n        opacity++\n        idInterval = requestAnimationFrame(animModalShow)\n\n        if (opacity < 100) {\n            modal.style.opacity = opacity * 5 / 100;\n        } else {\n            cancelAnimationFrame(idInterval)\n        }\n    };\n\n    const animModalClose = () => {\n        opacity--\n        idInterval = requestAnimationFrame(animModalClose)\n\n        if (opacity > 0) {\n            modal.style.opacity = opacity / 100;\n        } else {\n            cancelAnimationFrame(idInterval)\n        }\n    };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\n    const menu = document.querySelector('menu');\n    const menuItems = menu.querySelectorAll('ul>li>a');\n    const btnDown = document.querySelector('main>a');\n\n    const scroll = (item) => {\n        item.addEventListener('click', function (e) {\n            e.preventDefault();\n            const id = item.getAttribute('href');\n\n            document.querySelector(id).scrollIntoView({\n                behavior: 'smooth',\n                block: 'start'\n            });\n        });\n    }\n\n    menuItems.forEach(menuItem => scroll(menuItem))\n    scroll(btnDown)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n    const timerDays = document.getElementById('timer-days');\n    const timerHours = document.getElementById('timer-hours');\n    const timerMinutes = document.getElementById('timer-minutes');\n    const timerSeconds = document.getElementById('timer-seconds');\n    const timerDaysText = document.getElementById('timer-days-text')\n\n    const dayText = (n, text_arr) => {\n        n = Math.abs(n) % 100\n        var n1 = n % 10\n        if (n > 10 && n < 20) {\n            return text_arr[2]\n        }\n        if (n1 > 1 && n1 < 5) {\n            return text_arr[1]\n        }\n        if (n1 == 1) {\n            return text_arr[0]\n        }\n        return text_arr[2]\n    }\n\n    const getTimeRemaining = () => {\n        let dateStop = new Date(deadline).getTime();\n        let dateNow = new Date().getTime();\n        let timeRemaining = (dateStop - dateNow) / 1000;\n        let days = Math.floor(timeRemaining / 60 / 60 / 24);\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24);\n        let minutes = Math.floor((timeRemaining / 60) % 60);\n        let seconds = Math.floor(timeRemaining % 60);\n\n        return { timeRemaining, days, hours, minutes, seconds }\n    };\n\n    const updateClock = (getTime) => {\n\n        if (getTime.days > 0) {\n            timerDays.style.display = 'inline';\n            timerDaysText.style.display = 'inline';\n\n            timerDays.textContent = getTime.days;\n            timerDaysText.textContent = dayText(getTime.days, ['день', 'дня', 'дней'])\n\n        } else {\n            timerDays.style.display = 'none'\n            timerDaysText.style.display = 'none'\n        }\n\n        timerHours.textContent = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;\n        timerMinutes.textContent = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;\n        timerSeconds.textContent = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;\n\n        // if (getTime.timeRemaining > 0) {\n        //     setTimeout(updateClock, 1000)\n        // };\n\n    };\n\n    // updateClock()\n\n    let idInterval = setInterval(() => {\n        let getTime = getTimeRemaining()\n\n        if (getTime.timeRemaining > 0) {\n            updateClock(getTime)\n        } else if (getTime.timeRemaining <= 0) {\n            clearInterval(idInterval)\n        }\n    }, 1000)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;