const generateBtn = document.querySelector('.diceBtn')
const advice = document.querySelector('.text')
const adviceID = document.querySelector('.advice_ID')

const URL = 'https://api.adviceslip.com/advice'

function generateAdvice() {
	fetch(URL)
		.then(res => res.json())
		.then(data => {
			advice.innerText = `"${data.slip.advice}"`
			adviceID.innerText = data.slip.id
		})
		.catch(err => console.log(err))
}

generateBtn.addEventListener('click', generateAdvice)
