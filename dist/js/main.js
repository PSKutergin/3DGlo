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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ \"./modules/forms.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('10 october 2023')\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(100)\n;(0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('portfolio-content', 'portfolio-item', 'portfolio-item-active', 'portfolio-dots', 'dot')\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\nconst calc = (price = 100) => {\n    const calcInputs = document.querySelectorAll('input.calc-item');\n    const calcBlock = document.querySelector('.calc-block');\n    const calcType = document.querySelector('.calc-type');\n    const calcSquare = document.querySelector('.calc-square');\n    const calcCount = document.querySelector('.calc-count');\n    const calcDay = document.querySelector('.calc-day');\n    const total = document.getElementById('total');\n\n    const countCalc = () => {\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\n        const calcSquareValue = calcSquare.value;\n\n        let totalValue = 0;\n        let calcCountValue = 1;\n        let calcDayValue = 1;\n\n        if (calcCount.value > 1) {\n            calcCountValue += +calcCount.value / 10\n        };\n\n        if (calcDay.value && calcDay.value < 5) {\n            calcDayValue = 2\n        } else if (calcDay.value && calcDay.value < 10) {\n            calcDayValue = 1.5\n        };\n\n        if (calcType.value && calcSquare.value) {\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\n        } else {\n            totalValue = 0\n        };\n\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n            duration: 1000,\n            timing(timeFraction) {\n                return Math.pow(timeFraction, 5)\n            },\n            draw(progress) {\n                total.textContent = Math.round(progress * totalValue);\n            }\n        });\n    };\n\n    calcInputs.forEach(item => {\n        item.addEventListener('input', (e) => {\n            e.target.value = e.target.value.replace(/\\D+/, \"\")\n        })\n    });\n\n    calcBlock.addEventListener('input', (e) => {\n        if (e.target === calcType || e.target === calcSquare ||\n            e.target === calcCount || e.target === calcDay) {\n            countCalc()\n        }\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/forms.js":
/*!**************************!*\
  !*** ./modules/forms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst forms = () => {\n    const forms = document.querySelectorAll('[name=\"user_form\"]');\n\n    forms.forEach(form => {\n        const inptsForm = form.querySelectorAll('input');\n\n        inptsForm.forEach(input => {\n            switch (input.type) {\n                case 'text':\n                    input.addEventListener('blur', (e) => {\n                        e.target.value = e.target.value.replace(/[^а-яА-Я\\s\\-]/g, \"\").replace(/^(\\s*)|(\\s*)$/g, '').replace(/\\s+/g, ' ').replace(/\\-+/g, '-').replace(/( |^)[а-я]/g, (x) => x.toUpperCase());\n                    }, true);\n                    break;\n                case 'email':\n                    input.addEventListener('blur', (e) => {\n                        e.target.value = e.target.value.replace(/[^A-Za-z0-9\\@\\-\\_\\.\\!\\~\\*\\']/g, \"\").replace(/\\-+/g, '-')\n                    }, true);\n                    break;\n                case 'tel':\n                    input.addEventListener('blur', (e) => {\n                        e.target.value = e.target.value.replace(/[^0-9\\(\\)\\-]/g, \"\").replace(/\\-+/g, '-')\n                    }, true);\n                    break;\n            }\n        })\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n//# sourceURL=webpack:///./modules/forms.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\n\n    let start = performance.now();\n\n    requestAnimationFrame(function animate(time) {\n        // timeFraction изменяется от 0 до 1\n        let timeFraction = (time - start) / duration;\n        if (timeFraction > 1) timeFraction = 1;\n\n        // вычисление текущего состояния анимации\n        let progress = timing(timeFraction);\n\n        draw(progress); // отрисовать её\n\n        if (timeFraction < 1) {\n            requestAnimationFrame(animate);\n        }\n    });\n}\n\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const body = document.querySelector('body')\n    const menu = body.querySelector('menu');\n\n    const handleMenu = () => {\n        menu.classList.toggle('active-menu')\n    };\n\n    body.addEventListener('click', (e) => {\n        if (!e.target.closest('.active-menu') && menu.classList.contains('active-menu') || e.target.closest('.menu') || e.target.classList.contains('close-btn') || e.target.matches('ul>li>a')) {\n            handleMenu()\n        };\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\nconst modal = () => {\n    const modal = document.querySelector('.popup');\n    const buttons = document.querySelectorAll('.popup-btn');\n\n    buttons.forEach(btn => {\n        btn.addEventListener('click', () => {\n            modal.style.display = 'block';\n\n            if (innerWidth >= 768) {\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n                    duration: 1000,\n                    timing(timeFraction) {\n                        return timeFraction;\n                    },\n                    draw(progress) {\n                        modal.style.opacity = progress;\n                    }\n                });\n            };\n        })\n    });\n\n    modal.addEventListener('click', (e) => {\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\n            if (innerWidth >= 768) {\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n                    duration: 1000,\n                    timing(timeFraction) {\n                        return timeFraction;\n                    },\n                    draw(progress) {\n                        modal.style.opacity = 1 - progress;\n                    }\n                });\n            };\n            setTimeout(() => {\n                modal.style.display = 'none'\n            }, 1000);\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\n    const menu = document.querySelector('menu');\n    const menuItems = menu.querySelectorAll('ul>li>a');\n    const btnDown = document.querySelector('main>a');\n\n    const scroll = (item) => {\n        item.addEventListener('click', function (e) {\n            e.preventDefault();\n            const id = item.getAttribute('href');\n\n            document.querySelector(id).scrollIntoView({\n                behavior: 'smooth',\n                block: 'start'\n            });\n        });\n    }\n\n    menuItems.forEach(menuItem => scroll(menuItem))\n    scroll(btnDown)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (sliderBlockClass, slidesClass, slideActiveClass = 'slide-active', dotBlockClass, dotsClass, dotActiveClass = 'dot-active') => {\n\n    if (!document.getElementsByClassName(sliderBlockClass) || !document.getElementsByClassName(slidesClass) || !document.getElementsByClassName(dotBlockClass)) {\n        return\n    };\n\n    const sliderBlock = document.querySelector('.' + sliderBlockClass);\n    const slides = document.querySelectorAll('.' + slidesClass);\n    const dotBlock = document.querySelector('.' + dotBlockClass);\n    const timeInterval = 2000;\n\n    let dots;\n    let currentSlide = 0;\n    let interval;\n\n    for (let i = 0; i < slides.length; i++) {\n        let li = document.createElement('li');\n        li.classList.add(dotsClass);\n\n        if (i === 0) {\n            li.classList.add(dotActiveClass);\n        };\n\n        dotBlock.insertAdjacentElement('beforeend', li);\n    };\n\n    dots = document.querySelectorAll('.' + dotsClass);\n\n    const prevSlide = (elems, index, strClass) => {\n        elems[index].classList.remove(strClass)\n    };\n\n    const nextSlide = (elems, index, strClass) => {\n        elems[index].classList.add(strClass)\n    };\n\n    const autoSlide = () => {\n        prevSlide(slides, currentSlide, slideActiveClass);\n        prevSlide(dots, currentSlide, dotActiveClass);\n        currentSlide++;\n\n        if (currentSlide >= slides.length) {\n            currentSlide = 0\n        };\n\n        nextSlide(slides, currentSlide, slideActiveClass);\n        nextSlide(dots, currentSlide, dotActiveClass);\n    };\n\n    const startSlide = (timer = 1500) => {\n        interval = setInterval(autoSlide, timer);\n    };\n\n    const stopSlide = () => {\n        clearInterval(interval);\n    };\n\n    sliderBlock.addEventListener('click', (e) => {\n        e.preventDefault();\n\n        if (!e.target.matches('.dot, .portfolio-btn')) {\n            return\n        };\n\n        prevSlide(slides, currentSlide, slideActiveClass);\n        prevSlide(dots, currentSlide, dotActiveClass);\n\n        if (e.target.matches('#arrow-right')) {\n            currentSlide++\n        } else if (e.target.matches('#arrow-left')) {\n            currentSlide--\n        } else if (e.target.classList.contains(dotsClass)) {\n            dots.forEach((dot, index) => {\n                if (e.target === dot) {\n                    currentSlide = index\n                }\n            })\n        };\n\n        if (currentSlide >= slides.length) {\n            currentSlide = 0\n        };\n\n        if (currentSlide < 0) {\n            currentSlide = slides.length - 1\n        };\n\n        nextSlide(slides, currentSlide, slideActiveClass)\n        nextSlide(dots, currentSlide, dotActiveClass)\n    });\n\n    sliderBlock.addEventListener('mouseenter', (e) => {\n        if (e.target.matches('.dot, .portfolio-btn')) {\n            stopSlide()\n        };\n    }, true);\n\n    sliderBlock.addEventListener('mouseleave', (e) => {\n        if (e.target.matches('.dot, .portfolio-btn')) {\n            startSlide(timeInterval)\n        };\n    }, true);\n\n    startSlide(timeInterval);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n    const tabPanel = document.querySelector('.service-header');\n    const tabs = document.querySelectorAll('.service-header-tab');\n    const tabContent = document.querySelectorAll('.service-tab');\n\n    tabPanel.addEventListener('click', (e) => {\n        if (e.target.closest('.service-header-tab')) {\n            const tabBtn = e.target.closest('.service-header-tab')\n\n            tabs.forEach((tab, index) => {\n                if (tab === tabBtn) {\n                    tab.classList.add('active')\n                    tabContent[index].classList.remove('d-none')\n                } else {\n                    tab.classList.remove('active')\n                    tabContent[index].classList.add('d-none')\n                }\n            })\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

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