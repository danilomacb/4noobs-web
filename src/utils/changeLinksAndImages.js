import links from "../4noobs.json";

function changeLinksAndImages(markdown, user, repository, path) {
  if (!user && !repository) {
    user = links.home.user;
    repository = links.home.repository;
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

  const roadmap = new RegExp("../README.md", "g");

  newMarkdown = newMarkdown.replace(roadmap, `/${user}/${repository}`);

  return newMarkdown;
}

export default changeLinksAndImages;
