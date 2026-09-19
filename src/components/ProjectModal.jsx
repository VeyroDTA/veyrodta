import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProjectModal({ project, onClose }) {
  const closeBtnRef = useRef(null);
  const navigate = useNavigate();

  // ÖNEMLİ: Bu component Projects sayfası açıldığı an mount oluyor
  // (project henüz null olsa bile). Eski koddaki useEffect erken "return null"
  // kontrolünden ÖNCE çalıştığı için, sayfaya her girişte body scroll'u
  // kilitleniyordu — "Ürünlerimiz'e girince aşağı kaymıyor" bug'ının sebebi buydu.
  // Çözüm: effect içinde de project yoksa hiçbir şey yapmadan çık.
  useEffect(() => {
    if (!project) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    closeBtnRef.current?.focus();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="bg-gradient-to-b from-[#2B468C] via-[#1E3675] to-[#142654] border border-cyan-400/70 rounded-3xl max-w-2xl w-full p-8 relative shadow-[0_0_35px_rgba(6,182,212,0.18)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-200 hover:text-white hover:bg-cyan-500/40 text-xl font-bold w-10 h-10 rounded-full bg-slate-900/80 flex items-center justify-center transition-all cursor-pointer"
          aria-label="Kapat"
        >
          ✕
        </button>
        <span className="text-xs text-cyan-300 font-extrabold uppercase tracking-widest">{project.category}</span>
        <h3 id="project-modal-title" className="text-3xl font-black text-white mt-1 mb-6">
          {project.title} - İnceleme
        </h3>

        <div className="space-y-4 text-sm text-slate-100 mb-8">
          <div className="bg-[#233E82] p-5 rounded-2xl border border-cyan-400/40 shadow-lg">
            <span className="text-cyan-300 font-bold tracking-wide text-base block mb-1">Karşılaşılan Problem:</span>
            <span className="text-slate-200 leading-relaxed font-medium block">{project.problem}</span>
          </div>

          <div className="bg-[#233E82] p-5 rounded-2xl border border-cyan-400/40 shadow-lg">
            <span className="text-cyan-300 font-bold tracking-wide text-base block mb-1">Veyro Çözümü:</span>
            <span className="text-slate-200 leading-relaxed font-medium block">{project.solution}</span>
          </div>

          <div className="bg-[#233E82] p-5 rounded-2xl border border-cyan-400/40 shadow-lg">
            <span className="text-cyan-300 font-bold tracking-wide text-base block mb-1">Elde Edilen Sonuç:</span>
            <span className="text-slate-200 leading-relaxed font-medium block">{project.result}</span>
          </div>
        </div>

        <div className="text-right">
          <button
            onClick={() => {
              onClose();
              navigate('/iletisim');
            }}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-sm shadow-[0_0_16px_rgba(245,158,11,0.3)] transition-all cursor-pointer"
          >
            Benzer Proje İçin Teklif Al →
          </button>
        </div>
      </div>
    </div>
  );
}
