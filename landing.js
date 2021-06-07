let target = document.querySelector("#dynamic");


function randomString(){
    let stringArr = ["Welcome to my Page", "Hello my World", "THIS IS JAVASCRIPT"]
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
    let selectStringArr = selectString.split(""); 

    return selectStringArr;
}

//타이핑리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString()); 

}

function dynamic(randonArr){
    if(randonArr.length > 0){
        target.textContent += randonArr.shift();
        setTimeout(function(){
            dynamic(randonArr)
        },80);   
    }else{
        setTimeout(resetTyping, 2000);
    }
}

dynamic(randomString())

//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);