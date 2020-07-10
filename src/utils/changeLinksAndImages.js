function changeLinksAndImages(markdown, user, repository, path) {
  if(!user && !repository) {
    user = "danilomacb"
    repository = "4noobs"
  }

  let docs;
  let assets;

  if (path === "/" || path === "/:user/:repository") {
    docs = new RegExp("./docs", "g");
    assets = new RegExp("./assets", "g");
  }

  if (path === "/:user/:repository/:file") {
    docs = new RegExp("../docs", "g");
    assets = new RegExp("../assets", "g");
  }

  let newMarkdown = markdown;

  newMarkdown = newMarkdown.replace(docs, `/${user}/${repository}`);
  newMarkdown = newMarkdown.replace(
    assets,
    `https://raw.githubusercontent.com/${user}/${repository}/master/assets`
  );

  return newMarkdown;
}

export default changeLinksAndImages;
