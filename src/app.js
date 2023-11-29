/* const imgData = [
  { src: 'Git.png' },
  { src: 'github.png' },
    { src: 'html.webp' },
    { src: 'java.png' },
    { src: 'bash.jpg' },

];

let section = document.getElementById('container');

  imgData.map((data) => {
    // Create a new image element for each data object
    const imgElement = document.createElement('img');

    // Set the src attribute based on the data in the array
    imgElement.src = data.src;
    imgElement.id = "image";

    // Append the image element to the section
    section.appendChild(imgElement);
  });
*/

// Get references to the input and textarea elements and the sendEmail button
const recipient = 'raphaelakpor00@gmail.com';
const emailSubjectInput = document.getElementById('emailSubject');
const emailContentTextarea = document.getElementById('emailContent');
const sendEmailButton = document.getElementById('sendEmail');

// Add a click event listener to the button
sendEmailButton.addEventListener('click', function () {
  // Get the values from the input and textarea
  const subject = emailSubjectInput.value;
  const content = emailContentTextarea.value;

  // Create a "mailto" URL with the subject and body parameters
  const mailtoURL = `mailto:${encodeURIComponent(recipient)}
  ?subject=${encodeURIComponent(subject)}
  &body=${encodeURIComponent(content)}`;

  // Open the user's default email application with the "mailto" URL
  window.location.href = mailtoURL;
});

//for theme

let body = document.body;
const stuff = document.getElementById('toggler');
const theme = localStorage.getItem('theme');

stuff.addEventListener('click', setInitialTheme);

function setInitialTheme() {
  if (body.className.includes('light')) {
    body.classList.replace('light', 'dark');
    stuff.innerHTML = 'light_mode';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.replace('dark', 'light');
    stuff.innerHTML = 'dark_mode';
    localStorage.setItem('theme', 'light');
  }
}

if (theme) {
  body.classList.add(theme);
  if (theme.includes('light')) {
    stuff.innerHTML = 'dark_mode';
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light');
    stuff.innerHTML = 'light_mode';
    localStorage.setItem('theme', 'dark');
  }
}

// const changingText = document.querySelector('#name');

// const changeTextFunction = () => {
//   setTimeout(() => {
//     changingText.textContent = 'Code';
//   }, 0);
//   setTimeout(() => {
//     changingText.textContent = 'Design';
//   }, 1);
//   setTimeout(() => {
//     changingText.textContent = 'Develop';
//   }, 0);
// }

// changeTextFunction();
