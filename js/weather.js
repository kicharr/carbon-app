// request to weather
//55.640721, 49.309943
const convertTemp = (celvin) => Math.floor(celvin - 273.15);
const convertPressure = (megaPascal) => Math.floor(megaPascal / 1.333)

const dataOption = {
    day: 'numeric',
    month: 'numeric'
}

let labels = [];

const tempDataSets = []

const humidityDataSets = []

const pressureDataSets = [];

const charts = [];

function createChart(ctx, datasets, id) {
    const chartIndex = charts.map(item => item.id).indexOf(id);
    if (chartIndex !== -1) {
        charts[chartIndex].chart.update();
        return;
    }
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets
        },

    });


    charts.push({id, chart});

}


fetch('https://api.openweathermap.org/data/2.5/forecast?appid=53cff6d53d5d0e62db130cd243ec6e32&lang=ru&lat=55.640721&lon=49.30994')


    .then(async function (resp) {
        const data = await resp.json();
        const newData = [];
        for (let i = 0; i < data.list.length; i++) {
            let add = true;
            if (newData.map(item => new Date(item.dt_txt).getDate()).indexOf(new Date(data.list[i].dt_txt).getDate()) !== -1) {
                add = false;
            }
            if (add) {
                newData.push(data.list[i])
            }
        }

        labels = labels.length ? labels : newData.map(item => new Date(item.dt_txt).toLocaleDateString('ru-RU', dataOption));

        tempDataSets.push({
            label: `${data.city.name}`,
            data: newData.map(item => convertTemp(item.main.temp)),
            borderColor: '#636F19',
            backgroundColor: '#636F19',
            borderWidth:5,
        });
        humidityDataSets.push({
            label: `${data.city.name}`,
            data: newData.map(item => convertTemp(item.main.humidity)),
            borderColor: '#636F19',
            backgroundColor: '#636F19',
            borderWidth:5,
        });
        pressureDataSets.push({
            label: `${data.city.name}`,
            data: newData.map(item => convertTemp(item.main.pressure)),
            borderColor: '#636F19',
            backgroundColor: '#636F19',
            borderWidth:5,
        });

        createChart(document.getElementById('temp').getContext('2d'), tempDataSets, 'temp');
        createChart(document.getElementById('humidity').getContext('2d'), humidityDataSets, 'humidity');
        createChart(document.getElementById('pressure').getContext('2d'), pressureDataSets, 'pressure');

    })
    .catch(function (e) {
        console.log(e);
        //catch any errors
    })


fetch('https://api.openweathermap.org/data/2.5/forecast?appid=53cff6d53d5d0e62db130cd243ec6e32&lang=ru&lat=55.27265&lon=49.27039').then(async res => {
    const data = await res.json();

    const newData = [];
    for (let i = 0; i < data.list.length; i++) {
        let add = true;
        if (newData.map(item => new Date(item.dt_txt).getDate()).indexOf(new Date(data.list[i].dt_txt).getDate()) !== -1) {
            add = false;
        }
        if (add) {
            newData.push(data.list[i])
        }
    }

    labels = labels.length ? labels : newData.map(item => new Date(item.dt_txt).toLocaleDateString('ru-RU', dataOption));

    tempDataSets.push({
        label: `${data.city.name}`,
        data: newData.map(item => convertTemp(item.main.temp)),
            borderColor: '#FA7921',
            backgroundColor: '#FA7921',
            borderWidth:5,
    });
    humidityDataSets.push({
        label: `${data.city.name}`,
        data: newData.map(item => convertTemp(item.main.humidity)),
            borderColor: '#FA7921',
            backgroundColor: '#FA7921',
            borderWidth:5,
    });
    pressureDataSets.push({
        label: `${data.city.name}`,
        data: newData.map(item => convertTemp(item.main.pressure)),
            borderColor: '#FA7921',
            backgroundColor: '#FA7921',
            borderWidth:5,
    });

    createChart(document.getElementById('temp').getContext('2d'), tempDataSets, 'temp');
    createChart(document.getElementById('humidity').getContext('2d'), humidityDataSets, 'humidity');
    createChart(document.getElementById('pressure').getContext('2d'), pressureDataSets, 'pressure');


}).catch((e) => {
    console.log(e);
});

fetch('https://api.openweathermap.org/data/2.5/weather?appid=53cff6d53d5d0e62db130cd243ec6e32&lang=ru&lat=55.640721&lon=49.30994').then(async res => {
    const data = await res.json();
    document.getElementById('first-city-name').innerText = data.name;
    document.getElementById('first-temp').innerText = convertTemp(data.main.temp) ;
    document.getElementById('first-pressure').innerText = convertPressure(data.main.pressure) ;
    document.getElementById('first-humidity').innerText = data.main.humidity;

})

fetch('https://api.openweathermap.org/data/2.5/weather?appid=53cff6d53d5d0e62db130cd243ec6e32&lang=ru&lat=55.27265&lon=49.27039').then(async res => {
    const data = await res.json();
    document.getElementById('second-city').innerText = data.name;
    document.getElementById('second-temp').innerText = convertTemp(data.main.temp);
    document.getElementById('second-pressure').innerText = convertPressure(data.main.pressure);
    document.getElementById('second-humidity').innerText = data.main.humidity;
})





