document.addEventListener("DOMContentLoaded", function () {
  // Sample data for recent articles
  const recentArticlesData = [
    { title: "The Rise of Artificial Intelligence", link: "#" },
    { title: "5G Technology: A Game Changer", link: "#" },
    { title: "The Future of Virtual Reality", link: "#" },
  ];

  // Display recent articles
  const articlesList = document.getElementById("articles-list");
  recentArticlesData.forEach((article) => {
    const articleElement = document.createElement("div");
    articleElement.innerHTML = `<a href="${article.link}">${article.title}</a>`;
    articlesList.appendChild(articleElement);
  });
});
