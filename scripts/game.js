const modalLinks = document.querySelectorAll("#project_links a");
const btnRepositorio = modalLinks[0];
const btnProjeto = modalLinks[1];

document.querySelectorAll("[data-project]").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const projeto = e.target.dataset.project;

        if (projeto === "sudoku") {
            btnProjeto.textContent = "Baixar Jogo";
            btnProjeto.href = "files/sudoku.jar";
            btnProjeto.download = "sudoku.jar";
        } else {
            btnProjeto.textContent = "Ver Projeto";
            btnProjeto.removeAttribute("download");
        }

        document.getElementById("modal").style.display = "flex";
    });
});