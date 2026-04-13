import type { MDXComponents } from "mdx/types";
import React from "react";
import Image from "next/image"; // Import the Next.js Image component

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Standard Markdown Image mapping
    img: ({ src, alt }) => (
      <span className="relative block w-full aspect-video my-8 overflow-hidden rounded-xl border-0 border-neutral-200">
        <Image
          src={src as string}
          alt={alt || "Blog image"}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </span>
    ),
    // Titles italic
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-6xl text-left  font-bold font-spectral italic text-neutral-700  mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold italic font-spectral tracking-tight mt-4  mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium mt-4  mb-4">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-regular mt-4 mb-4">{children}</h4>
    ),

    // Blockquotes gray
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-impact-orange pl-4 text-black italic my-6">
        {children}
      </blockquote>
    ),

    // Paragraphs
    p: ({ children }) => (
      <p className="text-xl text-justify  tracking-tight leading-tight mb-4">
        {children}
      </p>
    ),

    // Inline code
    code: ({ children }) => (
      <code className="bg-gray-100 text-pink-500 px-1 rounded text-sm">
        {children}
      </code>
    ),

    // Links
    a: ({ href, children }) => (
      <a href={href} className="underline text-impact-blue hover:text-blue-700">
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
      <ul className="mt-0 mb-1 ml-4 space-y-1 list-none font-spectral">
        {children}
      </ul>
    ),

    ol: ({ children }) => (
      <ol className="my-4 ml-6 space-y-2 list-decimal text-gray-700 font-spectral">
        {children}
      </ol>
    ),

    li: ({ children }) => (
      <li className="font-manrope text-black text-base leading-relaxed font-spectral">
        <span className="flex items-start gap-2">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-impact-orange shrink-0 in-[ol]:hidden" />
          <span>{children}</span>
        </span>
      </li>
    ),

    ...components,
  };
}

// Add this: A specialized set for your "Explanation" pages
export const explanationComponents: MDXComponents = {
  ...useMDXComponents({}), // Get all the defaults (h1, table, li, etc.)

  // Overwrite the Paragraph
  p: ({ children }) => (
    <p className="font-spectral text-neutral-700 leading-relaxed text-justify mb-4">
      {children}
    </p>
  ),

  // Overwrite the Image for a "smaller" look
  img: ({ src, alt }) => (
    <div className="my-6 flex justify-center">
      <div className="relative w-full max-w-md aspect-4/3 overflow-hidden rounded-lg border border-neutral-100">
        <Image
          src={src as string}
          alt={alt || "Illustration"}
          fill
          className="object-contain"
        />
      </div>
    </div>
  ),
};

// Add this: A specialized set for your "Explanation" pages
export const contextComponents: MDXComponents = {
  ...useMDXComponents({}),

  p: ({ children }) => (
    <p className="w-full text-neutral-800 whitespace-pre-wrap font-spectral text-base md:text-lg font-bold tracking-tight bg-neutral-100 rounded-lg p-4 text-justify">
      {children}
    </p>
  ),

  ol: ({ children }) => (
    <ol className="w-full font-spectral text-base md:text-lg font-bold tracking-tight bg-neutral-100 rounded-lg p-4 my-0 ml-6 space-y-2 list-decimal text-neutral-800">
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className="font-spectral text-neutral-800 text-base md:text-lg font-bold leading-relaxed tracking-tight">
      {children}
    </li>
  ),

  img: ({ src, alt }) => (
    <span className="my-6 flex justify-center" style={{ display: "block" }}>
      <Image
        src={src as string}
        alt={alt || "Illustration"}
        width={1200}
        height={600}
        className="w-full max-w-3xl object-contain rounded border"
      />
    </span>
  ),
};
