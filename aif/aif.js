var yourName = prompt("Please enter you name")
var surname = prompt("Please enter your surname name")
var lastName = prompt("Please enter your last name")
var yourAge = prompt("Please enter your age(ex. years old)")
var maleGender = confirm("For male gender kindly click on 'confirm' btn")
var infoName = lastName + ' ' + yourName + ' ' + surname
var numberYears = parseInt(yourAge)
var ageDays = numberYears * 365
var infiveYears = numberYears + 5
if (maleGender == true){
    var yourGender = "male"
    if (yourAge >= 63){
        var retired = "You are retired"
    }
    else{
        var retired = "You are not retired"
    }
}
else{
    var yourGender = "female"
    if (yourAge >= 58){
        var retired = "You are retired"
    }
    else{
        var retired = "You are not retired"
    }
}
alert("Your name is : " + infoName + '\n' +
      "Your age is : " + yourAge + '\n' +
      "Your age is equal " + ageDays + " days" + '\n' +
      "In five years youll be " + infiveYears + '\n' +
      "Your gender is " + yourGender + '\n' +
       retired)