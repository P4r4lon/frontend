let first = '';
let second = '';
let sign = '';
let finish = false;

const digit = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const action = ['-', '+', 'X', '/']

const out = document.querySelector('.calc-screen p')

function clearAll() {
    first = '';
    second = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains("btn")) return
    if (event.target.classList.contains("ac")) return clearAll()
    out.textContent = '';
    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (second === '' && sign === '') {
            first += key;
            out.textContent = first
        } else if (first !== '' && second !== '' && finish) {
            second = key
            finish = false
            out.textContent = second
        } else {
            second += key
            out.textContent = second
        }
    }

    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        return
    }

    if (key === '=') {
        if (second === '') second = first
        switch (sign) {
            case '+':
                first = +first + (+second)
                break
            case '-':
                first = first - second
                break
            case 'X':
                first = first * second
                break
            case '/':
                if (second === '0') {
                    out.textContent = 'Error'
                    first = ''
                    second = ''
                    sign = ''
                    return;
                }
                first = first / second
                break
        }
        finish = true;
        out.textContent = first;


    }

};