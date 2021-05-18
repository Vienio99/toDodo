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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_todoGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todoGenerator */ \"./src/modules/todoGenerator.js\");\n/* harmony import */ var _modules_branchGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/branchGenerator */ \"./src/modules/branchGenerator.js\");\n\n\n\nconst addNew = (function() {\n\n    // Add new task to the list\n    let task = function(task) {\n        const tasks = document.querySelector('.task-list');\n        const lastTask = tasks.lastChild;\n        const newTask = document.createElement('li');\n\n        newTask.classList.add('task');\n\n        // Check if there is last task to number it properly\n        if (lastTask) {\n            newTask.setAttribute('id', Number(lastTask.id) + 1)\n        } else {\n            newTask.setAttribute('id', '1')\n        };\n\n        // Add necessary elements\n\n        tasks.appendChild(newTask);\n        const checkboxIcon = document.createElement('span');\n        checkboxIcon.classList.add('checkbox-icon');\n        newTask.appendChild(checkboxIcon);\n        \n        const taskTitlePara = document.createElement('p');\n        taskTitlePara.textContent = task.title;\n        newTask.appendChild(taskTitlePara);\n\n        const modifyIcons = document.createElement('div');\n        modifyIcons.classList.add('modify-icons');\n\n        newTask.append(modifyIcons);\n\n        const editIcon = document.createElement('span');\n        editIcon.classList.add('edit-icon');\n        modifyIcons.appendChild(editIcon);\n\n\n        const trashIcon = document.createElement('span');\n        trashIcon.classList.add('trash-icon');\n        modifyIcons.appendChild(trashIcon);\n\n\n    };\n\n    let branch = function(branch) {\n        const branchList = document.querySelector('.branch-list')\n        const lastBranch = branchList.lastChild;\n        const newBranch = document.createElement('button');\n\n\n        if (!lastBranch.id) {\n            newBranch.setAttribute('id', 1);\n        } else {\n            newBranch.setAttribute('id', Number(lastBranch.id) + 1);\n        };\n\n        newBranch.classList.add('branch');\n\n        newBranch.textContent = branch.title;\n        branchList.appendChild(newBranch);\n\n\n    };\n\n    return { task, branch }\n})();\n\n\n// Clear form\nconst clearInput = (function() {\n\n    let taskForm = function(form) {\n        form.newTaskTitle.value = '';\n    };\n\n    let branchForm = function(form) {\n        form.newBranchTitle.value = '';\n    };\n\n    return { taskForm, branchForm }\n\n})();\n\nconst clear = (function() {\n    const tasks = document.querySelector('.task-list');\n\n    let taskList = function() {\n        while (tasks.firstChild) {\n            tasks.removeChild(tasks.firstChild);\n    }};\n\n    return { taskList };\n})();\n\nconst show = (function() {\n\n    let taskList = function(taskList) {\n        for (let i = 0; i < taskList.length; i++)\n            addNew.task(taskList[i]);\n    };\n\n    return { taskList };\n})();\n\n\n\n(function runTododo() {\n\n    const taskForm = document.getElementById('task-form');\n    const branchForm = document.getElementById('branch-form');\n\n\n    let taskList = {};\n    let branchList = [];\n    let currentBranchId;\n    let currentBranchElement;\n\n    // Form submit listener\n    taskForm.addEventListener('submit', (e) => {\n        e.preventDefault();\n        const task = new _modules_todoGenerator__WEBPACK_IMPORTED_MODULE_0__.default(1, taskForm.newTaskTitle.value, currentBranchId, 'Very important');\n\n        if (!taskList[currentBranchId] && currentBranchId) {\n            taskList[currentBranchId] = [];\n            taskList[currentBranchId].push(task);\n            console.log('current branch id');\n        } else if (!currentBranchId) {\n            taskList[0] = [];\n            taskList[0].push(task);\n            console.log('no current branch id');\n        };\n\n\n        addNew.task(task);\n        clearInput.taskForm(taskForm);\n    });\n\n    branchForm.addEventListener('submit', (e) => {\n        e.preventDefault();\n        const branch = new _modules_branchGenerator__WEBPACK_IMPORTED_MODULE_1__.default(1, branchForm.newBranchTitle.value);\n        branchList.push(branch);\n        addNew.branch(branch);\n        clearInput.branchForm(branchForm);\n    });\n\n    // Branch change listener\n    const branches = document.querySelector('.branch-list');\n    if (branches) {\n        branches.addEventListener('click', (e) => {\n            if (e.target.id) {\n\n                // Disactivate style on previous branch\n                if (currentBranchElement) {\n                    currentBranchElement.classList.remove('active-branch');\n                };\n                clear.taskList();\n\n                // Set new current branch\n                currentBranchId = e.target.id;\n                if (taskList[currentBranchId]) {\n                    show.taskList(taskList[currentBranchId]);\n                    console.log(taskList)\n                };\n\n                currentBranchElement = e.target;\n                currentBranchElement.classList.add('active-branch');\n\n            };\n        });\n    };\n})();\n\n\n//# sourceURL=webpack://tododo/./src/index.js?");

/***/ }),

/***/ "./src/modules/branchGenerator.js":
/*!****************************************!*\
  !*** ./src/modules/branchGenerator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Branch {\n\n    constructor(id, title) {\n        this.id = id;\n        this.title = title;\n    };\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Branch);\n\n//# sourceURL=webpack://tododo/./src/modules/branchGenerator.js?");

/***/ }),

/***/ "./src/modules/todoGenerator.js":
/*!**************************************!*\
  !*** ./src/modules/todoGenerator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\n\n    constructor(id, title, branch, priority, status) {\n        this.id = id;\n        this.title = title;\n        this.branch = branch;\n        this.priority = priority;\n        this.status = status;\n    };\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://tododo/./src/modules/todoGenerator.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;