const name = document.getElementById('username');
const passsword = document.getElementById('pass');
const form = document.getElementById('form');
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e)=>{
	let messages = []
	if (name.value === '' || name.value == num) {
		messages.push('Name is required')
	}
	if (messages.length > 0) {
		e.preventDefault()
		errorElement.innerText = messages.join(', ')
	}
})