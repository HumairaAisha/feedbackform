const form = document.getElementById('feedbackForm');
const textarea = document.getElementById('messageInput')
const userText = document.getElementById('displayText')

textarea.addEventListener('input', updateText);
function updateText(event) {
   userText.textContent = event.target.value.trim();
   
}

form.addEventListener('submit', function (event) {
   event.preventDefault();
   let userInput = textarea.value.trim()
   if (userInput === '') {
      alert("Please share your Feedback");
   } else {
      alert("Thank You \nHere is a copy of Your Feedback Response: " + userText.textContent)
      textarea.value = '';
      userText.textContent = '';
      
   }
})