let word = document.querySelector('.w')
let timer_intertal;
let timer = 0;
let cnt = 0;

let time = document.querySelector('.time');

word.addEventListener('click', () => {


    cnt += 1
    word.innerText = cnt;

    if (cnt == 1){

        timer_intertal = setInterval(() => {
            timer += 1/60;
            time.innerText = `${timer}`;
            time.innerText = timer.toFixed(0);
        }, 1000/60);

        setTimeout(function() {
            clearInterval(timer_intertal)
            word.disabled = true;
            alert(`${cnt}번 클릭함`)

            location.reload(true);

        }, 5000);

    }

})



