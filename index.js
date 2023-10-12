const [form] = document.querySelectorAll('form')

const dados = {
    nome: "Ada Lovelace",
    email: "ada@email.com",
    telefones: [
        {
            numero: "(11) 99123-4567",
            tipo: "Casa"
        }
    ],
    endereco: {
        logradouro: "Rua das programadoras",
        cidade: "Vale do silício",
        estado: "Codefornia",
        cep: "10100-100",
        pais: "Programaland"
    }
}

form.querySelector('input[name="name"]').value = dados.nome
form.querySelector('input[name="email"]').value = dados.email
form.querySelector('input[name="phone"]').value = dados.telefones[0].numero
//Recuperando o select do formulário;
const selectTypePhone = form.querySelector('select[name="selectTypePhone"]')

//Percorrendo cada option do select;
for (let i = 0; i < selectTypePhone.options.length; i++) {

    //Comparando o valor da option com o valor do dados.telefone.tipo;
    if (selectTypePhone.options[i].value === dados.telefones[0].tipo) {
        //A option que tiver o valor igual, é selecionada.
        selectTypePhone.options[i].selected = true
        break
    }

}
form.querySelector('input[name="publicPlace"]').value = dados.endereco.logradouro
form.querySelector('input[name="city"]').value = dados.endereco.cidade
form.querySelector('input[name="state"]').value = dados.endereco.estado
form.querySelector('input[name="ZipCode"]').value = dados.endereco.cep
form.querySelector('input[name="country"]').value = dados.endereco.pais

function submeterForm() {
    console.clear()
    const formulario = new FormData(form)

    for ([chave, valor] of formulario) {
        console.log(chave, valor)
    }
}