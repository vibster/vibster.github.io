let grid = document.getElementsByClassName('grid')[0]

for (var i = 0; i < 40; i += 1) {
    let panel = document.createElement('article')
    panel.className = 'article'
    panel.innerText = i

    // panel.style = 'grid-column: -3 / -1;'
    grid.appendChild(panel)
}