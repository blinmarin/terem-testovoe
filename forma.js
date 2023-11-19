function serializeForm(formNode) {
    const { elements } = formNode
    const data = Array.from(elements)
        .map((element) => {
            const { name, value } = element
            return { name, value }
        })
    const dataJson = JSON.stringify(Object.assign({}, data));
    return dataJson
}

document.querySelector('#send').onclick = function (event) {
    event.preventDefault()
    let data = serializeForm(document.querySelector('.forma__items'))
    document.querySelector('.txt').innerHTML = data
    sendData(data)
}

async function sendData(data) {
    const url = `http://127.0.0.1:82?data=${data}`;

    const otherParam = {
        // mode: 'no-cors',
        headers: {
            "content-type": "application/json; charset=UTF-8",
        },
        method: "GET",
    };

    await fetch(url, otherParam)
        .then(response => {console.log(response)
        if(response.ok){
            alert('Данные отправлены')
            }
        }) 
        .catch(error => {console.log(error)
                alert('Ошибка')});

}