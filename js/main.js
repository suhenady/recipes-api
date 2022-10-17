document.querySelector('.getButton').addEventListener('click', getFood)
//document.querySelector('.stopButton').addEventListener('click', stopFood)

//let foodArray = []

function getFood(){
  let food = document.querySelector('input').value
  let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+food

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        

        document.querySelector('#ingredientOne').innerText = '-'+data.meals[0].strIngredient1
        document.querySelector('#ingredientTwo').innerText = '-'+data.meals[0].strIngredient2
        document.querySelector('#ingredientThree').innerText = '-'+data.meals[0].strIngredient3
        document.querySelector('#instructions').innerText = data.meals[0].strInstructions
        document.querySelector('#category').innerText = `The food type is ${data.meals[0].strCategory}.`
        document.querySelector('#area').innerText = `The meal is ${data.meals[0].strArea}.`
        document.querySelector('h2').innerText = data.meals[0].strMeal
        document.querySelector('img').src = data.meals[0].strMealThumb
      })

      .catch(err => {
          console.log(`error ${err}`)
      });
      
      //start()

    }

/*function showFood() {
  document.querySelector('#ingredientOne').innerText = '-'+foodArray[i].strIngredient1
  document.querySelector('#ingredientTwo').innerText = '-'+foodArray[i].strIngredient2
  document.querySelector('#ingredientThree').innerText = '-'+foodArray[i].strIngredient3
  document.querySelector('#instructions').innerText = foodArray[i].strInstructions
  document.querySelector('h2').innerText = foodArray[i].strMeal
  document.querySelector('img').src = foodArray[i].strMealThumb
  i++
}*/

/*let intervalID

let i = 1

function start() {
  intervalID = setInterval(showFood, 5000);
}

function stopFood() {
  clearInterval(intervalID);
}*/
























/* document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('h2').innerText = localStorage.getItem('books')

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.title)
        if(!localStorage.getItem('books')){
          localStorage.setItem('books', data.title)
        }else{
         let books = localStorage.getItem('books') + " ; " + data.title 
         localStorage.setItem('books', books)
        }
        //put title into localStorage
        // let books = localStorage.getItem('books') + " ; " + data.title 
        // localStorage.setItem('books', books)
        document.querySelector('h2').innerText = localStorage.getItem('books')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
*/
