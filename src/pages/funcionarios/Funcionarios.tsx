import { Plus, UsersThree, PencilSimple, Trash } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useToast } from "../../components/toast/ToastProvider";
import type Funcionario from "../../models/Funcionario";
import { buscar, deletar } from "../../services/Service";

function Funcionarios() {
    const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
    const toast = useToast();

    async function buscarFuncionarios() {
        try {
            await buscar("/funcionario", setFuncionarios);
        } catch (error) {
            console.log(error);
            toast.error("Erro ao buscar funcionários!");
        }
    }

    async function deletarFuncionario(id: number) {
        const confirmar = await toast.confirm("Tem certeza que deseja desligar este funcionário?");

        if (!confirmar) return;

        try {
            await deletar(`/funcionario/${id}`);
            toast.success("Funcionário desligado com sucesso!");
            buscarFuncionarios();
        } catch (error) {
            console.log(error);
            toast.error("Erro ao desligar funcionário!");
        }
    }

    useEffect(() => {
        buscarFuncionarios();
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 px-24 py-10">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-5">
                        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-4 rounded-2xl shadow-md">
                            <UsersThree size={32} className="text-white" />
                        </div>

                        <div>
                            <h1 className="text-4xl font-bold text-slate-900">
                                Funcionários
                            </h1>

                            <p className="text-xl text-slate-600">
                                {funcionarios.length === 0
                                    ? "Nenhum funcionário cadastrado ainda."
                                    : `${funcionarios.length} funcionário(s) cadastrado(s).`}
                            </p>
                        </div>
                    </div>

                    <Link
                        to="/cadastro-funcionario"
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-bold px-6 py-3 rounded-xl shadow-sm transition-colors duration-200 hover:from-blue-700 hover:to-cyan-600"
                    >
                        <Plus size={22} />
                        Novo funcionário
                    </Link>
                </div>

                {funcionarios.length === 0 ? (
                    <div className="bg-white border border-slate-300 rounded-2xl min-h-[400px] flex flex-col items-center justify-center text-center px-6">
                        <UsersThree size={64} className="text-slate-500 mb-6" />

                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            Comece cadastrando seu primeiro funcionário
                        </h2>

                        <p className="text-xl text-slate-600 max-w-xl mb-8">
                            Os funcionários cadastrados aparecerão aqui, com opções de editar e remover.
                        </p>

                        <Link
                            to="/cadastro-funcionario"
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-bold px-6 py-3 rounded-xl shadow-sm transition-colors duration-200 hover:from-blue-700 hover:to-cyan-600"
                        >
                            <Plus size={22} />
                            Cadastrar funcionário
                        </Link>
                    </div>
                ) : (
                    <div className="bg-white border border-slate-300 rounded-2xl overflow-hidden">
                        <div className="grid grid-cols-5 gap-4 px-6 py-4 border-b border-slate-300 font-semibold text-slate-700">
                            <span>Nome</span>
                            <span>Cargo</span>
                            <span>Departamento</span>
                            <span>Salário</span>
                            <span className="text-center">Ações</span>
                        </div>

                        {funcionarios.map((funcionario) => (
                            <div
                                key={funcionario.id}
                                className="grid grid-cols-5 gap-4 px-6 py-5 items-center border-b border-slate-200"
                            >
                                <span className="font-semibold">{funcionario.nome}</span>
                                <span>{funcionario.cargo}</span>
                                <span>{funcionario.departamento}</span>
                                <span>
                                    {Number(funcionario.salario).toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </span>

                                <div className="flex items-center justify-center gap-4">
                                    <Link
                                        to={`/editar-funcionario/${funcionario.id}`}
                                        className="text-slate-700 hover:text-cyan-500 transition duration-200"
                                    >
                                        <PencilSimple size={22} />
                                    </Link>

                                    <button
                                        onClick={() => deletarFuncionario(funcionario.id)}
                                        className="text-red-500 hover:text-red-700 transition duration-200"
                                    >
                                        <Trash size={22} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Funcionarios;
