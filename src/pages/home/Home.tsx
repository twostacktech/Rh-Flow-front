import {   Users,   Clock,   FileText,  Shield, ChartBar, Sparkle, WhatsappLogo, EnvelopeSimple } from '@phosphor-icons/react';
import { Link } from "react-router-dom";

function Home() {
  const features = [
    { icon: Users, title: "Cadastro de funcionários", desc: "Centralize dados, documentos e histórico em um só lugar." },
    { icon: Clock, title: "Controle de ponto", desc: "Marcação digital, banco de horas e relatórios automáticos." },
    { icon: FileText, title: "Folha de pagamento", desc: "Cálculos, holerites e encargos sem planilhas." },
    { icon: ChartBar, title: "Dashboards", desc: "Indicadores em tempo real para decisões mais rápidas." },
    { icon: Shield, title: "Conformidade", desc: "LGPD, eSocial e segurança de dados de ponta a ponta." },
    { icon: Sparkle, title: "Automação", desc: "Fluxos inteligentes que eliminam o trabalho repetitivo." },
  ];
  
  // Definição dos estilos para facilitar o uso no código
  const fontSans = { fontFamily: "'Inter', sans-serif" };
  const fontDisplay = { fontFamily: "'Space Grotesk', sans-serif" };

  return (
    // Adicionado fontSans aqui para aplicar a fonte Inter em todo o texto padrão da página
    <div className="bg-slate-50 min-h-screen text-slate-900 antialiased" style={fontSans}>
        <div className="mx-auto max-w-6xl px-5">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 text-center">
          {/* Logo Centralizada */}
          <div className="flex justify-center mb-6">
            <img 
              src="/RH_FLOW-semfundo.png" 
              alt="RH Flow" 
              className="h-46 w-46 rounded-2xl object-contain p-2" 
            />
          </div>
          
          {/* Adicionado fontDisplay no H1 */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900" style={fontDisplay}>
            Gestão de RH <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">eficiente</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-slate-500 font-medium">
            O RH Flow conecta cadastro, ponto, folha e indicadores em uma única
            plataforma. Menos planilha, mais estratégia.
          </p>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
<Link
  to="/funcionarios"
  className="rounded-xl bg-gradient-to-r from-blue-700 to-cyan-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:from-blue-700 hover:to-cyan-600 transition-colors"
>
  Teste o RH Flow
</Link>
            <Link to="/sobre" className="rounded-xl bg-slate-200 px-6 py-3 text-base font-semibold text-slate-700 hover:bg-slate-300 transition-colors">
              Sobre nós
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-16 bg-slate-50/50">
        <div className="mb-14 text-center">
          {/* Adicionado fontDisplay no H2 */}
          <h2 className="text-3xl font-bold tracking-tight text-slate-900" style={fontDisplay}>
            Tudo que seu RH precisa
          </h2>
          <p className="mt-2 text-slate-500 font-medium">
            Um fluxo único do cadastro ao pagamento.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Ícone com gradiente alinhado ao blue-600 */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-md">
                <f.icon className="h-6 w-6 text-white" />
              </div>

              {/* Adicionado fontDisplay no H3 dos cards */}
              <h3 className="text-lg font-bold text-slate-900" style={fontDisplay}>{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 font-medium">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-10">
        <div className="rounded-3xl bg-slate-200 p-10 md:p-14 border border-slate-100">
          <div className="grid gap-8 text-center md:grid-cols-3">
            {[
              { k: "+10 mil", v: "funcionários gerenciados" },
              { k: "98%", v: "satisfação dos clientes" },
              { k: "70%", v: "menos tempo em tarefas manuais" },
            ].map((s) => (
              <div key={s.v} className="flex flex-col items-center justify-center">
                {/* Número com gradiente */}
          <div
            className="text-4xl md:text-5xl font-extrabold tracking-tight
                       bg-gradient-to-r from-blue-600 to-cyan-500
                       bg-clip-text text-transparent"
            style={fontDisplay}
          >
            {s.k}
          </div>

          <div className="mt-3 text-sm font-medium text-slate-500 max-w-[180px]">
            {s.v}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* CTA final */}
<div className="flex flex-wrap items-center justify-center gap-25 pb-24">
  <a
    href="https://wa.me/5511999999999"
    target="_blank"
    rel="noopener noreferrer"
    className="flex w-[280px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-500 px-6 py-3 text-xl font-semibold text-white shadow-sm transition-colors hover:from-blue-700 hover:to-cyan-600"
  >
    <WhatsappLogo className="h-10 w-10 text-white" />
    Enviar mensagem
  </a>

  <a
    href="mailto:twostacktech@gmail.com"
    className="flex w-[280px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-500 px-6 py-3 text-xl font-semibold text-white shadow-sm transition-colors hover:from-blue-700 hover:to-cyan-600"
  >
    <EnvelopeSimple className="h-10 w-10 text-white" />
    Enviar email
  </a>
</div>

</div>
</div>
  );
}

export default Home;
