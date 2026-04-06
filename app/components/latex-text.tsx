import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

interface LatexTextProps {
  children: string;
  className?: string;
}

export function LatexText({ children, className }: LatexTextProps) {
  return (
    <span className={className}>
      <Latex>{children}</Latex>
    </span>
  );
}
