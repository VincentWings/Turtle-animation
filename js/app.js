const turtle = document.querySelector('.turtle');
let x = 0; // horizontal position of the turtle
let y = 0; // vertical position of the turtle
const speed = 20; // speed at which the turtle moves
let flipped = false; // whether the turtle is flipped horizontally
let rotate = 0; // rotation of the turtle

function handleKeyDown(e) {

    console.log(e.key); // log the pressed key to the console

    // if it's not an arrow key or the space key, do nothing
    if (!e.key.includes('Arrow') && !e.key.includes(' ')) {
        return;
    }

    // determine the action based on the pressed key
    switch (e.key) {
        case 'ArrowUp':
            y = y - 1; // move the turtle up
            rotate = -90; // rotate the turtle to face upward
            break;
        case 'ArrowDown':
            y = y + 1; // move the turtle down
            rotate = 90; // rotate the turtle to face downward
            break;
        case 'ArrowLeft':
            x = x - 1; // move the turtle left
            rotate = 0; // set the rotation to 0
            flipped = true; // flip the turtle horizontally
            break;
        case 'ArrowRight':
            x = x + 1; // move the turtle right
            rotate = 0; // set the rotation to 0
            flipped = false; // unflip the turtle
            break;
        case ' ':
            x = 0; // reset the horizontal position
            y = 0; // reset the vertical position
            flipped = false; // unflip the turtle
            rotate = 0; // set the rotation to 0
            break
        default:
            console.log('Not a valid move'); // do nothing for other keys
            break;
    }

    // update the CSS variables to move the turtle
    turtle.style.setProperty('--x', `${x * speed}px`);
    turtle.style.setProperty('--y', `${y * speed}px`);
    turtle.style.setProperty('--rotateX', `${flipped ? '180deg' : 0}`);
    turtle.style.setProperty('--rotate', `${rotate}deg`);
}

// listen for keydown events and run the handleKeyDown function
window.addEventListener('keydown', handleKeyDown);