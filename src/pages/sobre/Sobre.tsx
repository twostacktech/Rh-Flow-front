import { Target, Rocket, Heart } from "lucide-react"

function Sobre() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-zinc-900">

      <section className="max-w-6xl mx-auto px-6 py-24 text-center">

        <button className="px-5 py-2 rounded-full border border-zinc-300 text-sm text-zinc-600 bg-white shadow-sm">
          Sobre nós
        </button>

        <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
          Tecnologia que{" "}
          <span className="text-blue-500">
            valoriza <br /> pessoas
          </span>
        </h1>

        <p className="mt-8 text-zinc-500 text-lg max-w-4xl mx-auto leading-relaxed">
          Nascemos para descomplicar o RH. Combinamos engenharia,
          design e obsessão pelo cliente para entregar uma plataforma
          que o seu time ama usar todos os dias.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">

        <div className="bg-white border border-zinc-200 rounded-3xl p-10 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center">
            <Target size={28} className="text-white" />
          </div>

          <h2 className="mt-8 text-3xl font-bold">
            Missão
          </h2>

          <p className="mt-5 text-zinc-500 leading-relaxed text-lg">
            Tornar a gestão de pessoas simples, humana e baseada
            em dados para empresas de todos os portes.
          </p>

        </div>

        <div className="bg-white border border-zinc-200 rounded-3xl p-10 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center">
            <Rocket size={28} className="text-white" />
          </div>

          <h2 className="mt-8 text-3xl font-bold">
            Visão
          </h2>

          <p className="mt-5 text-zinc-500 leading-relaxed text-lg">
            Ser a plataforma de RH mais querida do Brasil,
            transformando o jeito como times crescem.
          </p>

        </div>

        <div className="bg-white border border-zinc-200 rounded-3xl p-10 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center">
            <Heart size={28} className="text-white" />
          </div>

          <h2 className="mt-8 text-3xl font-bold">
            Valores
          </h2>

          <p className="mt-5 text-zinc-500 leading-relaxed text-lg">
            Transparência, foco no cliente, evolução contínua
            e respeito pelas pessoas.
          </p>

        </div>

      </section>

    </div>
  )
}

export default Sobre