function Calculate() {
    let gender = document.getElementById('gender').value;
    let weight = document.getElementById('weight').value;
    let unitsNumber = document.getElementById('numberOfBeverages').value;
    let time = document.getElementById('time').value;

    let genderConst = 0;
    if(gender == 'Male')genderConst = 0.68;
    else genderConst = 0.55;

    let alcoholContent = 20*unitsNumber;

    let bodyWeight = weight * 1000;
    let bac = alcoholContent/(bodyWeight * genderConst) * 100 - time*0.015;


    document.getElementById('result').value = bac.toString();

}