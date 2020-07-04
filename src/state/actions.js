export const GET_README = "GET_README";
export const SET_README = "SET_README";
export const GET_FILES = "GET_FILES";
export const SET_FILES = "SET_FILES";

export function getReadme(user, repository) {
  return { type: GET_README, user, repository };
}

export function getFiles(user, repository, path) {
  return { type: GET_FILES, user, repository, path };
}
