function Navbar() {
    return (
        <>
            <div className="w-full flex justify-center py-4 bg-indigo-500 text-white">
                <div className="container flex justify-between text-lg mx-8">
                    RH Flow

                    <div className="flex gap-4">
                        <span>Home</span>
                        <span>Sobre Nós</span>
                        <span>Funcionários</span>
                        <span>Cadastrar</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar