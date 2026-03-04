//Só pode ter uma função exportada no modo default por arquivo
export default function Profissao(props) {
  //export default function Profissao({prof, sal}) { Aqui você passa os parametros de maneira separada, o props é um comando geral
  return (
    <div>
      <strong>Profissão: </strong>
      {props.prof} <br />
      <strong>Salário: </strong>R$ {props.sal}
      {/* Para usar os parametros de forma separada, não precisa passar o props, apenas {sal} ou {prof}*/}
    </div>
  );
}

export function Muquifo() {
  return (
    <div>
      <h3>Foda pae, só derrota!</h3>
    </div>
  );
}
