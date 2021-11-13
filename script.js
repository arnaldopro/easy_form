
function send() {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let dataNasc = document.getElementById('dataNasc').value
    let masculino = document.getElementById('masculino').value
    let feminino = document.getElementById('feminino').value
    let password = document.getElementById('password').value
    if(nome=='' && email=='' && dataNasc=='' && password==''){
        alert('Preencha todos os campos!')
    }
}