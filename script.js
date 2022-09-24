let screen_array_1 = ''
let screen_array_2 = ''

function update_screen (screen_array) {
    const screen = document.getElementById('number-display')
    screen.textContent = screen_array;
}
update_screen(screen_array_1);

function update_array(digit){
    
}





// Adds click functionality to buttons

const buttons = document.getElementsByClassName('btn_1')

Array.from(buttons).forEach(function(element) {
    element.addEventListener('click', function(a){
        
        const text = element.textContent;

        screen_array_1 += text;
        screen_array_1 = screen_array_1.replace(/\s/g, '');

        
        update_screen(screen_array_1);
    })
})

