import type { CollectionEntry } from 'astro:content';
import slugify from 'slugify';
import { MAX_BLOG_COUNT } from 'utils/constants';

export const getPageNumbers = (numberOfPosts: number) => {
  const numberOfPages = numberOfPosts / MAX_BLOG_COUNT;

  let pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i];
  }

  return pageNumbers;
};

export const getSortedPosts = (posts: CollectionEntry<'post'>[]) => {
  return posts
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDate).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDate).getTime() / 1000)
    );
};

export const slugifyString = (str: string) => slugify(str, { lower: true });

export const slugifyAll = (arr: string[]) => arr.map(slugifyString);

export const getUniqueTags = (posts: CollectionEntry<'post'>[]) => {
  const fetchUnDraftedPosts = posts.filter(({ data }) => !data.draft);
  const tags: string[] = fetchUnDraftedPosts
    .flatMap(post => post.data.tags)
    .filter((value: string, index: number, self: string[]) => self.indexOf(value) === index)
    .sort((tagA: string, tagB: string) => tagA.localeCompare(tagB));

  return tags;
};
