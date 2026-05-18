import { ArrowLeft, UserPlus } from "@phosphor-icons/react";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import { useToast } from "../../components/toast/ToastProvider";
import type Funcionario from "../../models/Funcionario";
import { atualizar, buscar, cadastrar } from "../../services/Service";

function FormFuncionario() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const toast = useToast();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [funcionario, setFuncionario] = useState<Funcionario>({
        id: 0,
        nome: "",
        salario: 0,
        departamento: "",
        cargo: "",
    });

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setFuncionario({
            ...funcionario,
            [e.target.name]: e.target.name === "salario"
                ? Number(e.target.value)
                : e.target.value,
        });
    }

    async function buscarPorId(id: string) {
        try {
            await buscar(`/funcionario/${id}`, setFuncionario);
        } catch (error) {
            console.log(error);
            toast.error("Erro ao buscar funcionário!");
        }
    }

    async function salvarFuncionario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id !== undefined) {
                await atualizar("/funcionario", funcionario, setFuncionario);
                toast.success("Funcionário atualizado com sucesso!");
            } else {
                await cadastrar("/funcionario", funcionario, setFuncionario);
                toast.success("Funcionário cadastrado com sucesso!");
            }

            navigate("/funcionarios");
        } catch (error) {
            console.log(error);
            toast.error("Erro ao salvar funcionário!");
        }

        setIsLoading(false);
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    return (
        <div className="min-h-screen bg-slate-50 px-24 py-6">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => navigate("/funcionarios")}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-8 hover:text-cyan-500 transition duration-200"
                >
                    <ArrowLeft size={18} />
                    Voltar para a lista
                </button>

                <div className="flex items-center gap-5 mb-10">
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-4 rounded-2xl shadow-md">
                        <UserPlus size={32} className="text-white" />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">
                            {id !== undefined ? "Editar funcionário" : "Cadastrar funcionário"}
                        </h1>

                        <p className="text-lg text-slate-600">
                            {id !== undefined
                                ? "Altere os dados do colaborador."
                                : "Preencha os dados do novo colaborador."}
                        </p>
                    </div>
                </div>

                <div className="bg-white border border-slate-300 rounded-2xl shadow-md p-8">
                    <h2 className="text-xl font-bold text-slate-900">
                        Dados do funcionário
                    </h2>

                    <form onSubmit={salvarFuncionario} className="flex flex-col gap-6 mt-8">
                        <div>
                            <label className="font-medium text-slate-900">
                                Nome completo
                            </label>

                            <input
                                type="text"
                                name="nome"
                                value={funcionario.nome}
                                onChange={atualizarEstado}
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
                                name="salario"
                                value={funcionario.salario}
                                onChange={atualizarEstado}
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
                                name="departamento"
                                value={funcionario.departamento}
                                onChange={atualizarEstado}
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
                                name="cargo"
                                value={funcionario.cargo}
                                onChange={atualizarEstado}
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
                                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-semibold shadow-sm transition-colors duration-200 hover:from-blue-700 hover:to-cyan-600"
                            >
                                {isLoading ? (
                                    <ClipLoader size={22} color="#ffffff" />
                                ) : id !== undefined ? (
                                    "Atualizar funcionário"
                                ) : (
                                    "Cadastrar funcionário"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormFuncionario;
