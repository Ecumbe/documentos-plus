"use client";

type ActiveModule = "delegaciones" | "partes";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activeModule: ActiveModule;
  setActiveModule: (module: ActiveModule) => void;
}

export default function Sidebar({ isOpen, setIsOpen, activeModule, setActiveModule }: SidebarProps) {
  return (
    <aside className={`relative z-20 h-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col ${
      isOpen ? "w-80 opacity-100" : "w-0 p-0 opacity-0 overflow-hidden"
    }`}>
      <div className="liquid-glass h-full w-full rounded-[2.5rem] flex flex-col p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-10 px-2">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight text-white/90">DocuPlus</h1>
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Policía Judicial</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="glass-btn p-2 rounded-full text-white/50 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
        </div>
        
        <nav className="flex-1 space-y-3">
          <button 
            onClick={() => setActiveModule("delegaciones")}
            className={`w-full glass-btn p-4 rounded-3xl cursor-pointer font-semibold flex items-center gap-4 transition-all ${activeModule === "delegaciones" ? "bg-white/10 border-white/20 text-white" : "text-white/40 border-transparent"}`}
          >
            <span className="text-xl">🗄️</span> Delegaciones Viejas
          </button>
          <button 
            onClick={() => setActiveModule("partes")}
            className={`w-full glass-btn p-4 rounded-3xl cursor-pointer font-semibold flex items-center gap-4 transition-all ${activeModule === "partes" ? "bg-white/10 border-white/20 text-white" : "text-white/40 border-transparent"}`}
          >
            <span className="text-xl">🗃️</span> Partes Viejos
          </button>
        </nav>
      </div>
    </aside>
  );
}