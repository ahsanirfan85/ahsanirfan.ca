var movies = [
  {
    title: "In Bruges",
    seen: "seen",
    stars: 5
  },
  {
    title: "Frozen",
    seen: "not seen",
    stars: 4.5
  },
  {
    title: "Mad Max Fury Road",
    seen: "seen",
    stars: 5
  },
  {
    title: "Les Miserables",
    seen: "not seen",
    stars: 3.5
  }
];

movies.forEach(function(x) {
  console.log(
    "You have " + x.seen + ' "' + x.title + '" ' + "- " + x.stars + " stars"
  );
});
