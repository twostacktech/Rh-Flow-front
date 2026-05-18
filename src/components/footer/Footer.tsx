export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface/40 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src="/RH_FLOW-semfundo.png" alt="RH Flow" className="h-12 w-12 rounded object-contain" />
          <span className="font-display font-semibold">RH Flow</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} RH Flow. Gestão de pessoas.
        </p>
      </div>
    </footer>
  );
}


export default Footer
