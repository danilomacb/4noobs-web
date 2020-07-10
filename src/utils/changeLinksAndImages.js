function changeLinksAndImages(markdown, user, repository, path) {
  if(!user && !repository) {
    user = "danilomacb"
    repository = "4noobs"
  }

  let docs;
  let assets;

  if (path === "/" || path === "/:user/:repository") {
    docs = new RegExp("./4noobsDocs", "g");
    assets = new RegExp("./4noobsAssets", "g");
  }

  if (path === "/:user/:repository/:file") {
    docs = new RegExp("../4noobsDocs", "g");
    assets = new RegExp("../4noobsAssets", "g");
  }

  let newMarkdown = markdown;

  newMarkdown = newMarkdown.replace(docs, `/${user}/${repository}`);
  newMarkdown = newMarkdown.replace(
    assets,
    `https://raw.githubusercontent.com/${user}/${repository}/master/4noobsAssets`
  );

  return newMarkdown;
}

export default changeLinksAndImages;
