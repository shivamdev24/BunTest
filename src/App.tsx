

import  { useEffect, useState } from 'react';

interface Anime {
  link: string;
  name: string;
}

interface AnimeList {
  Completed: Anime[];
  PlanToWatch: Anime[];
  OnHold: Anime[];
  Dropped: Anime[];
  Watching: Anime[];
}

export default function  App() {
  const [animeList, setAnimeList] = useState<AnimeList>({
    Completed: [],
    PlanToWatch: [],
    OnHold: [],
    Dropped: [],
    Watching: [],
  });

  useEffect(() => {
    fetch("../Anime.json")
      .then((response) => response.json())
      .then((data) => setAnimeList(data));
  }, []);

  return (
    <div className="App">
      <div className="flex ">
        <div>
          <h1 className='text-2xl font-bold'>Completed</h1>
          {animeList.Completed.map((anime) => (
            <div key={anime.link}>
              <span>
                <a href={anime.link} target="_blank" rel="noopener noreferrer">
                  {anime.name}
                </a>
              
              </span>
            </div>
          ))}
          <h2>hi</h2>
        </div>
        <div>
          <h1 className='text-2xl font-bold'>Plan To Watch</h1>
          {animeList.PlanToWatch.map((anime) => (
            <div key={anime.link}>
              <span>
                <a href={anime.link} target="_blank" rel="noopener noreferrer">
                  {anime.name}
                </a>
              </span>
            </div>
          ))}
        </div>
        <div>
          <h1 className='text-2xl font-bold'>OnHold</h1>
          {animeList.OnHold.map((anime) => (
            <div key={anime.link}>
              <span>
                <a href={anime.link} target="_blank" rel="noopener noreferrer">
                  {anime.name}
                </a>
              </span>
            </div>
          ))}
        </div>
        <div>
          <h1 className='text-2xl font-bold'>Dropped</h1>
          {animeList.Dropped.map((anime) => (
            <div key={anime.link}>
              <span>
                <a href={anime.link} target="_blank" rel="noopener noreferrer">
                  {anime.name}
                </a>
              </span>
            </div>
          ))}
        </div>
        <div>
          <h1 className='text-2xl font-bold'>Watching</h1>
          {animeList.Watching.map((anime) => (
            <div key={anime.link}>
              <span>
                <a href={anime.link} target="_blank" rel="noopener noreferrer">
                  {anime.name}
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}
      