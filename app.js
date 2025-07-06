function init() 
{
    const buttons = document.querySelectorAll('.button');
    const displayElem = document.querySelector(".display");
    const clearBtn = document.querySelector("#clearBtn");

    let displayNumbers;
    displayElem.textContent = 0;

    let canAddOperator = false;

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
                canAddOperator = true;
            }
        }
        else
        {
            if (event.target.classList.contains('number')) 
            {
                displayNumbers += event.target.innerText;
                canAddOperator = true;
            }

            if (event.target.classList.contains('operator') && canAddOperator == true) 
            {
                displayNumbers += event.target.innerText;
                canAddOperator = false;
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
        canAddOperator = false;
    }

    function calculate()
    {
        // exception handling was learned form the internet
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