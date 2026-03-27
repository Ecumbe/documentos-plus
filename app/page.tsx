"use client";
import { useState } from "react";
import Background from "@/components/Background";
import Sidebar from "@/components/Sidebar";
import ControlPanel from "@/components/ControlPanel";
import FormDelegaciones from "@/components/FormDelegaciones";
import FormPartes from "@/components/FormPartes";
import EditModule from "@/components/EditModule";
import DownloadModule from "@/components/DownloadModule";

// Definición estricta de tipos
type ActiveModule = "delegaciones" | "partes";
type ViewMode = "add" | "edit" | "download";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeModule, setActiveModule] = useState<ActiveModule>("delegaciones");
  const [view, setView] = useState<ViewMode>("add"); 

  return (
    <main className="relative flex h-screen w-full overflow-hidden p-4 gap-4 bg-slate-950">
      <Background />
      
      {/* Pasamos los estados con tipos coherentes */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
        activeModule={activeModule} 
        setActiveModule={setActiveModule}
      />

      <section className="flex-1 flex flex-col h-full relative z-10 transition-all duration-300">
        {!isSidebarOpen && (
          <button 
            onClick={() => setIsSidebarOpen(true)} 
            className="absolute top-2 left-0 z-50 bg-white/10 backdrop-blur-md p-3 rounded-xl text-white shadow-2xl hover:scale-105 active:scale-95 transition-all border border-white/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}

        <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] flex flex-col p-8 overflow-hidden">
          <header className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-white uppercase">
              {activeModule === "delegaciones" ? "Delegaciones Viejas" : "Partes Policiales"}
            </h2>
            <p className="text-[10px] text-white/30 font-bold tracking-[0.2em] uppercase">
              Policía Judicial - Gestión de Archivo
            </p>
          </header>

          <ControlPanel 
            activeView={view}
            onAdd={() => setView("add")}
            onEdit={() => setView("edit")}
            onDownload={() => setView("download")}
          />

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar mt-6">
            {view === "add" && (
              activeModule === "delegaciones" ? <FormDelegaciones key="del" /> : <FormPartes key="par" />
            )}

            {view === "edit" && <EditModule />}
            {view === "download" && <DownloadModule />}
          </div>
        </div>
      </section>
    </main>
  );
}