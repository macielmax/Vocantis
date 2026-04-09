const selectFilter = document.querySelector('#options');
const searchInput = document.querySelector('#inCurso');
const qtdCursos = document.querySelector('#qtd-cursos');
const btnClear = document.querySelector('#clearFilter');
const cardContainer = document.querySelector('.cursos-grid-pagina');

const cursos = [
    {
        nome: "Análise e Desenvolvimento de Sistemas",
        descricao: "Especializa profissionais para atuar na área de TI, desenvolvendo, analisando, e gerenciando sistemas.",
        modalidade: "Presencial",
        tempoCurso: "6 semestres",
        tags: ["FATEC", "Informação", "Comunicação"]
    },
    {
        nome: "Gestão Empresarial",
        descricao: "Especializa gestores com visão estratégica para planejar atividades e otimizar processos em organizações.",
        modalidade: "Presencial, Remota",
        tempoCurso: "6 semestres",
        tags: ["FATEC", "Gestão", "Negócios"]
    },
    {
        nome: "Automação Industrial",
        descricao: "Especializa profissionais para projetar, implementar e manter automações nos mais variados sistemas industriais.",
        modalidade: "Presencial",
        tempoCurso: "6 semestres",
        tags: ["FATEC", "Controle", "Processos Industriais"]
    },
    {
        nome: "Radiologia",
        descricao: "Forma profissionais para realizar exames de radiologia, tomografia computadorizada, ressonância magnética e outros.",
        modalidade: "Presencial",
        tempoCurso: "6 semestres",
        tags: ["FATEC", "Ambiente", "Saúde"]
    },
    {
        nome: "Redes de Computadores",
        descricao: "Forma profissionais a instalar e configurar computadores e equipamentos de informática em rede.",
        modalidade: "Presencial",
        tempoCurso: "3 semestres",
        tags: ["ETEC", "Informação", "Comunicação"]
    },
    {
        nome: "Gestão Comercial",
        descricao: "Especializa gestores para gerir transações comerciais em grandes empresas, mas principalmente pequenas e médias.",
        modalidade: "Presencial",
        tempoCurso: "6 semestres",
        tags: ["FATEC", "Gestão", "Negócios"]
    },
    {
        nome: "Mecatrônica Industrial",
        descricao: "Especializa profissionais para projetar, implementar e manter automações nos mais variados sistemas industriais.",
        modalidade: "Presencial",
        tempoCurso: "4 semestres",
        tags: ["ETEC", "Controle", "Processos Industriais"]
    },
    {
        nome: "Enfermagem",
        descricao: "Forma profissionais que auxilia nos cuidados básicos de pacientes, aplicação de vacina, dar banhos, auxiliar em exames, entre outros.",
        modalidade: "Presencial",
        tempoCurso: "4 semestres",
        tags: ["ETEC", "Ambiente", "Saúde"]
    },
    {
        nome: "Desenvolvimento de Software Multiplataforma",
        descricao: "Especializa profissionais para atuar na área de TI, desenvolvendo, analisando, e gerenciando sistemas.",
        modalidade: "Presencial",
        tempoCurso: "6 semestres",
        tags: ["FATEC", "Informação", "Comunicação"]
    }
];

function aplicarFiltros() {
    const termoBusca = searchInput.value.toLowerCase();
    const tipoSelecionado = selectFilter.value;

    const cursosFiltrados = cursos.filter(curso => {
        const matchesTipo = tipoSelecionado === 'allTypes' || curso.tags[0] === tipoSelecionado;
        const matchesBusca = curso.nome.toLowerCase().includes(termoBusca);

        return matchesTipo && matchesBusca;
    });

    displayData(cursosFiltrados);
}

selectFilter.addEventListener('change', aplicarFiltros);

searchInput.addEventListener('input', aplicarFiltros);

const displayData = data => {
    qtdCursos.innerHTML = `Cursos: ${data.length}`;
    cardContainer.innerHTML = data.map(e => `
        <div class="card-curso-item">
            <div class="card-curso-header">
                <div>
                    <span class="tag-curso tag-${e.tags[0].toLowerCase()}">${e.tags[0]}</span>
                </div>
            </div>
            <h3 class="title">${e.nome}</h3>
            <p>${e.descricao}</p>
            <ul class="curso-detalhes-lista">
                <li><img src="img/pin.svg" alt="Modalidade"> ${e.modalidade}</li>
                <li><img src="img/clock.svg" alt="Duração"> ${e.tempoCurso}</li>
            </ul>
            <div class="curso-tags-bottom">
                <span class="tag-categoria">${e.tags[1]}</span>
                <span class="tag-categoria">${e.tags[2]}</span>
            </div>
        </div>
    `).join('');
    };

btnClear.addEventListener('click', () => {
    searchInput.value = '';
    selectFilter.value = 'allTypes';
    displayData(cursos);
});

window.addEventListener("load", () => displayData(cursos));