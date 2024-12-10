let display = document.getElementById("calc-display");
let currentInput = '0';
let previousInput = '';
let operator = '';
let result = null;
let operatorPressed = false;
let memoryValue = 0;

function updateDisplayValue(value) {
	const updateDigits = () => {
		display.innerHTML = '';
		let chars = value.toString().split('');
		for (let i = 0; i < chars.length; i++) {
			let span = document.createElement('span');
			span.classList.add('digit');
			if (i == chars.length - 1) {
				span.classList.add('last');
			}
			span.innerText = chars[i];
			display.appendChild(span);
		}
	};

	if (!document.startViewTransition) {
		updateDigits();
	} else {
		document.startViewTransition(updateDigits);
	}
}

document.querySelectorAll(".calc-btn").forEach((el) => {
	let value = el.getAttribute("data-value");
	let type = el.classList.contains("mem") ? "mem" : el.classList.contains("operator") ? "operator" : "number";

	el.addEventListener("click", () => {
		display.style.viewTransitionName = "digit";

		if (isNaN(currentInput)) {
			currentInput = '0';
			previousInput = '';
			operator = '';
			result = null;
			operatorPressed = false;
			updateDisplayValue("0");
		}

		if (type === "number") {
			if (value == "=") {
				display.style.viewTransitionName = "display";
				if (previousInput && operator) {
					result = calculate(Number(previousInput), Number(currentInput), operator);
					updateDisplayValue(result);
					currentInput = result.toString();
					previousInput = '';
					operator = '';
					operatorPressed = false;
				}
			} else {
				if (value === '.' && currentInput.includes('.')) {
					return;
				}
				if (operatorPressed) {
					currentInput = value === '.' ? '0.' : value;
					operatorPressed = false;
				} else if (currentInput === '0' && value === '.') {
					currentInput = '0.';
				} else if (currentInput === '0' && value !== '.') {
					currentInput = value;
				} else if (currentInput.length >= getMaxDigits()) {
					return;
				} else {
					currentInput += value;
				}

				updateDisplayValue(currentInput);
			}
		} else if (type === "operator") {
			switch (value) {
				case '+':
				case '-':
				case '*':
				case '/':
					if (previousInput && operator) {
						result = calculate(Number(previousInput), Number(currentInput), operator);
						updateDisplayValue(result);
						previousInput = result.toString();
					} else {
						previousInput = currentInput;
					}
					operator = value;
					operatorPressed = true;
					break;
				case 'C':
					display.style.viewTransitionName = "display-reverse";
					currentInput = '0';
					previousInput = '';
					operator = '';
					result = null;
					operatorPressed = false;
					updateDisplayValue("0");
					break;
				default:
					handleSpecialOperations(value);
					break;
			}
		} else if (type === "mem") {
			switch (value) {
				case "mplus":
					memoryValue += Number(currentInput);
					break;
				case "mminus":
					memoryValue -= Number(currentInput);
					break;
				case "mr":
					currentInput = memoryValue.toString();
					updateDisplayValue(currentInput);
					break;
				case "mc":
					memoryValue = 0;
					break;
				case 'plusminus':
					if (currentInput === '0') return;
					currentInput = (currentInput.startsWith('-') ?
						currentInput.substring(1) :
						'-' + currentInput);
					updateDisplayValue(currentInput);
					break;
			}
		}
	});
});

function getMaxDigits() {
	const width = window.innerWidth;
	const height = window.innerHeight;
	const vmin = Math.min(width, height);
	const digitSize = Math.floor(vmin / 18);
	const digits = Math.floor((width - 5) / digitSize);
	console.log(width, height, vmin, digitSize, digits);
	return digits;
}

function calculate(num1, num2, op) {
	let result = 0;

	switch (op) {
		case '+':
			result = num1 + num2;
			break;
		case '-':
			result = num1 - num2;
			break;
		case '*':
			result = num1 * num2;
			break;
		case '/':
			result = num1 / num2;
			break;
		default:
			result = num2;
	}

	let maxDigits = getMaxDigits();
	if (Number(result).toString().length > maxDigits) {
		return result.toExponential(maxDigits - 6);
	} else {
		return result;
	}
}

// function calculate(num1, num2, op) {
// 	switch (op) {
// 		case '+':
// 			return num1 + num2;
// 		case '-':
// 			return num1 - num2;
// 		case '*':
// 			return num1 * num2;
// 		case '/':
// 			return num2 !== 0 ? num1 / num2 : 'Error';
// 		default:
// 			return num2;
// 	}
// }


function handleSpecialOperations(value) {
	switch (value) {
		case 'sqrt':
			currentInput = Math.sqrt(Number(currentInput)).toString();
			updateDisplayValue(currentInput);
			break;
		case 'percent':
			currentInput = (Number(currentInput) / 100).toString();
			updateDisplayValue(currentInput);
			break;
		case '1/x':
			currentInput = Number(currentInput) !== 0 ? (1 / Number(currentInput)).toString() : 'Error';
			updateDisplayValue(currentInput);
			break;
		default:
			break;
	}
}

function updateActiveOperator(value) {
	document.querySelectorAll('.operator').forEach(btn => {
		if (btn.getAttribute('data-value') === value && ['+', '-', '*', '/'].includes(value)) {
			btn.classList.add('active');
		} else {
			btn.classList.remove('active');
		}
	});
}

document.querySelectorAll(".calc-btn").forEach((el) => {
	if (el.classList.contains("operator")) {
		el.addEventListener("click", () => {
			updateActiveOperator(el.getAttribute('data-value'));
		});
	}
});

document.querySelector('[data-value="="]').addEventListener('click', () => {
	updateActiveOperator('');
});

updateActiveOperator('');
