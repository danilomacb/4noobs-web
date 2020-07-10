import changeLinksAndImages from "./changeLinksAndImages";

async function getMarkdown(match) {
  let link;

  switch (match.path) {
    case "/":
      link = "https://api.github.com/repos/danilomacb/4noobs/contents/README.md";
      break;

    case "/:user/:repository":
      link = `https://api.github.com/repos/${match.params.user}/${match.params.repository}/contents/README.md`;
      break;

    case "/:user/:repository/:file":
      link = `https://api.github.com/repos/${match.params.user}/${match.params.repository}/contents/docs/${match.params.file}`;
      break;

    default:
      break;
  }

  let response = await fetch(link);
  response = await response.json();
  response = await fetch(response.download_url);
  response = await response.text();

  response = changeLinksAndImages(response, match.params.user, match.params.repository, match.path);

  return response;
}

export default getMarkdown;
