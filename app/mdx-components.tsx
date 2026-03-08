import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Titles italic
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold italic mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold italic mb-4">{children}</h2>
    ),

    // Blockquotes gray
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 text-gray-400 italic my-6">
        {children}
      </blockquote>
    ),

    // Paragraphs
    p: ({ children }) => (
      <p className="text-base leading-relaxed mb-4">{children}</p>
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

    ...components,
  };
}
