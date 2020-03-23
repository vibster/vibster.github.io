let grid = document.getElementsByClassName('grid')[0];

function register(event) {
  let objectHierarchy = event.path;
  for (var obj of objectHierarchy) {
    if (obj.tagName == 'ARTICLE') {
      console.log(obj.id);
      break;
    }
  }
}

fetch('data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (var i = 0; i < data.articles.length; i += 1) {
      let panel = document.createElement('article');
      panel.id = i;
      panel.className = 'article';
      panel.innerHTML = `<h4><a href="${data.articles[i].url}">${data.articles[i].title}</a></h4>` + (data.articles[i].urlToImage != null ? `<img src="${data.articles[i].urlToImage}" />` : ``) + `<p>${data.articles[i].description}</p>`;
      let priority = Math.floor(Math.random() * 4) + 1;
      panel.style = `grid-column: span ${priority};`;
      panel.addEventListener("click", register);
      grid.appendChild(panel);
    }
  });