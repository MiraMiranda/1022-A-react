import './Main.css'
function Main(){
    return(
        <main>
            <div className="estudante-box">
                <img className='estudante-foto' src="https://github.com/MiraMiranda.png" alt="Estudante"/>
                <div className="informacoes">
                    <h3 className="estudante_nome">Rafael Miranda da Silva</h3>
                    <p className="estudante_descricao">Aluno do Curso de informatica para internet</p>
                    <a className="link-git" href="https://github.com/MiraMiranda">GitHub</a>
                    
                </div>
            </div>
        </main>
    )
}

export default Main