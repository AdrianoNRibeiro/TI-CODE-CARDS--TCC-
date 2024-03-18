window.onload = function() { 
    renderTags(characters); 
};

const characters = [
    'ASSEMBELE',
    'C.MAISMAIS',
    'CEH',
    'CESHARP',
    'CESSESSE',
    'DARTY',
    'ESKELLE',
    'F.ORTRAM',
    'GOH',
    'HAGATEMELER',
    'JAVAH',
    'JAVASCRIPTO',
    'KOTLEEN',
    'PAITON',
    'PEAGAPE',
    'PERULU',
    'RIUBI',
    'RUUSSTY',
    'SWIIFT',
    'TAI PIS CRIP',
    'VISUBAZICK',
];

function renderTags(tagList){
    const grid = document.querySelector('.grid');
    grid.innerHTML = '';

    tagList.forEach(tag => {
        //const tagElement = document.createElement('img');
        const tagElement = document.createElement('div');
        const tagLabel = document.createElement('label');
        const tagImage = document.createElement('img');
        
        tagElement.className = 'img-card';

        tagImage.src = `/img/${tag}.png`;
        tagImage.className = 'img-cardTeste';

        tagLabel.textContent = tag;
        tagLabel.className = 'nameCharacter';
    

        grid.appendChild(tagElement);
        tagElement.appendChild(tagImage);
        tagElement.appendChild(tagLabel); 
        
    });
}



