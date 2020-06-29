async function request(link) {
  function getLinks(markdown) {
    let linkStartCollection = [];
    let linkEndCollection = [];
    const element = "](/";
    let linkPosition = markdown.indexOf(element);
    let allLinks = [];

    while (linkPosition !== -1) {
      linkStartCollection.push(linkPosition);
      linkEndCollection.push(markdown.indexOf(")", linkPosition));
      linkPosition = markdown.indexOf(element, linkPosition + 1);
    }

    for (let i = 0; i < linkStartCollection.length; i++) {
      allLinks.push(markdown.substring(linkStartCollection[i] + 2, linkEndCollection[i]));
    }

    console.log(allLinks);
  }

  try {
    let response = await fetch(link);

    response = await response.json();
    response = await fetch(response.download_url);
    response = await response.text();

    getLinks(response);

    return response;
  } catch (err) {
    return console.error("Error on request: ", err);
  }
}

export default request;
