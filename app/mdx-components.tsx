import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Titles italic
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-6xl text-left  font-bold font-spectral italic text-neutral-700  mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold italic font-spectral tracking-tight  mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h2 className="text-xl font-medium  mb-4">{children}</h2>
    ),
    h4: ({ children }) => (
      <h2 className="text-lg font-regular  mb-4">{children}</h2>
    ),

    // Blockquotes gray
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 text-gray-400 italic my-6">
        {children}
      </blockquote>
    ),

    // Paragraphs
    p: ({ children }) => (
      <p className="text-xl  tracking-tight leading-tight mb-4">{children}</p>
    ),

    // Inline code
    code: ({ children }) => (
      <code className="bg-gray-100 text-pink-500 px-1 rounded text-sm">
        {children}
      </code>
    ),

    // Links
    a: ({ href, children }) => (
      <a href={href} className="underline text-blue-500 hover:text-blue-700">
        {children}
      </a>
    ),

    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm font-manrope">
          {children}
        </table>
      </div>
    ),

    thead: ({ children }) => (
      <thead className="bg-impact-blue text-neutral-100">{children}</thead>
    ),

    tbody: ({ children }) => (
      <tbody className="divide-y divide-gray-200">{children}</tbody>
    ),

    tr: ({ children }) => (
      <tr className="even:bg-impact-blue/5 hover:bg-impact-blue/10 transition-colors duration-150">
        {children}
      </tr>
    ),

    th: ({ children }) => (
      <th className="px-4 py-3 text-left font-forum text-base font-normal tracking-wide">
        {children}
      </th>
    ),

    td: ({ children }) => (
      <td className="px-4 py-3 text-gray-700">{children}</td>
    ),

    ul: ({ children }) => (
      <ul className="my-4 ml-4 space-y-2 list-none">{children}</ul>
    ),

    ol: ({ children }) => (
      <ol className="my-4 ml-6 space-y-2 list-decimal text-gray-700 font-manrope">
        {children}
      </ol>
    ),

    li: ({ children }) => (
      <li className="font-manrope text-gray-700 text-base leading-relaxed">
        <span className="flex items-start gap-2">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-impact-orange shrink-0 in-[ol]:hidden" />
          <span>{children}</span>
        </span>
      </li>
    ),

    ...components,
  };
}
