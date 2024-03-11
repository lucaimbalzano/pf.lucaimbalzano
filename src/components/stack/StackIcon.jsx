export default function StackIcon({ src, alt, w }) {
  if (w == undefined || null) w = "60px";
  return (
    <div
      className={`group w-[${w}] h-[70px] rounded-xl overflow-hidden relative drop-shadow-lg `}
    >
      <img className="w-full h-full" src={src} alt={alt} />
    </div>
  );
}
