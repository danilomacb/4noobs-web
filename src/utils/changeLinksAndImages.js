function changeLinksAndImages(markdown, user, respository) {
  const docs = new RegExp("./docs", "g");
  const assets = new RegExp("./assets", "g");

  let newMarkdown = markdown;

  newMarkdown = newMarkdown.replace(docs, `/${user}/${respository}`);
  newMarkdown = newMarkdown.replace(
    assets,
    "https://raw.githubusercontent.com/danilomacb/4noobs-model/master/assets"
  );

  return newMarkdown;
}

export default changeLinksAndImages;
