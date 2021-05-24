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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_todoGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todoGenerator */ \"./src/modules/todoGenerator.js\");\n/* harmony import */ var _modules_branchGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/branchGenerator */ \"./src/modules/branchGenerator.js\");\n/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_helperFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/helperFunctions */ \"./src/modules/helperFunctions.js\");\n\n\n\n\n\n(function runTododo() {\n\n    // Task list with default branch - 0\n    let taskList = {0: [],};\n    let branchList = [];\n\n    let activeTaskId;\n    \n    let activeBranchId = 0;\n    let activeBranch;\n\n    // Task form listener\n    const taskForm = document.getElementById('task-form');\n    taskForm.addEventListener('submit', (e) => {\n        e.preventDefault();\n\n        const task = new _modules_todoGenerator__WEBPACK_IMPORTED_MODULE_0__.default(taskForm.taskTitle.value, Number(activeBranchId), 'not done');\n        _modules_display__WEBPACK_IMPORTED_MODULE_2__.default.task(task);\n        _modules_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.clearInput.taskForm(taskForm);\n\n        if (taskList[activeBranchId]) {\n            taskList[activeBranchId].push(task);\n        } else {\n            taskList[activeBranchId] = [];\n            taskList[activeBranchId].push(task);\n        };\n    });\n\n    // Branch form listener\n    const branchForm = document.getElementById('branch-form');\n    branchForm.addEventListener('submit', (e) => {\n        e.preventDefault();\n        const branch = new _modules_branchGenerator__WEBPACK_IMPORTED_MODULE_1__.default(branchForm.branchTitle.value);\n        branchList.push(branch);\n        _modules_display__WEBPACK_IMPORTED_MODULE_2__.default.branch(branch);\n        _modules_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.clearInput.branchForm(branchForm);\n    });\n\n    //   Task edit form\n    const taskEditForm = document.getElementById('task-edit-form');\n    taskEditForm.addEventListener('submit', (e) => {\n        e.preventDefault();\n        let editedTask = taskList[activeBranchId][activeTaskId];\n        if (taskEditForm.taskTitle.value) {\n            editedTask.title = taskEditForm.taskTitle.value;\n        };\n        editedTask.date = taskEditForm.taskDate.value;\n        editedTask.status = taskEditForm.taskStatus.value;\n        editedTask.priority = taskEditForm.taskPriority.value;\n        modal.style.display = \"none\";\n        _modules_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.clearInput.taskEditForm(taskEditForm);\n        _modules_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.clear.taskDisplay();\n        _modules_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.show.taskDisplay(taskList[activeBranchId]);\n    });\n\n\n    // Branch change listener\n    const branches = document.querySelector('.branch-list');\n    branches.addEventListener('click', (e) => {\n            if (e.target.id) {\n\n                // Deactivate style on previous branch\n                if (activeBranch) {\n                    activeBranch.classList.remove('active-branch');\n                };\n                _modules_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.clear.taskDisplay();\n\n                // Set new current branch\n                activeBranchId = e.target.id;\n                if (taskList[activeBranchId]) {\n                    _modules_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.show.taskDisplay(taskList[activeBranchId]);\n                };\n\n                activeBranch = e.target;\n                activeBranch.classList.add('active-branch');\n\n            };\n        });\n\n        \n    const modal = document.querySelector(\".modal\");\n\n\n    // Trash, checkbox and edit icon listener\n    const tasks = document.querySelector('.task-list');\n    tasks.addEventListener('click', (e) => {\n        const target = e.target.classList[0];\n        let clickedTaskId = e.target.parentElement.parentElement.id;\n        if (target === 'trash-icon') {\n            taskList[activeBranchId].splice(clickedTaskId, 1);\n        } else if (target === 'edit-icon') {\n            modal.style.display = 'block';\n            activeTaskId = clickedTaskId;\n        } else if (target === 'checkbox-icon') {\n            let currentTask = taskList[activeBranchId][clickedTaskId];\n            if (currentTask.status === 'not done') {\n                currentTask.status = 'done';\n            } else {\n                currentTask.status = 'not done';\n            };\n        };\n        _modules_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.clear.taskDisplay();\n        _modules_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.show.taskDisplay(taskList[activeBranchId]);\n    });\n\n    // Close modal\n    let closeBtn = document.querySelector(\".close-btn\");\n    closeBtn.addEventListener('click', () => {\n        modal.style.display = 'none';\n    });\n\n    window.onclick = function(e){\n        if (e.target == modal){\n          modal.style.display = \"none\"\n        };\n      };\n\n\n})();\n\n\n//# sourceURL=webpack://tododo/./src/index.js?");

/***/ }),

/***/ "./src/modules/branchGenerator.js":
/*!****************************************!*\
  !*** ./src/modules/branchGenerator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Branch {\n\n    constructor(title) {\n        this.title = title;\n    };\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Branch);\n\n//# sourceURL=webpack://tododo/./src/modules/branchGenerator.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst display = (function() {\n\n    // Add new task to the list\n    let task = function(task) {\n        const tasks = document.querySelector('.task-list');\n        const lastTask = tasks.lastChild;\n\n        const newTask = document.createElement('li');\n        if (task.priority === 'important') {\n            newTask.classList.add('important');\n        };\n\n        newTask.classList.add('task');\n\n        // Check if there is last task to number it properly\n        if (lastTask) {\n            newTask.setAttribute('id', Number(lastTask.id) + 1)\n        } else {\n            newTask.setAttribute('id', '0')\n        };\n\n        // Add necessary elements\n\n        tasks.appendChild(newTask);\n        const checkboxIcon = document.createElement('span');\n        checkboxIcon.classList.add('checkbox-icon');\n        newTask.appendChild(checkboxIcon);\n\n        if (task.status === 'not done') {\n            checkboxIcon.style.background = 'url(../img/checkbox.png) no-repeat';\n        } else {\n            checkboxIcon.style.background = 'url(../img/checkbox-checked.png) no-repeat';\n        };\n        checkboxIcon.style.backgroundSize = '18px';\n\n        const taskTitlePara = document.createElement('p');\n        taskTitlePara.textContent = task.title;\n        newTask.appendChild(taskTitlePara);\n\n        const taskDate = document.createElement('p');\n        taskDate.classList.add('date');\n        taskDate.textContent = task.date;\n        newTask.appendChild(taskDate);\n\n        const modifyIcons = document.createElement('div');\n        modifyIcons.classList.add('modify-icons');\n\n        newTask.append(modifyIcons);\n\n        const editIcon = document.createElement('span');\n        editIcon.classList.add('edit-icon');\n        modifyIcons.appendChild(editIcon);\n\n        const trashIcon = document.createElement('span');\n        trashIcon.classList.add('trash-icon');\n        modifyIcons.appendChild(trashIcon);\n\n    };\n\n    // Add new branch to the list\n    let branch = function(branch) {\n        const branchList = document.querySelector('.branch-list')\n        const lastBranch = branchList.lastChild;\n\n\n        const newBranch = document.createElement('button');\n        newBranch.classList.add('branch');\n        newBranch.textContent = branch.title;\n        branchList.appendChild(newBranch);\n\n\n        // Check if there is last branch to number it properly\n        if (!lastBranch.id) {\n            newBranch.setAttribute('id', 1);\n        } else {\n            newBranch.setAttribute('id', Number(lastBranch.id) + 1);\n        };\n    };\n    return { task, branch }\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://tododo/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/helperFunctions.js":
/*!****************************************!*\
  !*** ./src/modules/helperFunctions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearInput\": () => (/* binding */ clearInput),\n/* harmony export */   \"clear\": () => (/* binding */ clear),\n/* harmony export */   \"show\": () => (/* binding */ show)\n/* harmony export */ });\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/modules/display.js\");\n\n\n// Clear form\nconst clearInput = (function() {\n\n    let taskForm = function(form) {\n        form.taskTitle.value = '';\n    };\n\n    let branchForm = function(form) {\n        form.branchTitle.value = '';\n    };\n\n    let taskEditForm = function(form) {\n        form.taskTitle.value = '';\n    }\n\n    return { taskForm, branchForm, taskEditForm }\n\n})();\n\n// Clear tasks display\nconst clear = (function() {\n    const tasks = document.querySelector('.task-list');\n\n    let taskDisplay = function() {\n        while (tasks.firstChild) {\n            tasks.removeChild(tasks.firstChild);\n    }};\n\n    return { taskDisplay };\n\n})();\n\n\n// Display tasks\nconst show = (function() {\n\n    let taskDisplay = function(taskList) {\n        for (let i = 0; i < taskList.length; i++) {\n            if (taskList[i]) {\n                _display__WEBPACK_IMPORTED_MODULE_0__.default.task(taskList[i]);\n            };\n        };\n    };\n\n    return { taskDisplay };\n\n})();\n\n\n\n//# sourceURL=webpack://tododo/./src/modules/helperFunctions.js?");

/***/ }),

/***/ "./src/modules/todoGenerator.js":
/*!**************************************!*\
  !*** ./src/modules/todoGenerator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\n\n    constructor(title, branch, status, priority, date) {\n        this.title = title;\n        this.branch = branch;\n        this.status = status;\n        this.priority = priority;\n        this.date = date;\n    };\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://tododo/./src/modules/todoGenerator.js?");

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