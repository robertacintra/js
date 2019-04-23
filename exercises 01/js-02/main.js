window.addEventListener('DOMContentLoaded', function(event) {
    const getNumber = document.querySelector('#getNumber');
    getNumber.addEventListener('click', function() {
        const numberValue = document.querySelector('#number').value;
        if (isNaN(numberValue) || numberValue == "" || numberValue == " ") {
            alert('Por favor digite um número');
        }
        else {
            if (numberValue == 0) {
                SpeechRecognitionResult.innerHTML = `s{numberValue} é neutro`;
            } else if (numberValue > 0) {
                SpeechRecognitionResult.innerHTML = `s{numberValue} é positivo`;
            } else {
                SpeechRecognitionResult.innerHTML = `s{numberValue} é negativo`;
            }
        };
    });
});

/* window.addEventListener('DOMContentLoaded', function(event) {

    const getNumber = document.querySelector('#getNumber');

    getNumber.addEventListener('click', function (){
        const numberValue = document.querySelector('#number').value;
        const result = document.getElementById('result');

            if (isNaN(numberValue) || numberValue == "" || numberValue == " " ) {
                alert('Por favor digite um número');
            } else {
                if (numberValue == 0) {
                    result.innerHTML = `${numberValue} é neutro`;
            } else if (numberValue > 0) {
                result.innerHTML = `${numberValue} é positivo`;
            } else {
                result.innerHTML = `${numberValue} é negativo`;
            }
        };

    });

}); */