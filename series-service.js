export const getEpisodeTitle = (show, seasonIndex, episodeIndex) =>
      show.seasons[seasonIndex].episodes[episodeIndex].title;

export const getLastSeasonNumber = (show) => show.seasons.length === 0 ? 0 : show.seasons.at(-1).number   

export const getNextSeasonYear =(show) => {
    return show.nextSeason?.year ?? "No announcement";
    };