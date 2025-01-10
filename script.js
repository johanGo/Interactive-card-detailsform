let containerCountriess = document.getElementById("containerCountries");
let containerFilterRegions = document.getElementById("filterRegions");
let containerSearchCountry = document.getElementById("searchCountry");
let allRegions = [];
let uniqueRegions;
let yaSeEjecutó = false;

containerFilterRegions.addEventListener('change', () => {
  if (containerFilterRegions.value == 'default') {
    cargarPaises();
  } else {
    function cargarPaisesRegion() {
      fetch(`https://restcountries.com/v3.1/region/${containerFilterRegions.value}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          let countryHTML = '';
          data.forEach(item => {
            countryHTML += `
                          <div class="firstCountry">
                            <img class="imageCountry" src="${item.flags.png}" alt="">
                            <div class="containerDataCountry">
                              <span class="nameCountry">${item.name.common}</span>
                              <div class="populationCountry">Population: <span>${item.population}</span></div>
                              <div class="regionCountry">Region: <span>${item.region}</span></div>
                              <div class="capitalCountry">Capital: <span>${item.capital}</span></div>
                            </div>
                          </div>
                          `;
            containerCountriess.innerHTML = countryHTML;
          });
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    }
    cargarPaisesRegion();
  }
})

function cargarPaises() {
  fetch(`https://restcountries.com/v3.1/name/deutschland`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      let countryHTML = '';
      data.forEach(item => {
        countryHTML += `
                      <div class="firstCountry">
                        <img class="imageCountry" src="${item.flags.png}" alt="">
                        <div class="containerDataCountry">
                          <span class="nameCountry">${item.name.common}</span>
                          <div class="populationCountry">Population: <span>${item.population}</span></div>
                          <div class="regionCountry">Region: <span>${item.region}</span></div>
                          <div class="capitalCountry">Capital: <span>${item.capital}</span></div>
                        </div>
                      </div>
                      `;
        containerCountriess.innerHTML = countryHTML;
        allRegions.push(item.region)   //añade las regiones al array regions
      });
      if (!yaSeEjecutó) {
        uniqueRegions = [...new Set(allRegions)] // array que contiene solo la unica region
        console.log(uniqueRegions)
        uniqueRegions.forEach(item => {
          let tagOption = document.createElement('option');
          tagOption.setAttribute('value', item);
          tagOption.innerHTML = item;
          containerFilterRegions.appendChild(tagOption)
          yaSeEjecutó = true;
        })
      }
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}
cargarPaises();

containerSearchCountry.addEventListener('input',(event)=>{
  console.log(event.target.value)
})

