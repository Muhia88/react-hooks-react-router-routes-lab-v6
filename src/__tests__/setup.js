import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import 'whatwg-fetch';
import {Blob} from 'node:buffer';

afterEach(() => {
    cleanup();
})

// Global fetch mock for all tests
global.fetch = vi.fn((url) => {
  if (url.includes('actors')) {
    return Promise.resolve({
      json: () => Promise.resolve([
        {
          name: "Benedict Cumberbatch",
          movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
        },
        {
          name: "Justin Timberlake",
          movies: ["Trolls", "Friends with Benefits", "The Social Network"],
        },
        {
          name: "Anna Kendrick",
          movies: ["Pitch Perfect", "Into The Wood"],
        },
        {
          name: "Tom Cruise",
          movies: [
            "Jack Reacher: Never Go Back",
            "Mission Impossible 4",
            "War of the Worlds",
          ],
        },
      ])
    });
  }
  if (url.includes('directors')) {
    return Promise.resolve({
      json: () => Promise.resolve([
        {
          name: "Scott Derrickson",
          movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
        },
        {
          name: "Mike Mitchell",
          movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
        },
        {
          name: "Edward Zwick",
          movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
        },
      ])
    });
  }
  if (url.includes('movies')) {
    if (/movies\/\d+$/.test(url)) {
      return Promise.resolve({
        json: () => Promise.resolve({
          id: 1,
          title: "Doctor Strange",
          time: 115,
          genres: ["Action", "Adventure", "Fantasy"]
        })
      });
    }
    return Promise.resolve({
      json: () => Promise.resolve([
        { id: 1, title: "Doctor Strange" },
        { id: 2, title: "Trolls" },
        { id: 3, title: "Pitch Perfect" }
      ])
    });
  }
  return Promise.resolve({ json: () => Promise.resolve([]) });
});
