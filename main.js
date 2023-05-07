// tady je místo pro náš program

// Západ slunce
fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

const displaySunset = (data) => {
  const sunsetElm = document.querySelector('.sunset');
  sunsetElm.textContent = data.results.sunset;
};

fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
  .then((response) => {
    return response.json();
  })
  .then(displaySunset);

// Východ slunce
fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

const displaySunrise = (data) => {
  const sunriseElm = document.querySelector('.sunrise');
  sunriseElm.textContent = data.results.sunrise;
};

fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
  .then((response) => {
    return response.json();
  })
  .then(displaySunrise);

  // Nákup
  fetch('https://nakupy.kodim.app/api/sampleweek/mon/items')
  .then((response) => response.json())
  .then((data) => {
    const listElm = document.querySelector('.shopping-list');

    listElm.innerHTML = data.result
      .map(
        (item) => `
  <li class="item">
    <div class="item__name">${item.product}</div>
    <div class="item__amount">${item.amount}</div>
  </li>
  `,
      )
      .join('');
  });