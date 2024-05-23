document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const output = document.getElementById('output');
    const clickSound = new Audio("sounds/click.mp3.wav");

    buttons.forEach(button => {
        // Add event listener for mouse click
        button.addEventListener('mousedown', () => {
            button.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.2) inset';
            clickSound.play();
        });
        
        button.addEventListener('mouseup', () => {
            button.style.boxShadow = '';
            handleButtonClick(button.innerText);
        });

        // Add event listener for keyboard press
        document.addEventListener('keydown', (event) => {
            if (event.key === button.innerText || event.key === button.value) {
                button.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.2) inset';
                clickSound.play();
            }
        });

        document.addEventListener('keyup', (event) => {
            if (event.key === button.innerText || event.key === button.value) {
                button.style.boxShadow = '';
                handleButtonClick(button.innerText);
            } else if (event.key === 'Enter') {
                handleButtonClick('=');
            }
        });
    });

    function handleButtonClick(value) {
        if (value === 'AC') {
            output.value = '';
        } else if (value === 'DEL') {
            output.value = output.value.slice(0, -1);
        } else if (value === '=') {
            try {
                output.value = eval(output.value);
            } catch (error) {
                output.value = 'Error';
            }
        } else {
            output.value += value;
        }
    }
});
