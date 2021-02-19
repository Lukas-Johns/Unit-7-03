let age = 0
document.getElementById('submit').addEventListener('click', myInput)
function myInput () {
  age = document.getElementById('start').value
  age = parseInt(age)
  if (age >= 99) {
    document.getElementById('response').innerHTML = 'Nice Try'
  } else if (age >= 17) {
    document.getElementById('response').innerHTML = 'You can watch R, PG-13, PG, and G rated movies with our service'
  } else if (age >= 13) {
    document.getElementById('response').innerHTML = 'You can watch PG-13, PG, and G rated movies with our service'
  } else if (age >= 5) {
    document.getElementById('response').innerHTML = 'You can watch PG and G rated movies with our service'
  } else if (age > 0) {
    document.getElementById('response').innerHTML = 'You are not old enough to use our service. The minimum age to begin using this service is +5'
  }
}
