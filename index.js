if (window.matchMedia('(prefers-color-scheme:dark')) {
    $('html').attr('data-theme', 'dark');
    $('#theme-slider').attr('value', '1');
} else {
    $('html').attr('data-theme', 'light');
    $('#theme-slider').attr('value', '2');
}

$('#theme-slider').on('change', function () {
    switch (this.value) {
        case '1':
            $('html').attr('data-theme', 'dark');
            break;
        case '2':
            $('html').attr('data-theme', 'light');
            break;
        case '3':
            $('html').attr('data-theme', 'purple');
            break;
    }
});

var input = '0';
var currentNumber = '';
var equation = [];

$('.key').click(function () {
    if (!isNaN(parseFloat(this.id))) {
        if (input === '0') {
            input = this.id;
            currentNumber = this.id;
        } else {
            input = input + this.id;
            currentNumber = currentNumber + this.id;
        }
    } else {
        switch (this.id) {
            case 'del':
                deleteLast();
                break;
            case 'res':
                input = '0';
                currentNumber = '';
                equation = [];
                break;
            case '=':
                if (currentNumber === '' && isNaN(equation[equation.length])) {
                    equation.pop();
                }
                equation.push(currentNumber);
                input = calculateResult().toString();
                equation = [];
                currentNumber = input;
                break;
            case '.':
                if (!currentNumber.includes('.')) {
                    input = input + this.id;
                    currentNumber = currentNumber + this.id;
                }
                break;
            default:
                if (currentNumber != '' && currentNumber != '.' && currentNumber != '0.') {
                    input = input + this.id;
                    equation.push(currentNumber);
                    equation.push(this.id);
                    currentNumber = '';
                }
                break;

        }
    }
    $('h1').text(input);
});

function deleteLast() {
    if (!isNaN(input.substring(input.length - 1))) {
        currentNumber = currentNumber.substring(0, currentNumber.length - 1);

    } else {
        equation.pop();
        equation.pop();
        console.log(equation);
    }
    input = input.substring(0, input.length - 1);
    if (input === '') input = '0';
}

function calculateResult() {
    var result = 0;
    if (equation.length >= 3) {
        for (var i = 1; i < equation.length - 1; i = i + 2) {
            var op1 = parseFloat(equation[i - 1]);
            var op2 = parseFloat(equation[i + 1]);
            if (i != 1) {
                op1 = result;
            }
            switch (equation[i]) {
                case '+':
                    result = add(op1, op2);
                    break;
                case '-':
                    result = sub(op1, op2);
                    break;
                case 'x':
                    result = mul(op1, op2);
                    break;
                case '/':
                    result = div(op1, op2);
                    break;
            }
        }
    }
    return result;
}


function add(add1, add2) {
    return add1 + add2;
}

function sub(sub1, sub2) {
    return sub1 - sub2;
}

function mul(mul1, mul2) {
    return mul1 * mul2;
}

function div(div1, div2) {
    return div1 / div2;
}