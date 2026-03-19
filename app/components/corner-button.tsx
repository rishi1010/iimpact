const CornerFillButton = ({
  label,
  hover_label,
}: {
  label: string;
  hover_label?: string;
}) => (
  <button className="group w-full relative overflow-hidden text-impact-blue hover:text-white font-mono text-md font-bold px-4 py-1 transition-colors duration-300">
    {/* corner borders */}
    <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-impact-orange z-10" />
    <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-impact-orange z-10" />
    <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-impact-orange z-10" />
    <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-impact-orange z-10" />
    {/* fill wipes — all 4 corners */}
    <span className="absolute top-0 left-0 w-1/2 h-1/2 bg-impact-orange -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-0" />
    <span className="absolute top-0 right-0 w-1/2 h-1/2 bg-impact-orange translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-0" />
    <span className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-impact-orange -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-0" />
    <span className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-impact-orange translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-0" />
    <p className={`relative z-10 ${hover_label ? "group-hover:hidden" : ""}`}>
      {label}
    </p>
    <p
      className={`relative z-10 hidden ${hover_label ? "group-hover:block p-3" : ""}`}
    >
      {hover_label}
    </p>
  </button>
);

export default CornerFillButton;
