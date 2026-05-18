import { Link } from "react-router-dom";
import { Plus, UsersThree } from "@phosphor-icons/react";

function Funcionarios() {
    return (
        <div className="min-h-screen bg-slate-50 px-24 py-10">

            <div className="max-w-5xl mx-auto">

                <div className="flex items-center justify-between mb-12">

                    <div className="flex items-center gap-5">

                        <div className="bg-slate-200 p-4 rounded-2xl">
                            <UsersThree
                                size={32}
                                className="text-blue-600"
                            />
                        </div>

                        <div>
                            <h1 className="text-4xl font-bold text-slate-900">
                                Funcionários
                            </h1>

                            <p className="text-xl text-slate-600">
                                Nenhum funcionário cadastrado ainda.
                            </p>
                        </div>

                    </div>

                    <Link
                        to="/cadastro-funcionario"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition duration-200"
                    >
                        <Plus size={22} />
                        Novo funcionário
                    </Link>

                </div>

                <div className="bg-white border border-slate-300 rounded-2xl min-h-[400px] flex flex-col items-center justify-center text-center px-6">

                    <UsersThree
                        size={64}
                        className="text-slate-500 mb-6"
                    />

                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                        Comece cadastrando seu primeiro funcionário
                    </h2>

                    <p className="text-xl text-slate-600 max-w-xl mb-8">
                        Os funcionários cadastrados aparecerão aqui, com opções de editar e remover.
                    </p>

                    <Link
                        to="/cadastro-funcionario"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition duration-200"
                    >
                        <Plus size={22} />
                        Cadastrar funcionário
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Funcionarios;