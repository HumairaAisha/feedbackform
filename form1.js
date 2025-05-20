const form = document.getElementById('myformB')
const textarea = document.getElementById('mytextField')

form.addEventListener('submit', function (event) {
   event.preventDefault()
   let userinputField = textarea.value.trim()
   if (userinputField === '') {
      alert("Please share your Feedbacks")
   }else {
      alert("Thank You \n Your Feedback has been Recorded")
      textarea.value = ''
   }
})