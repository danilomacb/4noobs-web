import { setFiles } from "../state/actions";

async function getFiles(dispatch, user, repository) {
  const filesLink = `https://api.github.com/repos/${user}/${repository}/contents/docs`;

  try {
    let files = await fetch(filesLink);

    files = await files.json();

    // dispatch(setFiles(files));
  } catch (err) {
    return console.error("Error on request: ", err);
  }
}

export default getFiles;
