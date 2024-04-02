window.onload = function() { 
    renderTags(characters); 
    renderProject(characters);
    renderEnvironment(environment);
    renderDev(dev);
    renderFrameworks(frameworks);
    renderBugs(characters);

    const languageCard = document.getElementById('language-cards');
    const infoCard = document.getElementById('information');
    const cardShow = document.getElementById('card-show');
    const closeInfo = document.getElementById('close-info');

    languageCard.addEventListener('click', evt =>{        
        let imageCard = evt.target.src;
        console.log(imageCard);

        infoCard.classList.toggle('hidden');
        cardShow.src = imageCard;
    })

    closeInfo.addEventListener('click',(evt)=>{
        infoCard.classList.toggle('hidden');
    });

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

const environment = [
    'VESSE-ESTUDIO',
    'VESSE-CORDE',
    'NONTEPEDEMAIS',
    'PAICHARMO',
    'EKLIPSER',
    'UNRIUENGINOR',
    'JEITOBREINS',
    'ANDROIDS-TUDOR',
    'MARSS',
    'DARTYPEDE',
    'PADRE',
    'SIMPLAI-FORT'
]

const dev = [
    'TRAINEE',
    'JUNIOR', 
    'PLENO',
    'SENIOR'
]

const frameworks = [
    'FreeRTOS',
    'CMSIS',
    'ULTIMATE++',
    'QT',
    'NANA++'
]

function renderTags(tagList){
    const grid = document.querySelector('.grid');
    grid.innerHTML = '';

    tagList.forEach(tag => {

        const tagElement = document.createElement('div');
        const tagLabel = document.createElement('label');
        const tagImage = document.createElement('img');
        
        tagElement.className = 'img-card';

        tagImage.src = `../img/${tag}.png`;
        tagImage.className = 'img-cardTeste';

        tagLabel.textContent = tag;
        tagLabel.className = 'nameCharacter';
    
        grid.appendChild(tagElement);
        tagElement.appendChild(tagImage);
        tagElement.appendChild(tagLabel);    
    });
}

function renderProject(tagList){
    const grid2 = document.querySelector('.grid2');
    grid2.innerHTML = '';

    tagList.forEach(tag => {
        const tagElement = document.createElement('div');
        const tagLabel = document.createElement('label');
        const tagImage = document.createElement('img');
        
        tagElement.className = 'img-card';

        tagImage.src = `../img/${tag}.png`;
        tagImage.className = 'img-cardTeste';

        tagLabel.textContent = tag;
        tagLabel.className = 'nameCharacter';
    
        grid2.appendChild(tagElement);
        tagElement.appendChild(tagImage);
        tagElement.appendChild(tagLabel);    
    })
}

function renderEnvironment(tagList){
    const grid3 = document.querySelector('.grid3');
    grid3.innerHTML = '';

    tagList.forEach(tag => {
        const tagElement = document.createElement('div');
        const tagLabel = document.createElement('label');
        const tagImage = document.createElement('img');
        
        tagElement.className = 'img-card';

        tagImage.src = `../img/${tag}.png`;
        tagImage.className = 'img-cardTeste';

        tagLabel.textContent = tag;
        tagLabel.className = 'nameCharacter';
    
        grid3.appendChild(tagElement);
        tagElement.appendChild(tagImage);
        tagElement.appendChild(tagLabel);    
    })
}

function renderDev(tagList){
    const grid4 = document.querySelector('.grid4');
    grid4.innerHTML = '';

    tagList.forEach(tag => {
        const tagElement = document.createElement('div');
        const tagLabel = document.createElement('label');
        const tagImage = document.createElement('img');
        
        tagElement.className = 'img-card';

        tagImage.src = `../img/${tag}.png`;
        tagImage.className = 'img-cardTeste';

        tagLabel.textContent = tag;
        tagLabel.className = 'nameCharacter';
    
        grid4.appendChild(tagElement);
        tagElement.appendChild(tagImage);
        tagElement.appendChild(tagLabel);    
    })
}

function renderFrameworks(tagList){
    const grid5 = document.querySelector('.grid5');
    grid5.innerHTML = '';

    tagList.forEach(tag => {
        const tagElement = document.createElement('div');
        const tagLabel = document.createElement('label');
        const tagImage = document.createElement('img');
        
        tagElement.className = 'img-card';

        tagImage.src = `../img/${tag}.png`;
        tagImage.className = 'img-cardTeste';

        tagLabel.textContent = tag;
        tagLabel.className = 'nameCharacter';
    
        grid5.appendChild(tagElement);
        tagElement.appendChild(tagImage);
        tagElement.appendChild(tagLabel);    
    })
}

function renderBugs(tagList){
    const grid6 = document.querySelector('.grid6');
    grid6.innerHTML = '';

    tagList.forEach(tag => {
        const tagElement = document.createElement('div');
        const tagLabel = document.createElement('label');
        const tagImage = document.createElement('img');
        
        tagElement.className = 'img-card';

        tagImage.src = `../img/${tag}.png`;
        tagImage.className = 'img-cardTeste';

        tagLabel.textContent = tag;
        tagLabel.className = 'nameCharacter';
    
        grid6.appendChild(tagElement);
        tagElement.appendChild(tagImage);
        tagElement.appendChild(tagLabel);    
    })
}




const linguagens = [
    {
        "nome": "Assembele",
        "descricao": "Nascido nas profundezas das montanhas antigas, foi criado pelos espíritos da terra. Tem uma afinidade única com as pedras e os minerais. Sua arma é a Clava de Obsidiana(uma arma poderosa forjada por suas próprias mãos).",
        "frameworks": "../TCC/img/VESSE-ESTUDIO.png",
        "fusoes": "../TCC/img/CEH.png"
    }
]







