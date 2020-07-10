function changeLinksAndImages(markdown, user, repository, path) {
  let docs;
  let assets;

  if (path === "/:user/:repository") {
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
