import Navbar from "../Navbar/Navbar";

function Header() {
    return (
        <>
            <header className="flex justify-around bg-primary-raul text-white p-3">
                <span>Olá, visitante!</span>
                <h1> Bem-Vindo ao MUVI</h1>
                <Navbar/>
            </header>
        </>
    );
}

export default Header;