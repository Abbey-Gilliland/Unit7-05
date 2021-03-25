// These blocks of code set up the variables.
let age = 0
let day = 0
// This block of code activates the function that does all of the work.
document.getElementById('submit').addEventListener('click', whatTime)
// The function assigns the value of the textboxes to the variables. It then checks if they fill certain requirements. If the value of day is not saturday or sunday, then it either tells you to go to school, or to go to work depending on your age. If it is saturday or sunday, the program tells the user to relax for the weekend.
function whatTime () {
  age = document.getElementById('your-age').value
  age = parseInt(age)
  day = document.getElementById('week-day').value
  if (age <= 0) {
    // This is for when the input for age is something that won't work.
    alert('ERROR: age must be higher than 0')
  } else if (age < 18 && day != 'Sunday' && day != 'Saturday') {
    document.getElementById('time').innerHTML = 'Time for school!'
  } else if (age >= 18 && day != 'Sunday' && day != 'Saturday') {
    document.getElementById('time').innerHTML = 'Time for work!'
  } else {
    document.getElementById('time').innerHTML = 'Time to relax for the weekend!'
  }
}
