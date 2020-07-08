function changeLinks(markdown, user, respository) {
  const regex = new RegExp("/docs", "g");
  const newMarkdown = markdown.replace(regex, `/${user}/${respository}`);

  return newMarkdown;
}

export default changeLinks;
