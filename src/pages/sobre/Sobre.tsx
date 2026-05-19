import { Target, RocketLaunch, Heart } from "@phosphor-icons/react"

function Sobre() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-zinc-900">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">

        <h1 className="mt-8 text-4xl md:text-5xl font-bold leading-tight">
          Tecnologia que{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            valoriza
          </span>
          <br /> pessoas
        </h1>

        <p className="mt-8 text-zinc-500 text-lg max-w-4xl mx-auto leading-relaxed">
          Nascemos para descomplicar o RH. Combinamos engenharia,
          design e obsessão pelo cliente para entregar uma plataforma
          que o seu time ama usar todos os dias.
        </p>

      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">

        {/* MISSÃO */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-10 shadow-sm hover:shadow-lg transition-all duration-300">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md">
            <Target
              size={28}
              weight="fill"
              className="text-white"
            />
          </div>

          <h2 className="mt-8 text-3xl font-bold">
            Missão
          </h2>

          <p className="mt-5 text-zinc-500 leading-relaxed text-lg">
            Tornar a gestão de pessoas simples, humana e baseada
            em dados para empresas de todos os portes.
          </p>

        </div>

        {/* VISÃO */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-10 shadow-sm hover:shadow-lg transition-all duration-300">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md">
            <RocketLaunch
              size={28}
              weight="fill"
              className="text-white"
            />
          </div>

          <h2 className="mt-8 text-3xl font-bold">
            Visão
          </h2>

          <p className="mt-5 text-zinc-500 leading-relaxed text-lg">
            Ser a plataforma de RH mais querida do Brasil,
            transformando o jeito como times crescem.
          </p>

        </div>

        {/* VALORES */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-10 shadow-sm hover:shadow-lg transition-all duration-300">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md">
            <Heart
              size={28}
              weight="fill"
              className="text-white"
            />
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

      {/* NOSSA HISTÓRIA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="bg-white border border-zinc-200 rounded-3xl p-10 md:p-12 shadow-sm">

          <h2 className="text-4xl md:text-5xl font-bold">
            Nossa história
          </h2>

          <p className="mt-6 text-zinc-500 text-lg leading-relaxed">
            O RH Flow surgiu a partir da ideia de criar uma plataforma
            moderna e intuitiva para auxiliar empresas no gerenciamento
            de funcionários de forma simples e eficiente.
          </p>

          <p className="mt-5 text-zinc-500 text-lg leading-relaxed">
            Durante o desenvolvimento do projeto foram aplicados
            conhecimentos em React, TypeScript, componentização,
            rotas e estilização utilizando Tailwind CSS.
          </p>

          <p className="mt-5 text-zinc-500 text-lg leading-relaxed">
            Além do aprendizado técnico, o objetivo principal sempre foi
            desenvolver uma aplicação organizada, responsiva e agradável
            visualmente para melhorar a experiência do usuário.
          </p>

        </div>

      </section>

      {/* Sobre TwoStack */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="bg-white border border-zinc-200 rounded-3xl p-10 md:p-12 shadow-sm">

          <h2 className="text-4xl md:text-5xl font-bold">
           TwoStack
          </h2>

          <p className="mt-6 text-zinc-500 text-lg leading-relaxed">
            A TwoStack é uma empresa de desenvolvimento de software 
            focada na criação de soluções digitais eficientes,
             modernas e escaláveis.
          </p>

          <p className="mt-5 text-zinc-500 text-lg leading-relaxed">
            Somos uma equipe altamente colaborativa,
            onde cada projeto conta com profissionais especializados para garantir organização,
            qualidade e agilidade em todas as etapas do ciclo de desenvolvimento. 
            Nosso objetivo é transformar ideias em produtos digitais sólidos, com foco em performance,
             usabilidade e impacto real para o negócio.
          </p>

          <p className="mt-5 text-zinc-500 text-lg leading-relaxed">
           No nosso portfólio de soluções, contamos com plataformas para diferentes segmentos, como gestão de recursos humanos, sistemas para o setor de seguros e uma solução de proteção veicular.
           Todos os nossos projetos são desenvolvidos com foco na centralização de informações, automação de processos e em uma experiência digital mais simples e eficiente no dia a dia. 
          </p>

        </div>

      </section>

      {/* NOSSA EQUIPE */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Quem faz acontecer
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Juliana Borges */}
          <div className="flex flex-col items-center text-center bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-zinc-100 shadow-inner">
              <img 
                src="src/assets/Juliana_Borges.jpg" 
                alt="Juliana Borges" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-6 text-xl font-bold text-zinc-800">Juliana Borges</h3>
            <p className="text-sm bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold mt-1">Desenvolvedora</p>
          </div>

          {/* Lucas Araujo */}
          <div className="flex flex-col items-center text-center bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-zinc-100 shadow-inner">
              <img 
                src="src/assets/Lucas_araujo.png" 
                alt="Lucas Araujo" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-6 text-xl font-bold text-zinc-800">Lucas Araujo</h3>
            <p className="text-sm bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold mt-1">Desenvolvedor</p>
          </div>

          {/* Lorena Godoi */}
          <div className="flex flex-col items-center text-center bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-zinc-100 shadow-inner">
              <img 
                src="src/assets/Lorena_godoi.png" 
                alt="Lorena Godoi" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-6 text-xl font-bold text-zinc-800">Lorena Godoi</h3>
            <p className="text-sm bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold mt-1">Desenvolvedora</p>
          </div>

          {/* Beatriz Braga */}
          <div className="flex flex-col items-center text-center bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-zinc-100 shadow-inner">
              <img 
                src="src/assets/Beatriz_braga.png" 
                alt="Beatriz Braga" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-6 text-xl font-bold text-zinc-800">Beatriz Braga</h3>
            <p className="text-sm bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold mt-1">Desenvolvedora</p>
          </div>

          {/* Luanna Alcântara */}
          <div className="flex flex-col items-center text-center bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-zinc-100 shadow-inner">
              <img 
                src="src/assets/Luanna_alcantra.png" 
                alt="Luanna Alcântara" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-6 text-xl font-bold text-zinc-800">Luanna Alcântara</h3>
            <p className="text-sm bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold mt-1">Desenvolvedora</p>
          </div>

          {/* Daniel Macedo */}
          <div className="flex flex-col items-center text-center bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-zinc-100 shadow-inner">
              <img 
                src="src/assets/Daniel_macedo.png" 
                alt="Daniel Macedo" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-6 text-xl font-bold text-zinc-800">Daniel Macedo</h3>
            <p className="text-sm bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold mt-1">Desenvolvedor</p>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Sobre
