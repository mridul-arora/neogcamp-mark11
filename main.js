const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#luckyNo");
const checkNumber = document.querySelector("#checkNumber");
const displayMessage = document.querySelector("#displayMsg");

checkNumber.addEventListener('click', function clickButtonHandler() {
    if (dateOfBirth.value && luckyNumber.value){
        console.log(dateOfBirth.value + " " + luckyNumber.value);
        
        const no = luckyNumber.value;
        const dob = removeHyphen(dateOfBirth.value);
        const sum = sumOfDob(dob);
        
        checkIfLucky(sum,no);
    }else{
        showText("❗Please enter both the blanks.");  
    }
});

function removeHyphen(date){
    return date.replaceAll("-","");
}

function sumOfDob(dob){
    let sum = 0;
    for(let i=0;i<dob.length;i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function showText(text){
    displayMessage.innerText = text;
}

function checkIfLucky(sum,no){
    if(sum%no===0){
        showText("🎉Voila! Your bday is lucky!");        
    }else{
        showText("😥Oops.. Do you wanna try again?");
    }
}
