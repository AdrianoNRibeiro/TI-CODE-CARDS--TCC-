window.onload = function() { 
    const languageCard = document.getElementById('language-cards');
    const projectCard = document.getElementById('project-cards');
    const infoCard = document.getElementById('information');
    const cardShow = document.getElementById('card-show');
    const closeInfo = document.getElementById('close-info');
    const cardName = document.getElementById('card-name');
    const description = document.getElementById('description');
    const cardFrameworks = document.getElementById('card-framework');

    renderCards(characters, '.grid');
    renderCards(projects, '.grid2');
    renderCards(environment, '.grid3');
    renderCards(dev, '.grid4');
    renderCards(frameworks, '.grid5');
    renderCards(characters, '.grid6');


    languageCard.addEventListener('click', evt =>{        
        let imageCard = evt.target.src;
       
        infoCard.classList.toggle('hidden');
        cardShow.src = imageCard;

        const nameCard = evt.target.parentNode.lastChild;

        cardName.innerHTML = nameCard.innerHTML;
        description.innerHTML = assembele.descricao;

        console.log(assembele.frameworks);
        cardFrameworks.src= assembele.frameworks;     
    })

    closeInfo.addEventListener('click',(evt)=>{
        infoCard.classList.toggle('hidden');
    });

    projectCard.addEventListener('click', evt =>{
        let imageCard = evt.target.src;

        infoCard.classList.toggle('hidden');
        cardShow.src = imageCard;

        const nameCard = evt.target.parentNode.lastChild;

        cardName.innerHTML = nameCard.innerHTML;
        description.innerHTML = assembele.descricao;

        console.log(assembele.frameworks);
        cardFrameworks.src = assembele.frameworks;
    })

};

const assembele = {
    "nome": "ASSEMBELE",
    "descricao": "Nascido nas profundezas das montanhas antigas, foi criado pelos espíritos da terra. Tem uma afinidade única com as pedras e os minerais. Sua arma é a Clava de Obsidiana(uma arma poderosa forjada por suas próprias mãos).",
    "frameworks": "../img/FreeRTOS.png",
    "fusoes": "../TCC/img/CEH.png"
}

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

const projects = [ 'TIPS CRYPTO', 'WEBSPAGER', 'FRONTENDOR', 'FRONTENDORZ', 'BACKNET' ];

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

const bugs = [];

function renderCards(listCards, campGrids){  
    const grids = document.querySelector(campGrids);
    
    grids.innerHTML = '';

    listCards.forEach(tag => {
        const tagElement = document.createElement('div');
        const tagLabel = document.createElement('label');
        const tagImage = document.createElement('img');
        
        tagElement.className = 'img-card';

        tagImage.src = `../img/${tag}.png`;
        tagImage.className = 'img-cardTeste';

        tagLabel.textContent = tag;
        tagLabel.className = 'nameCharacter';
    
        grids.appendChild(tagElement);
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











