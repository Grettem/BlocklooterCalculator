console.log('Script working!');

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const closeButton = modal.querySelector('.delete');

    // Abre el modal al cargar la página
    if (modal) {
      modal.classList.add('is-active');
      void modal.offsetWidth;
    }
  
    // Cierra el modal al hacer clic en el botón de cerrar
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        modal.classList.remove('is-active');
      });
    }
  });

function calcRewards(blockReward, crypto) {
    return [blockReward*6, blockReward*6*24, blockReward*6*24*30, crypto + " REWARDS\n------------\nEarnings per block: " + blockReward.toFixed(18) + " " + crypto + "\nEarnings per hour: " + (blockReward*6).toFixed(18) + " " + crypto + "\nEarnings per day: " + (blockReward*6*24).toFixed(18) + " " + crypto + "\nEarnings per month: " + (blockReward*6*24*30).toFixed(18) + " " + crypto]
}

function calculate() {
            btc = 'btc'
            ltc = 'ltc'
            doge = 'doge'
            bnb = 'bnb'

            poolPower = Number(document.getElementById('poolpower').value);
            userPower = Number(document.getElementById('userpower').value);
            currency = document.getElementById('currency').value;
            blockReward = Number(document.getElementById('reward').value);

            userReward = (userPower/poolPower) * blockReward;
            // userRewardHour = userReward * 6;
            // userRewardDay = userRewardHour * 24;
            // userRewardMonth = userRewardDay * 30;

            if (currency == btc) {
                let [hourReward, dayReward, monthReward, text] = calcRewards(userReward, 'BTC')
                document.getElementById('resultarea').innerText = text
            } else if (currency == ltc) {
                let [hourReward, dayReward, monthReward, text] = calcRewards(userReward, 'LTC')
                document.getElementById('resultarea').innerText = text
            } else if (currency == doge) {
                let [hourReward, dayReward, monthReward, text] = calcRewards(userReward, 'DOGE')
                document.getElementById('resultarea').innerText = text
            } else if (currency == bnb) {
                let [hourReward, dayReward, monthReward, text] = calcRewards(userReward, 'BNB')
                document.getElementById('resultarea').innerText = text
            }
}