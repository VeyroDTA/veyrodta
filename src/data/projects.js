// ─────────────────────────────────────────────
// PROJELER
//
// ⚠ ÖNEMLİ — DÜRÜSTLÜK KURALI
// Bu dosyadaki çalışmalar gerçek müşteri projeleri DEĞİLDİR; sektöre yönelik
// konsept/demo tasarımlardır. Bu yüzden `concept: true` bayrağı açık tutulur ve
// arayüz her kartta "KONSEPT ÇALIŞMA" etiketini gösterir. Bu etiketler, gerçek
// müşteri olmayan işlerin gerçek müşteri gibi gösterilmesini engeller.
//
// Gerçek bir müşteri projesi eklemek için:
//   { id, title, category, categoryLabel, summary, image, concept: false, tags, problem, solution, result }
// ekle — "KONSEPT ÇALIŞMA" etiketi otomatik olarak kaybolur.
// ─────────────────────────────────────────────

export const projectsData = [
  {
    id: "autocare",
    title: "Autocare",
    category: "Kurumsal",
    categoryLabel: "Oto Servis & Kurumsal Çözüm",
    summary:
      "Periyodik bakım, arıza tespiti ve onarım hizmetlerini güven veren, mobilde tek elle kullanılabilen bir arayüz.",
    image: "/Autocare.jpg",
    concept: true,
    tags: ["UX/UI", "Web Tasarım", "Oto Servis"],
    problem:
      "Geleneksel oto servis web sitelerinin karmaşık olması, randevu alma süreçlerinin yavaş olması ve mobil cihazlarda profesyonel bir duruş sergilememesi.",
    solution:
      "Kullanıcıların periyodik bakım, arıza tespiti ve mekanik onarım gibi hizmetlere hızlıca ulaşabildiği, güven veren modern bir kurumsal oto servis arayüzü kurgulandı.",
    result:
      "Bu tasarımla hedeflenen: online randevu taleplerini ve servis başvuru dönüşümlerini artırmak. Gerçek bir müşteri projesi değil, sektöre yönelik yaklaşımımızı gösteren bir konsept çalışmadır.",
  },
  {
    id: "lume",
    title: "Lume",
    category: "E-Ticaret & Randevu",
    categoryLabel: "Güzellik & Bakım Stüdyosu",
    summary:
      "Lüks ve zarif bir çizgiyi dijitale taşıyan; hizmet, fiyat ve randevu akışını tek akışta toplayan bir stüdyo deneyimi.",
    image: "/Lume.jpg",
    concept: true,
    tags: ["E-Ticaret / Randevu", "UX/UI", "Estetik Tasarım"],
    problem:
      "Güzellik salonunun estetik vizyonunu dijital ortama taşıyamayan zayıf altyapı ve müşterilerin hizmetleri, fiyatları ve randevu sistemini zor incelemesi.",
    solution:
      "Markanın lüks ve zarif çizgisini yansıtan, cilt bakımı ve estetik uygulamaların net bir şekilde sergilendiği, akıcı randevu akışına sahip özel bir web deneyimi tasarlandı.",
    result:
      "Bu tasarımla hedeflenen: sitede geçirilen süreyi uzatmak ve doğrudan online randevu alan müşteri sayısını artırmak. Gerçek bir müşteri projesi değil, sektöre yönelik yaklaşımımızı gösteren bir konsept çalışmadır.",
  },
  {
    id: "velora",
    title: "Vélora",
    category: "Kurumsal",
    categoryLabel: "Mimari & Lüks Yaşam",
    summary:
      "Büyük ölçekli proje görselleri ve sade tipografiyle “premium” algısını ilk ekrandan itibaren kuran bir yaşam markası sitesi.",
    image: "/Velora.jpg",
    concept: true,
    tags: ["UX/UI", "Web Tasarım", "Emlak & Mimari"],
    problem:
      "Lüks mimari projelerin gerçek değerini yansıtamayan, sıradan şablonlarla kurulmuş bir web sitesi; potansiyel alıcıların markayı ilk saniyede “sıradan” olarak algılaması riski.",
    solution:
      "Büyük ölçekli proje görselleri, zarif tipografi ve sade bir renk paletiyle “premium” hissi ilk ekrandan itibaren hissettiren, projelerin galeri ve fiyat bilgilerinin net sunulduğu bir mimari & yaşam markası sitesi kurgulandı.",
    result:
      "Bu tasarımla hedeflenen: özel görüşme talep formuna gelen başvuruları artırmak ve ziyaretçinin proje galerisinde geçirdiği süreyi uzatmak. Gerçek bir müşteri projesi değil, sektöre yönelik yaklaşımımızı gösteren bir konsept çalışmadır.",
  },
  {
    id: "ustafil",
    title: "Ustafil",
    category: "Özel Web Çözümleri",
    categoryLabel: "Hizmet Pazaryeri",
    summary:
      "Hizmet ve konum bazlı hızlı aramayla başlayan, kategori kartlarıyla tek bakışta gezinilen bir hizmet platformu arayüzü.",
    image: "/Ustafil.jpg",
    concept: true,
    tags: ["UX/UI", "Web Tasarım", "Hizmet Platformu"],
    problem:
      "Elektrik, su tesisatı, doğalgaz gibi birçok farklı hizmet kategorisini tek bir platformda güven verici ve kolay aranabilir şekilde sunamayan dağınık bir yapı.",
    solution:
      "Hizmet + konum bazlı hızlı arama, kategori kartlarıyla tek bakışta gezinme ve “doğrulanmış usta” vurgusuyla güveni ön plana çıkaran bir hizmet pazaryeri arayüzü tasarlandı.",
    result:
      "Bu tasarımla hedeflenen: arama kutusundan başlatılan hizmet taleplerini artırmak ve kategori kartları üzerinden tıklama oranını yükseltmek. Gerçek bir müşteri projesi değil, sektöre yönelik yaklaşımımızı gösteren bir konsept çalışmadır.",
  },
];
