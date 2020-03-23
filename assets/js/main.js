let grid = document.getElementsByClassName('grid')[0];

fetch('data.json')
  .then((response) => {
      return response.json();
  })
  .then((data) => {
    for (var i = 0; i < data.articles.length; i += 1) {
        let panel = document.createElement('article');
        panel.className = 'article';
        panel.innerHTML = `<h4>${data.articles[i].title}</h4><p>${data.articles[i].description}</p>`;
        let startTrack = Math.floor(Math.random() * 4) + 1;
        let endTrack = Math.floor(Math.random() * 4) + 1;
        panel.style = `grid-column: ${startTrack} / ${endTrack};`;
        grid.appendChild(panel);
    }
  });