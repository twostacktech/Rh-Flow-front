function Sobre() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* TOPO */}
      <section className="px-6 py-20 text-center border-b border-zinc-800">
        <h1 className="text-5xl font-bold">
          Sobre o <span className="text-cyan-400">RH Flow</span>
        </h1>

        <p className="mt-6 text-zinc-400 max-w-3xl mx-auto text-lg">
          O RH Flow é um sistema desenvolvido para facilitar o gerenciamento
          de funcionários de forma simples, moderna e organizada.
        </p>
      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Tecnologia
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            Projeto desenvolvido utilizando React, TypeScript
            e Tailwind CSS com foco em performance,
            organização e design moderno.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Gestão
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            O sistema foi pensado para facilitar o gerenciamento
            de funcionários e melhorar o controle interno
            das empresas.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Organização
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            Interface intuitiva, limpa e responsiva para
            proporcionar uma melhor experiência ao usuário.
          </p>
        </div>

      </section>

      {/* HISTÓRIA */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
          
          <h2 className="text-3xl font-bold">
            Sobre o desenvolvimento
          </h2>

          <p className="mt-5 text-zinc-400 leading-relaxed">
            O RH Flow foi criado como projeto de estudos com o objetivo
            de aplicar conhecimentos em desenvolvimento front-end,
            componentização, rotas e estilização moderna.
          </p>

          <p className="mt-4 text-zinc-400 leading-relaxed">
            Durante o desenvolvimento foram utilizadas tecnologias
            modernas para criar uma aplicação funcional,
            organizada e agradável visualmente.
          </p>

          <p className="mt-4 text-zinc-400 leading-relaxed">
            Além do aprendizado técnico, o projeto busca oferecer
            uma experiência simples e eficiente para gerenciamento
            de funcionários.
          </p>

        </div>
      </section>

    </div>
  );
}

export default Sobre;