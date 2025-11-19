document.querySelector("#btnCriarConta").addEventListener("click", (event) => {
    event.preventDefault();

    // Coletando valores com querySelector
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const telefone = document.querySelector("#telefone").value;
    const idade = document.querySelector("#idade").value;
    const cidade = document.querySelector("#cidade").value;
    const escolaridade = document.querySelector("#escolaridade").value;

    // Salvando no LocalStorage
    const dadosUsuario = {
        nome,
        email,
        telefone,
        idade,
        cidade,
        escolaridade
    };

    localStorage.setItem("usuario", JSON.stringify(dadosUsuario));

    // Pop-up de confirmação
    alert("Usuário cadastrado com sucesso!");

    // Redirecionar
    window.location.href = "perguntas.html";
});