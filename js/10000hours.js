const startbutton = document.querySelector(".start_btn");
const openbutton = document.querySelector(".modal_btn");
const closebutton = document.querySelector(".close_btn");
const sharebutton = document.querySelector(".share_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const loading = document.querySelector(".result_loading");

function calculaor(){
    const fieldValue = document.querySelector("#field_value");
    let timeValue = document.querySelector("#time_value");
    let timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    if(fieldValue.value == "")
    {
        alert("입력되지 않았습니다.");
        fieldValue.focus();
        return false;
    }
    else if(timeValue.value == "")
    {
        alert("입력되지 않았습니다.");
        timeValue.focus();
        return false;
    }
    else if(timeValue_int > 24)
    {
        alert("잘못된 값입니다. 24이하의 값을 입력해주세요")
        return false;
    }

    result.style.display = 'none';
    loading.style.display = 'flex';

    setTimeout(function()
    {
        result.style.display = 'none';
        loading.style.display = 'flex';
        fieldResult.innertext = fieldValue.value;
        timeResult.innertext = parseInt((10000/timeValue_int), 10);
    }, 1800); 
}
function openmodal(){
    modal.style.display ='flex'
}
function colsemodal(){
    modal.style.display ='none'
    
}

window.onclick = function (event){
    if(event.target == modal)
    {
        colsemodal();
    }
}
function copyurl(){
    let url = window.location.href;
    let temp = document.createElement(temp);

    document.body.appendChild(temp);    
    temp.value = url;
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);

    alert("url이 복사되었습니다.");


}
sharebutton.addEventListner('click',copyurl);
openbutton.addEventListner('click',openmodal);
closebutton.addEventListner('click',colsemodal);
startbutton.addEventListner('click',calculaor);