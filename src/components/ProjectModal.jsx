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
        className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-8 relative shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-slate-900 hover:bg-slate-100 text-xl font-bold w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center transition-all cursor-pointer"
          aria-label="Kapat"
        >
          ✕
        </button>
        <span className="text-xs text-blue-700 font-extrabold uppercase tracking-widest">{project.category}</span>
        <h3 id="project-modal-title" className="text-3xl font-black text-slate-900 mt-1 mb-2">
          {project.title} - İnceleme
        </h3>
        {project.concept && (
          <span className="inline-block text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            Konsept Çalışma
          </span>
        )}

        <div className="space-y-4 text-sm text-slate-700 mb-8 mt-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <span className="text-blue-700 font-bold tracking-wide text-base block mb-1">Karşılaşılan Problem:</span>
            <span className="text-slate-600 leading-relaxed font-medium block">{project.problem}</span>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <span className="text-blue-700 font-bold tracking-wide text-base block mb-1">UGR Çözümü:</span>
            <span className="text-slate-600 leading-relaxed font-medium block">{project.solution}</span>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <span className="text-blue-700 font-bold tracking-wide text-base block mb-1">
              {project.concept ? 'Hedeflenen Sonuç:' : 'Elde Edilen Sonuç:'}
            </span>
            <span className="text-slate-600 leading-relaxed font-medium block">{project.result}</span>
          </div>
        </div>

        <div className="text-right">
          <button
            onClick={() => {
              onClose();
              navigate('/iletisim');
            }}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-900 font-bold px-8 py-3.5 rounded-xl text-sm shadow-md shadow-amber-500/20 transition-all cursor-pointer"
          >
            Benzer Proje İçin Teklif Al →
          </button>
        </div>
      </div>
    </div>
  );
}
