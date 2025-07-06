function init() 
{
    const buttons = document.querySelectorAll('.button');
    const displayElem = document.querySelector(".display");
    const clearBtn = document.querySelector("#clearBtn");

    let displayNumbers;
    displayElem.textContent = 0;

    buttons.forEach((button) => 
    {
        button.addEventListener('click', addToDisplay);
    });

    clearBtn.addEventListener('click', clearDisplay);

    function addToDisplay(event)
    {
        if(displayNumbers == undefined)
        {
            if (event.target.classList.contains('number')) 
            {
                displayNumbers = event.target.innerText;
            }
        }
        else
        {
            if (event.target.classList.contains('number')) 
            {
                displayNumbers += event.target.innerText;
            }

            if (event.target.classList.contains('operator')) 
            {
                displayNumbers += event.target.innerText;
            }

            if(event.target.classList.contains('equals'))
            {
                calculate();
            }
        }

        displayElem.textContent = displayNumbers;
    }

    function clearDisplay()
    {
        displayNumbers = undefined;
        displayElem.textContent = 0;
    }

    function calculate()
    {
        try
        {
            // taken from the internet
            displayNumbers = eval(displayElem.textContent);
            
            displayElem.textContent = displayNumbers;
        }
        catch(error)
        {
            displayElem.textContent = "Error";
        }
    }

}
document.addEventListener('DOMContentLoaded', init)