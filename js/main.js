//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink );

function getDrink(){
    const inputVal = document.querySelector('input').value
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +inputVal )
    .then(res => res.json())
    .then(data => {
        let random = Math.floor(Math.random() *6 )
        
        let drinkName = (data.drinks[random].strDrink)
        let drinkThumb = (data.drinks[random].strDrinkThumb)
        let drinkInst =(data.drinks[random].strInstructions)

        document.querySelector('h2').innerText = drinkName;
        document.querySelector('img').src = drinkThumb;
        document.querySelector('h3').innerText = drinkInst;

    })
    .catch(err => {
        console.log(`error ${err}`)
    });



}

