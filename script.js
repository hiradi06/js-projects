document
  .getElementById('simpleInterest')
  .addEventListener('click', function () {
    let principal = prompt('Enter the principal amount:');
    let rate = prompt('Enter the rate of interest:');
    let time = prompt('Enter the time period:');
    let simpleInterest = (principal * rate * time) / 100;
    alert('Simple Interest is: ' + simpleInterest);
  });

document
  .getElementById('compoundInterest')
  .addEventListener('click', function () {
    let principal = prompt('Enter the principal amount:');
    let rate = prompt(
      'Enter the annual interest rate (in decimal form, e.g., 0.05 for 5%):'
    );
    let timesCompounded = prompt(
      'Enter the number of times interest is compounded per year:'
    );
    let years = prompt('Enter the number of years:');
    let compoundInterest =
      principal *
        Math.pow(1 + rate / timesCompounded, timesCompounded * years) -
      principal;
    alert('Compound Interest is: ' + compoundInterest);
  });

document
  .getElementById('temperatureConverter')
  .addEventListener('click', function () {
    let choice = prompt(
      "Type '1' to convert Celsius to Fahrenheit or '2' to convert Fahrenheit to Celsius:"
    );
    if (choice == '1') {
      let celsius = prompt('Enter temperature in Celsius:');
      let fahrenheit = (celsius * 9) / 5 + 32;
      alert(celsius + '°C is ' + fahrenheit + '°F');
    } else if (choice == '2') {
      let fahrenheit = prompt('Enter temperature in Fahrenheit:');
      let celsius = ((fahrenheit - 32) * 5) / 9;
      alert(fahrenheit + '°F is ' + celsius + '°C');
    } else {
      alert('Invalid choice');
    }
  });

document
  .getElementById('currencyConverter')
  .addEventListener('click', function () {
    let amount = prompt('Enter the amount to convert:');
    let exchangeRate = prompt('Enter the exchange rate:');
    let convertedAmount = amount * exchangeRate;
    alert('Converted amount is: ' + convertedAmount);
  });

document
  .getElementById('cgpaCalculator')
  .addEventListener('click', function () {
    let totalGradePoints = prompt('Enter the total grade points:');
    let totalCreditUnits = prompt('Enter the total credit units:');
    let cgpa = totalGradePoints / totalCreditUnits;
    alert('CGPA is: ' + cgpa);
  });
