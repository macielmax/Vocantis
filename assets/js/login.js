document.querySelector(".login-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const senha = document.querySelector("#senha").value.trim();

    // Validação dos campos vazios
    if (email === "" || senha === "") {
        Swal.fire({
            title: `<h1 style="font-family: 'Montserrat B'; font-size: 28px; color: #F3F4F6">Falha em realizar login!</h1>`,
            html: `<p style="font-family: 'Nunito R';">Preencha seu e-mail e senha para continuar.</p>`,
            icon: "warning",
            background: "#1F2937",
            color: "#9CA3AF"
        });
        return; 
    }

    const dadosLogin = new URLSearchParams();
    dadosLogin.append('email', email);
    dadosLogin.append('senha', senha);

    // Fazendo ligação com o servidor
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: dadosLogin
    })

    .then(response => {
        if (response.ok) {
            // Senha correta
            Swal.fire({
                title: `<h1 style="font-family: 'Montserrat B'; font-size: 28px; color: #F3F4F6">Bem-vindo de volta!</h1>`,
                html: `<p style="font-family: 'Nunito R';">Login realizado com sucesso.</p>`,
                icon: "success",
                background: "#1F2937",
                color: "#9CA3AF"
            }).then(() => {
                window.location.href = "/perguntas.html"; // Redireciona para a home ou página de testes
            });
        } else {
            // Senha ou email incorretos
            Swal.fire({
                title: `<h1 style="font-family: 'Montserrat B'; font-size: 28px; color: #F3F4F6">Falha na autenticação!</h1>`,
                html: `<p style="font-family: 'Nunito R';">E-mail ou senha estão incorretos.</p>`,
                icon: "error",
                background: "#1F2937",
                color: "#9CA3AF"
            });
        }
    })
    .catch(error => {
        // Erro caso o servidor (node server.js) esteja desligado
        Swal.fire({
            title: 'Erro de Conexão',
            html: `<h1 style="font-family: 'Montserrat B'; font-size: 28px; color: #F3F4F6">Servidor está com problemas técnicos."</h1>`,
            icon: "warning",
            background: "#1F2937",
            color: "#9CA3AF"
        });
    });
});