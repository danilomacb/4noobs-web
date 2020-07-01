export const GET_README = "GET_README";
export const SET_README = "SET_README";
export const SET_FILES = "SET_FILES";

export function getReadme(user, repository) {
  return { type: GET_README, user, repository };
}

export function setFiles(files) {
  return { type: SET_FILES, files };
}
