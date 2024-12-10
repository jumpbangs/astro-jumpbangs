import { useState } from 'react';
import type { CollectionEntry } from 'astro:content';
import Fuse from 'fuse.js';

const options = {
  keys: ['id', 'slug', 'data.tags'],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

interface SearchBarProps {
  searchList: CollectionEntry<'post'>[];
}

const SearchBar = ({ searchList }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const fuseList = new Fuse(searchList, options);

  const posts = fuseList
    .search(query)
    .map(result => result.item)
    .slice(0, 5);

  const handleOnSearch = (inputVal: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(inputVal.target.value);
  };

  return (
    <label className="input input-bordered flex items-center gap-2">
      <input
        type="text"
        className="grow"
        placeholder="Search"
        value={query}
        onChange={handleOnSearch}
      />
    </label>
  );
};

export default SearchBar;
