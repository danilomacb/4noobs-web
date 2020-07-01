async function getReadme(user, repository) {
  const ReadmeLink = `https://api.github.com/repos/${user}/${repository}/contents/README.md`;

  try {
    let readme = await fetch(ReadmeLink);

    readme = await readme.json();
    readme = await fetch(readme.download_url);
    readme = await readme.text();

    return readme;
  } catch (err) {
    return console.error("Error on request: ", err);
  }
}

export default getReadme;
