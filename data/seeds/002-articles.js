
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("articles").del()
    .then(function () {
      // Inserts seed entries
      return knex("articles").insert([
        {
          id: 1,
          title: "Pokemon electronic game",
          description:
            "Pokémon, electronic game series from Nintendo that debuted in Japan in 1995 and later became wildly popular in the United States. The series, originally produced for the company’s Game Boy line of handheld consoles, was introduced in 1998 to the United States with two titles, known to fans as Red and Blue.",
          image:
            "https://cdn.britannica.com/s:700x450/70/122270-004-0564DF2A.jpg",
          link:
            "https://www.britannica.com/topic/Pokemon-electronic-game",
          image:
            "https://cdn.britannica.com/s:700x450/70/122270-004-0564DF2A.jpg",
          user_id: 1,
        },
        {
          id: 2,
          title: "Dota 2",
          description:
            "Dota 2 is a multiplayer online battle arena video game developed and published by Valve Corporation. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos and its expansion pack, The Frozen Throne",
          image:
            "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2019/02/24144435/0_vbw4wQW_Xq2_3eOo.jpg",
          link: 
            "https://en.wikipedia.org/wiki/Dota_2",
          user_id: 2,
        },
        {
          id: 3,
          title: "League of Legends",
          description:
            "League of Legends is a multiplayer online battle arena video game developed and published by Riot Games for Microsoft Windows and macOS. The game follows a freemium model and is supported by microtransactions, and was inspired by the Warcraft III: The Frozen Throne mod, Defense of the Ancients",
          image:
            "https://cdn.arstechnica.net/wp-content/uploads/2015/02/lol-640x360.png",
          link: 
            "https://en.wikipedia.org/wiki/League_of_Legends",
          user_id: 3,
        }
      ]);
    });
};