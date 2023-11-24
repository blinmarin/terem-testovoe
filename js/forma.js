function getDataForm(form) {
    let formData = new FormData(form);
    let dataObj = {}
    for (let [name, value] of formData) {
        dataObj[name] = value
    }
    return dataObj
}

function showData(){
    let data = getDataForm(document.getElementById('forma__items'))
    document.querySelector('.txt').innerHTML = JSON.stringify(data)
    sendData(data)
}

document.querySelector('#send').onclick = function (event){
    event.preventDefault()
    showData()
}

async function sendData(data) {
    let url = `http://127.0.0.1:82?number1=${data.number1}&number2=${data.number2}&number3=${data.number3}&number4=${data.number4}&number5=${data.number5}&value1=${data.value1}&value2=${data.value2}`;

    const otherParam = {
        headers: {
            "content-type": "application/json; charset=UTF-8",
        },
        method: "GET",
    };

    await fetch(url, otherParam)
        .then(response => {
            if (response.ok) {
                alert('Данные отправлены')
            }
            else {
                alert('Ошибка')
            }
        })


}