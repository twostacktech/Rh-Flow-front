//import {   Users,   Clock,   FileText,  Shield, } from '@phosphor-icons/react';
import { Link } from "react-router-dom";

// function Home() {
//   return <h1 style={{ color: "black" }}>HOME OK</h1>;
// }

// export default Home;

function Home() {
//   const features = [
//     { icon: Users, title: "Cadastro de funcionários", desc: "Centralize dados, documentos e histórico em um só lugar." },
//     { icon: Clock, title: "Controle de ponto", desc: "Marcação digital, banco de horas e relatórios automáticos." },
//     { icon: FileText, title: "Folha de pagamento", desc: "Cálculos, holerites e encargos sem planilhas." },
//     { icon: BarChart3, title: "Dashboards", desc: "Indicadores em tempo real para decisões mais rápidas." },
//     { icon: Shield, title: "Conformidade", desc: "LGPD, eSocial e segurança de dados de ponta a ponta." },
//     { icon: Sparkles, title: "Automação", desc: "Fluxos inteligentes que eliminam o trabalho repetitivo." },
//   ];

    const features = [
    { title: "Cadastro de funcionários", desc: "Centralize dados, documentos e histórico em um só lugar." },
    { title: "Controle de ponto", desc: "Marcação digital, banco de horas e relatórios automáticos." },
    { title: "Folha de pagamento", desc: "Cálculos, holerites e encargos sem planilhas." },
    { title: "Dashboards", desc: "Indicadores em tempo real para decisões mais rápidas." },
    { title: "Conformidade", desc: "LGPD, eSocial e segurança de dados de ponta a ponta." },
    { title: "Automação", desc: "Fluxos inteligentes que eliminam o trabalho repetitivo." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 text-center">
          <img src="/RH_FLOW-semfundo.png" alt="RH Flow" className="mx-auto h-58 w-58 rounded-2xl object-contain shadow-glow" />
          <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight">
            Gestão de RH <span className="text-gradient">eficiente</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            O RH Flow conecta cadastro, ponto, folha e indicadores em uma única
            plataforma. Menos planilha, mais estratégia.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/funcionarios" className="rounded-md bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105">
              Ver funcionários
            </Link>
            <Link to="/sobre" className="rounded-md border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
              Sobre nós
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Tudo que seu RH precisa</h2>
          <p className="mt-3 text-muted-foreground">Um fluxo único do cadastro ao pagamento.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-brand text-primary-foreground">
                {/* <f.icon className="h-5 w-5" /> */}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-border bg-surface p-10 md:p-14">
          <div className="grid gap-8 text-center md:grid-cols-3">
            {[
              { k: "+10 mil", v: "funcionários gerenciados" },
              { k: "98%", v: "satisfação dos clientes" },
              { k: "70%", v: "menos tempo em tarefas manuais" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient">{s.k}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home

// function Home() {
// return (
// <>
//             <div className="bg-indigo-900 flex justify-center">
//                 <div className='container grid grid-cols-2 text-white'>
//                     <div className="flex flex-col gap-4 items-center justify-center py-4">
//                         <h2 className='text-5xl font-bold'>
//                             Gestão de RH Eficiente
//                         </h2>
//                         <p className='text-xl'>
//                             Teste
//                         </p>

//                         <div className="flex justify-around gap-4">
//                             <div className='rounded text-white
//                                             border-white border-solid border-2 py-2 px-4'
//                             >
//                                 Nova Postagem
//                             </div>
//                         </div>
//                     </div>

//                     <div className="flex justify-center ">
//                         <img
//                             src="https://i.imgur.com/fyfrilv.png"
//                             alt="Imagem Página Home"
//                             className='w-2/3'
//                         />
//                     </div>
//                 </div>
//             </div>
//         </>
//  );
//  }

// export default Home