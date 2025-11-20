export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-[5px]">
      <img
        src={content.img}
        alt={content.title}
        className="w-[300px] rounded-[10px] mb-[3px]"
      />

      <span className="text-[12px] text-[#c4ff46] border border-[#d7fa00] px-[5px] py-[4px] rounded-[3px]">
        모집중
      </span>

      <div className="text-[20px] font-semibold text-[#fff6d7]">{content.title}</div>

      <p className="text-[12px] text-[#b1a2a2]">{content.subtitle}</p>
    </div>
  );
}
