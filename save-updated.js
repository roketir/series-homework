 import { writeFileSync } from "node:fs";
    import { loadData } from "./load.js";
    import { addSeason } from "./series-service.js";

    const data = loadData();

    const newSeason = {
      number: 1,
      episodes: [{ id: 801, title: "First Contact", rating: 8.0, duration: 44 }],
    };

    const updatedSeries = addSeason(data.series, 5, newSeason);

    const updatedData = {
      platform: data.platform,
      series: updatedSeries,
    };

    writeFileSync("series-updated.json", JSON.stringify(updatedData, null, 2));
