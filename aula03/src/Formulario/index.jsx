export default function Formulario(){
    return(
        <div>
            <form>
                <label>Nome:</label> <br />
                <input type="text" placeholder="Seu nome" />
                <br />
                <label>Email:</label> <br />
                <input type="text" placeholder="Seu email" />
                <br />
                <label>Idade:</label> <br />
                <input type="text" placeholder="Sua idade" />
                <br />
                <button>Enviar</button>
            </form>
        </div>
    )
}