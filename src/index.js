let app = document.querySelector('.app');

let name_people = document.querySelector('#name');

const hamster = document.querySelector('.display_tap');

const currentWallet = document.querySelector('#wallet_coin');

const currentEnergy = document.querySelector('#energy');

const lvlProgress = document.querySelector('.level_progress');

const level = document.querySelector('#level');

const nav_mine = document.querySelector('.display_footer-mine');

const nav_game = document.querySelector('.display_footer-exchange');

const display_content = document.querySelector('.display_content');

const mine_content = document.querySelector('.mine_content');

const buyButtons = document.querySelectorAll('.buy_card');

console.log(buyButtons);

let buy_display = document.querySelector('.buy_display');


const data = {
    coin:0,
    energy:1000,
    profit:2,
    level:1,
    level_progress:0,
    earn_per_tap:1
}


function handleGreeting(){
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.src = './img/hamdter_poster.png';
    div.classList.add('greating');
    let value = prompt('введите ваше имя')

    name_people.innerHTML = value;

    div.appendChild(img);

    document.body.appendChild(div)

    setTimeout(function(){
        div.remove();
        app.style.display = 'flex'
     
    },6000)
}


buyButtons.forEach((value, index, array)=>{
    value.addEventListener('click',function(){
        let price = value.dataset.price;
        
        buy_display.style.display = 'flex';
        const buy_btn = document.querySelector('.buy_btn');
        buy_btn.onclick = function(){
            if(price < data.coin){
                data.coin = data.coin - price;
                data.profit = data.profit + 200;
            }

            buy_display.style.display = 'none'
        }
      

    })
})







function handleTap(e){
if(data.energy > 0){
    data.coin = data.coin + 1;
    data.energy = data.energy - 1;
    currentWallet.innerHTML = data.coin;
    currentEnergy.innerHTML = data.energy;
    hamster.classList.add('tap_mod');


    let timer = setTimeout(() => {
        hamster.classList.remove('tap_mod');
        clearTimeout(timer);
    },100);

}


 const money = document.createElement('img');
 money.src = './img/hamster_coin.png';

 money.classList.add('money');

 app.appendChild(money);


 money.style.left = e.clientX + 'px'
money.style.top = e.clientY - 30 + 'px'

setTimeout(()=>{
    money.remove();
},1000)


upgradeLevel();

}



function upgradeLevel(){

    if(data.level_progress >= 100){
        data.level = data.level + 1;
        data.earn_per_tap = data.earn_per_tap + 1;
        data.profit = data.profit * 2;
        data.level_progress = 0;

        lvlProgress.style.width = data.level_progress + '%';
        level.innerHTML = data.level;

    }
    data.level_progress = data.level_progress + 1;
    lvlProgress.style.width = data.level_progress + '%';
}






function earnPerSecond(){
    let profitInterval = setInterval(function(){
        data.coin = data.coin + data.profit;
        currentWallet.innerHTML = data.coin;
    },1000)
        
 
}



function energyRecovery(){
    let energyInterval = setInterval(function(){
        if(data.energy < 1000){
            data.energy = data.energy + 1;
            currentEnergy.innerHTML = data.energy;
        }
},1000)

}




function changeToMenu(){
    mine_content.style.display = 'flex'
        display_content.style.display = 'none'
}

function changeToGame(){
    mine_content.style.display = 'none'
        display_content.style.display = 'flex'
}











handleGreeting();
earnPerSecond();
energyRecovery();












nav_mine.addEventListener('click',changeToMenu);
nav_game.addEventListener('click',changeToGame);
hamster.addEventListener('click',handleTap);


hamster.addEventListener('click',handleTap);
