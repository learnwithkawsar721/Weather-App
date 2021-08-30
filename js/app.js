document.getElementById('search-btn').addEventListener('click', () => {
    const inputField = document.getElementById('search-input');
    const inputValue = inputField.value;
    inputField.value = '';
    searchWeather(inputValue);
})


const searchWeather = async inputData => {
    const appKey = 'ef48f2ccb4053591c9035f5b3ea1df20';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&appid=${appKey}`;
    // console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    const {
        main,
        icon
    } = data.weather[0];
    console.log(main);

    const weatherArea = document.getElementById('weather-area');
    weatherArea.innerHTML = `
    <img src="http://openweathermap.org/img/w/${icon}.png" alt="">
    <h1>${data.name}</h1>
    <h3><span>${data.coord.lat}</span>&deg;C</h3>
    <h1 class="lead">${main}</h1>
    `;
}