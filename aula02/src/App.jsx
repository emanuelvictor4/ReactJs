
function Aluno(props) {
  return (
    <div>
      <span>
        <h3>
          Seja bem vindo {props["nome"]}
        </h3>
        <br />

        Sua idade é {props.idade} anos
        <p>Sexo: {props.sexo}</p>

        <p>Redes sociais</p>
        <Social 
          rede = 'Facebook' 
          url={`https://www.facebook.com/${props.user}`} 
        />

        <Social 
          rede = 'Instagram' 
          url={`https://www.instagram.com/${props.user}`}
        />  
        

        <hr />
      </span>
    </div>
  )
}

const Social = ({ rede, url }) => {
  return (
    <>
      <a href={url}> {rede} </a>
      &nbsp; &nbsp;
    </>
  )
}

function App() {

  return (
    <div>

      <Aluno
        nome="Maneco"
        idade={18}
        user='m4neco.zip'
      />

      <Aluno
        nome="Bueno"
        idade={18}
        sexo="Macho"
        user='buenoshawty'
      />

    </div>
  )
}

export default App
