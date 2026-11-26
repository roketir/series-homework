# series-homework
עבודת בית 1: JavaScript, JSON ו־Git — פלטפורמת סדרות


Helper functions and bug fixes for managing TV series data in JSON format.

## Running Tests

Run checks from the project folder.

    node check.js



  Questions

  1. { ...show } is only a shallow copy, so seasons and episodes still point to the original arrays. To avoid changing the original data, I recreated the series array, the target show object, its seasons array, the target season object, and its episodes array.

  2. The colleague ran firstSeason.episodes.push(episode) before copying, which already changed the original array. 
  Also, { ...show } is only a shallow copy, so seasons and episodes still pointed to the original arrays anyway.
