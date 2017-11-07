function Calculate() {
    let gender = document.getElementById('gender').value;
    let weight = document.getElementById('weight').value;
    let beverageType = document.getElementById('beverage').value;
    let beveragesNumber = document.getElementById('numberOfBeverages').value;
    let time = document.getElementById('time').value;

    let genderConst = 0;
    if(gender == 'Male')genderConst = 0.68;
    else genderConst = 0.55;

    let servingInGramms = 500;
    let alcoholPercentage = 10;

    let alcoholContent = servingInGramms * alcoholPercentage / 100;

    let bodyWeight = weight * 1000;
    let bac = alcoholContent/(bodyWeight * genderConst) * 100;


    document.getElementById('result').value = bac.toString();

}