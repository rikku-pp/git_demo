const apiUrl = 'https://content.viaplay.se/pc-se/serier/samtliga';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

const fetchShows = async () => {
  let data = await fetch(proxyUrl+apiUrl);
  data = await data.json();
  console.log(data);
  return data;
}

window.onload = async function() {
  let displaySection = document.getElementById('listing');
  const data = await fetchShows();
  const shows = data._embedded['viaplay:blocks'][0]._embedded['viaplay:products'];
  shows.forEach( show => {
    const newDiv = document.createElement('div');
    const parentNode = displaySection.parentNode;
    newDiv.textContent = show.publicPath;
    parentNode.insertBefore(newDiv, displaySection);
  });
};
