import matter from 'gray-matter';

/**
 * Parses Markdown content.
 *
 * @param {string} fileContents - File contents.
 * @returns {{ content: string, frontmatter: object }|null} Parsed data or null.
 */
export const parseMarkdown = (fileContents) => {
  const parsed = matter(fileContents);
  return parsed && !parsed.isEmpty
    ? { content: parsed.content, frontmatter: parsed.data }
    : null;
};
