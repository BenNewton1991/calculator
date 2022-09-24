let screen_array_1 = ''
let screen_array_2 = ''
let current_operation = ''
let max = 9999999999999999
let array_1 = true;
let can_add_point = true;
let final_display = ''

function update_screen (screen_array) {
    const screen = document.getElementById('number-display')
    screen.textContent = screen_array;
}



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
    can_add_point = true;
    current_operation = 'm';
})

// Divide

const divide_event = document.getElementById('divide')
divide_event.addEventListener('click', function(){
    if (current_operation == ''){
        array_1 == true ? array_1 = false : array_1 = true;
    }
    can_add_point = true;
    current_operation = 'd';
})

// Subtract

const subtract_event = document.getElementById('subtract')
subtract_event.addEventListener('click', function(){
    if (current_operation == ''){
        array_1 == true ? array_1 = false : array_1 = true;
    }
    can_add_point = true;
    current_operation = 's';
})

// Add

const add_event = document.getElementById('add')
add_event.addEventListener('click', function(){
    if (current_operation == ''){
        array_1 == true ? array_1 = false : array_1 = true;
    }
    can_add_point = true;
    current_operation = 'a';
})

// Exponential

const exponential_event = document.getElementById('exponential')
exponential_event.addEventListener('click', function(){
    if (current_operation == ''){
        array_1 == true ? array_1 = false : array_1 = true;
    }
    can_add_point = true;
    current_operation = 'e';
})

// Delete

const delete_event = document.getElementById('del')
delete_event.addEventListener('click', function(){
  if (array_1 == true && screen_array_1 != '') {
    if (screen_array_1.slice(0, -1) == '.') {
        can_add_point = true;
    }
    screen_array_1 = screen_array_1.slice(0, -1)
    
    update_screen(screen_array_1);
  }  else {
    if (screen_array_2.slice(0, -1) == '.') {
        can_add_point = true;
    }
    screen_array_2 = screen_array_2.slice(0, -1)
    update_screen(screen_array_2);
  }
})





// Equals

const equals_event = document.getElementById('equals')
equals_event.addEventListener('click', function () {

    let arr_1_int = parseFloat(screen_array_1);
    let arr_2_int = parseFloat(screen_array_2);

    let sum = 'ERROR';


    // Checks operation

    if (current_operation == 'm') {

        sum = arr_1_int * arr_2_int;

    } else if (current_operation == 'd') {
        console.log('d')
        if (arr_2_int == 0 || arr_1_int == 0) {
            sum = '(+_+)'
        } else {
            sum = arr_1_int / arr_2_int;

        }

    } else if (current_operation == 's') {
        sum = arr_1_int - arr_2_int;

    } else if (current_operation == 'a') {
        sum = arr_1_int + arr_2_int;

    } else if (current_operation == 'e') {
        sum = arr_1_int ** arr_2_int;

    }



    current_operation = '';

    // Checks length of number and updates screen as appropriate. 

    if (sum <= max && sum.toString().length < 17) {
        screen_array_1 = sum;
        update_screen(sum);
        for (let i = 0; i <= sum.toString().length; i++){
            if (sum.toString()[i] == '.') {
                can_add_point = false;
            }
        }

    } 
    else {
        screen_array_1 = ''
        console.log(sum.toString().length)
        update_screen('OVERFLOW')
        can_add_point = true;

    }
    array_1 = true;
    screen_array_2 = '';
    sum = 'ERROR';
})


// Adds click functionality to numbers

const buttons = document.getElementsByClassName('btn_1')

Array.from(buttons).forEach(function(element) {
    element.addEventListener('click', function(){
        
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

// Adds functionality to point

const point = document.getElementById('point')

point.addEventListener('click', function(){


    if (can_add_point == true) {
        can_add_point = false;
        const text = point.textContent;
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
        
    }
        
    })
