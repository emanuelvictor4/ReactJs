import { useState } from 'react';

export default function Formulario(){
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    const [dados, setDados] = useState({});

    function handleSubmit(evento){
        evento.preventDefault();
        
        if(nome === '' || email === '' || idade === ''){
            alert("Os campos estão vazios!!")
            return;
        }
        setDados({
            'nome': nome,
            'email': email,
            'idade': idade
        })
    }

    //Só pra exibir os dados
    //console.log("dados", dados);

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nome:</label> <br />
                <input type="text" placeholder="Seu nome" value = {nome} onChange={ (e) => setNome(e.target.value)}/>
                <br />
                <label>Email:</label> <br />
                <input type="text" placeholder="Seu email" value = {email} onChange={ (e) => setEmail(e.target.value)}/>
                <br />
                <label>Idade:</label> <br />
                <input type="text" placeholder="Sua idade" value = {idade} onChange={ (e) => setIdade(e.target.value)}/>
                <br />
                <button>Enviar</button>
            </form>

            <hr />
            <h2>Dados do Forms</h2>
            {
                Object.values(dados).length > 0 &&
                //v = value (valor) // i = indice
                Object.values(dados).map((v, i) => (
                    <div key = {i}>
                        <b> {v} </b>
                    </div>
                ))
            }



        </div>
    )
}