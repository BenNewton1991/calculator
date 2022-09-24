let screen_array_1 = ''
let screen_array_2 = ''
let current_operation = ''
let array_1 = true;
let final_display = ''

function update_screen (screen_array) {
    const screen = document.getElementById('number-display')
    screen.textContent = screen_array;
}
update_screen(screen_array_1);



// Clear button

const clear = document.getElementById('clear')
clear.addEventListener('click',  function() {
    screen_array_1 = ''
    screen_array_2 = ''
    update_screen(screen_array_1)
})


// Multiply



const multiply_event = document.getElementById('multiply')
multiply_event.addEventListener('click', function(){
    if (current_operation == ''){
        array_1 == true ? array_1 = false : array_1 = true;
    }
    current_operation = 'm';
})

// Divide

const divide_event = document.getElementById('divide')
divide_event.addEventListener('click', function(){
    if (current_operation == ''){
        array_1 == true ? array_1 = false : array_1 = true;
    }
    current_operation = 'd';
})

// Subtract

const subtract_event = document.getElementById('subtract')
subtract_event.addEventListener('click', function(){
    if (current_operation == ''){
        array_1 == true ? array_1 = false : array_1 = true;
    }
    current_operation = 's';
})

// Add

const add_event = document.getElementById('add')
add_event.addEventListener('click', function(){
    if (current_operation == ''){
        array_1 == true ? array_1 = false : array_1 = true;
    }
    current_operation = 'a';
})

// Exponential

const exponential_event = document.getElementById('exponential')
exponential_event.addEventListener('click', function(){
    if (current_operation == ''){
        array_1 == true ? array_1 = false : array_1 = true;
    }
    current_operation = 'e';
})

// Delete

const delete_event = document.getElementById('del')
delete_event.addEventListener('click', function(){
  if (array_1 == true && screen_array_1 != '') {
    screen_array_1 = screen_array_1.slice(0, -1)
    update_screen(screen_array_1);
  }  else {
    screen_array_2 = screen_array_2.slice(0, -1)
    update_screen(screen_array_2);

  }
  
})





// Equals

const equals_event = document.getElementById('equals')
equals_event.addEventListener('click', function () {

    let arr_1_int = parseInt(screen_array_1);
    let arr_2_int = parseInt(screen_array_2);

    let sum = 'ERROR';

    if (current_operation == 'm') {
        sum = arr_1_int * arr_2_int;

    } else if (current_operation == 'd') {
        sum = arr_1_int / arr_2_int;

    } else if (current_operation == 's') {
        sum = arr_1_int - arr_2_int;

    } else if (current_operation == 'a') {
        sum = arr_1_int + arr_2_int;

    } else if (current_operation == 'e') {
        sum = arr_1_int ** arr_2_int;

    }

    update_screen(sum);
    current_operation = ''
    screen_array_1 = '';
    screen_array_2 = ''
    sum = 'ERROR';
})


// Adds click functionality to numbers

const buttons = document.getElementsByClassName('btn_1')

Array.from(buttons).forEach(function(element) {
    element.addEventListener('click', function(a){
        
        const text = element.textContent;
        if (array_1 == true) {
            screen_array_1 += text;
            screen_array_1 = screen_array_1.replace(/\s/g, '');
            console.log(screen_array_1)
            console.log(screen_array_2)
            update_screen(screen_array_1);
        } else {
            screen_array_2 += text;
            screen_array_2 = screen_array_2.replace(/\s/g, '');
            console.log(screen_array_1)
            console.log(screen_array_2)
            update_screen(screen_array_2);
        }
    })
})

