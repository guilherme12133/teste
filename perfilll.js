const form = document.getElementById("perfilForm");
const mensagem = document.getElementById("mensagem");

window.onload = () => {

    document.getElementById("nome").value =
        localStorage.getItem("nome") || "James Fernando";

};

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const nome = document.getElementById("nome").value;

    localStorage.setItem("nome", nome);

    mensagem.textContent = "Perfil atualizado com sucesso!";

    setTimeout(() => {
        mensagem.textContent = "";
    }, 3000);

});

document.querySelector(".btn-sair").addEventListener("click", () => {

    const confirmar = confirm("Deseja sair da conta?");

    if(confirmar){
        window.location.href = "login.html";
    }

});