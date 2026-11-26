export const getEpisodeTitle = (show, seasonIndex, episodeIndex) =>
      show.seasons[seasonIndex].episodes[episodeIndex].title;

export const getLastSeasonNumber = (show) => show.seasons.length === 0 ? 0 : show.seasons.at(-1).number   

export const getNextSeasonYear = (show) => {
    return show.nextSeason?.year ?? "No announcement";
    };

export const getById = (series, id) => series.find(show => show.id === id);

export const getSeasonsCount = (series) => {
      return series.map(show => {
        return {
          title: show.title,
          seasons: show.seasons.length
        };
      });
    };

export const hasTopEpisode = (show, minRating) => {
    return show.seasons.some(season =>
    season.episodes.some(episode => episode.rating >= minRating)
    );
};

export const getCreatorsFrom = (series, country) => {
      return series
        .filter(show => show.creator.country === country)
        .map(show => show.creator.name);
    };

export const sortByStartYear = (series) => {
    return [...series].sort((a, b) => a.startYear - b.startYear);
};

export const renameSeries = (series, id, newTitle) => {
      return series.map(show =>
        show.id === id ? { ...show, title: newTitle } : show
      );
    };

export const addSeason = (series, showId, season) => {
  return series.map(show =>
    show.id === showId
      ? { ...show, seasons: [...show.seasons, season] }
      : show
  );
};

export const addEpisode = (series, showId, seasonNumber, episode) => {
      return series.map(show => {
        if (show.id !== showId) {
          return show;
        }

        return {
          ...show,
          seasons: show.seasons.map(season =>
            season.number === seasonNumber
              ? { ...season, episodes: [...season.episodes, episode] }
              : season
          ),
        };
      });
    };