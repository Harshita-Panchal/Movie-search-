let movies = [
  {
    title: "Bhramastra",
    image:
      "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/09/09/1088075-brahmastra-new.jpg",
  },
  {
    title: "Spider",
    image: "https://i.ytimg.com/vi/-cCLi7VwiXw/maxresdefault.jpg",
  },
  {
    title: "Golmaal Again",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/old_images/MOVIE/7002/1770017002/1770017002-h",
  },
  {
    title: "Welcome",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/42c03e0e3736525dea5f810582687e340b2f232ab5131f6ae6f1de4000851877._RI_.jpg",
  },
];

let searchInput = document.querySelector("#search");
let searchResultsContainer = document.querySelector("#searchresult");

searchInput.addEventListener("input", (e) => {
  if (e.target.value === "") {
    searchResultsContainer.innerHTML = "";
    return;
  }

  let searchResults = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(e.target.value.toLowerCase());
  });

  searchResultsContainer.innerHTML = "";
  console.log(searchResults);
  searchResults.forEach((element) => {
    let p = document.createElement("p");
    let img = document.createElement("img");
    p.textContent = element.title;
    img.src = element.image;
    searchResultsContainer.appendChild(p);
    searchResultsContainer.appendChild(img);
  });
});
