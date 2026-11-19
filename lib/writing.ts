import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

// Posts are Markdown files in content/writing/<slug>.md with frontmatter.
// `unlisted: true` keeps a post reachable by URL but off the index and out of search.
const POSTS_DIR = path.join(process.cwd(), 'content/writing');

export type WritingPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  unlisted: boolean;
  html: string;
};

function readPost(file: string): WritingPost {
  const { data, content } = matter(fs.readFileSync(path.join(POSTS_DIR, file), 'utf8'));
  for (const key of ['title', 'description', 'date']) {
    if (typeof data[key] !== 'string')
      throw new Error(`${file}: frontmatter "${key}" must be a string`);
  }
  return {
    slug: file.replace(/\.md$/, ''),
    title: data.title,
    description: data.description,
    date: data.date,
    unlisted: data.unlisted === true,
    html: marked.parse(content, { async: false }),
  };
}

export function getAllPosts(): WritingPost[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getListedPosts(): WritingPost[] {
  return getAllPosts().filter((p) => !p.unlisted);
}

export function getPost(slug: string): WritingPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
