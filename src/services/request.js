async function request(link) {
  function getTags(markdown) {
    //wip
    let index = 0;

    while (index !== -1) {
      let imgPosition = markdown.indexOf("<img", index);

      if (imgPosition !== -1) {
        index = imgPosition + 1;
      } else {
        index = imgPosition;
      }
      console.log(imgPosition);
    }
  }

  try {
    let response = await fetch(link);

    response = await response.json();
    response = await fetch(response.download_url);
    response = await response.text();

    getTags(response);

    return response;
  } catch (err) {
    return console.error("Error on request: ", err);
  }
}

export default request;
