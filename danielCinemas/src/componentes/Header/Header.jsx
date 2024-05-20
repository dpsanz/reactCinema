import Navbar from "../Navbar/Navbar"

function Header() {
    return (
        <header className="flex justify-around">
            <span> Olá, visitante!</span>
            <h1> Bem-vindo ao Cine Tutopirulin</h1>
            <Navbar/>
        </header>
    )
}

export default Header