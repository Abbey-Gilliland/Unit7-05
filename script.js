// These blocks of code set up the variables.
let age = 0
let day = 0

document.getElementById('submit').addEventListener('click', whatTime)

function whatTime () {
  age = document.getElementById('your-age').value
  age = parseInt(age)
  day = document.getElementById('week-day').value
  if (age <= 0) {
    alert('ERROR: age must be higher than 0')
  } else if (age < 18 && day != 'Sunday' && day != 'Saturday') {
    document.getElementById('time').innerHTML = 'Time for school!'
  } else if (age >= 18 && day != 'Sunday' && day != 'Saturday') {
    document.getElementById('time').innerHTML = 'Time for work!'
  } else {
    document.getElementById('time').innerHTML = 'Time to relax for the weekend!'
  }
}
