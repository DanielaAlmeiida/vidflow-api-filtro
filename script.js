const containerVideos = document.querySelector(".videos__container");

async function buscarEMostrarVideos() {

    try {
        const busca = await fetch("http://localhost:3000/videos");
        const videos = await busca.json();

        videos.forEach((video)=> {
            containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title"${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                        <img class="img-canal" src = "${video.imagem}" alt="Logo do Canal">
                        <h3 class="titulo-video">${video.titulo}</h3>
                        <p class="titulo-canal">${video.descricao}</p>

                        <p class="categoria" hidden>${video.categoria}</p>


                    </div>
                
            </li>
            `;
        
        })
    } catch(error) {
         containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error} </p>`;
    } 
    
}

buscarEMostrarVideos();


/* Filtro pela barra de pesquisa refatorado */
function filtrarPesquisa() {
    const videos = document.querySelectorAll(".videos__item")
    const valorFiltro = barraDePesquisa.value.toLowerCase();

    videos.forEach((video) => {
        const titulo = video.querySelector(".titulo-video").textContent.toLowerCase();

        video.style.display = valorFiltro ? titulo.includes(valorFiltro) ? "block" : "none" : "block";
    })
}
