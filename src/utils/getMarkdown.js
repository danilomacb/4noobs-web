import changeLinksAndImages from "./changeLinksAndImages";

async function getMarkdown(match) {
  let link;
  const { user, repository, path, file } = match.params;

  switch (match.path) {
    case "/":
      link = "https://api.github.com/repos/danilomacb/4noobs/contents/README.md";
      break;

    case "/:user/:repository":
      link = `https://api.github.com/repos/${user}/${repository}/contents/README.md`;
      break;

    case "/:user/:repository/:file":
      link = `https://api.github.com/repos/${user}/${repository}/contents/4noobsDocs/${file}`;
      break;

    case "/:user/:repository/:file/*":
      link = `https://api.github.com/repos/${user}/${repository}/contents/4noobsDocs/${file}/${match.params[0]}`;
      break;

    default:
      break;
  }

  let response = await fetch(link);
  if (!response.ok) return response;

  response = await response.json();
  response = await fetch(response.download_url);
  response = await response.text();

  response = changeLinksAndImages(response, user, repository, path);

  return response;
}

export default getMarkdown;
