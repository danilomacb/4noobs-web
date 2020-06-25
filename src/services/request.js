async function request(link) {
  try {
    let response = await fetch(link);

    response = await response.json();
    response = await fetch(response.download_url);
    response = await response.text();

    return response;
  } catch (err) {
    return console.error("Error on request: ", err);
  }
}

export default request;
