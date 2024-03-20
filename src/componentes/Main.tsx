import './Main.css';

function Main(){
    return(
        <main>
            <div className="estudante-box">
                <img className='estudante-foto' src="https://github.com/MiraMiranda.png" alt="Foto do GIT"/>
                <div className="informacoes">
                    <h3 className="estudante_nome">Rafael Miranda da Silva</h3>
                    <p className="estudante_descricao">Aluno do IFMS <br/>Curso Tec. Informatica para Internet <br />Turma 1022-A</p>
                    <a className='link-git' href="https://github.com/MiraMiranda">GitHub</a>
                </div>
            </div>

            
        </main>
    )
}

export default Main