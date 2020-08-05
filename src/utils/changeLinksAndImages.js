import links from "../4noobs.json";

function changeLinksAndImages(markdown, user, repository, path) {
  if (!user && !repository) {
    user = links.home.user;
    repository = links.home.repository;
  }

  let newMarkdown = markdown;

  newMarkdown = newMarkdown.replace(/\.*\/4noobsDocs/g, `/${user}/${repository}`);

  newMarkdown = newMarkdown.replace(
    /\.*\/4noobsAssets/g,
    `https://raw.githubusercontent.com/${user}/${repository}/master/4noobsAssets`
  );

  newMarkdown = newMarkdown.replace(/(\.\.\/)*README\.md/g, `/${user}/${repository}`);

  return newMarkdown;
}

export default changeLinksAndImages;
