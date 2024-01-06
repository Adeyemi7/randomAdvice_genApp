
const roller = document.querySelector('.roll');
const changeNow = document.querySelector('.change');
const advicesId = document.querySelector('.advicer');
const adviceHead = document.querySelector('advice');

// Function to fetch and display advice
function generateAdvice() {
  const apiUrl = 'https://api.adviceslip.com/advice';

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const adviceId = data.slip.id;
      const adviceText = data.slip.advice;

      // Update the elements with advice and its ID
      changeNow.textContent = adviceText;
      advicesId.textContent = `${adviceId}`;
      document.querySelector
    })
    .catch((error) => {
      console.log('Error:', error);
    });
}

roller.addEventListener('click', generateAdvice);

// advice ID when the page loads remains this
document.addEventListener('DOMContentLoaded', function () {
  changeNow.textContent = "It is easy to sit up and take notice, what's difficult is getting up and taking action.";
  advicer.textContent = "#117";
});
