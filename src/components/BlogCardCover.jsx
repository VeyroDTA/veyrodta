import BlogTopicIcon from './BlogTopicIcon';

// Fotoğrafik AI görselleri yan yana gelince (3'lü grid'de) birbirine çok benziyor
// ve göz yoruyordu. Bunun yerine marka renkleriyle dönüşümlü, sade bir kapak —
// hem daha az "gürültülü" hem de sitenin başka yerlerindeki ikon-kutu diliyle tutarlı.
const gradients = [
  'from-cyan-600 to-blue-700',
  'from-blue-600 to-indigo-700',
  'from-teal-600 to-cyan-700',
  'from-indigo-600 to-violet-700',
];

export default function BlogCardCover({ icon, index = 0 }) {
  const gradient = gradients[index % gradients.length];

  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
      {/* Hafif doku deseni - tamamen düz durmasın */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" aria-hidden="true">
        <pattern id={`dots-${index}`} width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="white" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#dots-${index})`} />
      </svg>

      <BlogTopicIcon icon={icon} className="relative w-20 h-20" />
    </div>
  );
}
