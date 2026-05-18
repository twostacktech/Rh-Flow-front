import { ArrowLeft, UserPlus } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

function Cadastro() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 px-24 py-6">

            <div className="max-w-4xl mx-auto">

                <button
                    onClick={() => navigate("/funcionarios")}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-8 hover:text-blue-600 transition duration-200"
                >
                    <ArrowLeft size={18} />
                    Voltar para a lista
                </button>

                <div className="flex items-center gap-5 mb-10">
                    <div className="bg-slate-200 p-4 rounded-2xl">
                        <UserPlus size={32} className="text-blue-600" />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">
                            Cadastrar funcionário
                        </h1>

                        <p className="text-lg text-slate-600">
                            Preencha os dados do novo colaborador.
                        </p>
                    </div>
                </div>

                <div className="bg-white border border-slate-300 rounded-2xl shadow-md p-8">
                    <h2 className="text-xl font-bold text-slate-900">
                        Dados do funcionário
                    </h2>

                    <p className="text-slate-600 mb-8">
                        Todos os campos são obrigatórios e seguem as regras de negócio do sistema.
                    </p>

                    <form className="flex flex-col gap-6">
                        <div>
                            <label className="font-medium text-slate-900">
                                Nome completo
                            </label>

                            <input
                                type="text"
                                placeholder="Ex: João da Silva"
                                className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="font-medium text-slate-900">
                                Salário
                            </label>

                            <input
                                type="number"
                                placeholder="Ex: 4500.00"
                                className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="font-medium text-slate-900">
                                Departamento
                            </label>

                            <input
                                type="text"
                                placeholder="Ex: Tecnologia"
                                className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="font-medium text-slate-900">
                                Cargo
                            </label>

                            <input
                                type="text"
                                placeholder="Ex: Desenvolvedor Frontend"
                                className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex justify-end gap-3 pt-4">
                            <button
                                type="button"
                                onClick={() => navigate("/funcionarios")}
                                className="px-6 py-3 rounded-xl border border-slate-300 font-semibold hover:bg-slate-100 transition duration-200"
                            >
                                Cancelar
                            </button>

                            <button
                                type="submit"
                                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200"
                            >
                                Cadastrar funcionário
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    );
}

export default Cadastro;