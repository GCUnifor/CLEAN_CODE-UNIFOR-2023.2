let confirmarStatus = true;

function verificarConta(usuario) {
    if (confirmarStatus && usuario.isAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

let meuUsuario = { nome: "João", isAdmin: true };
verificarConta(meuUsuario);
