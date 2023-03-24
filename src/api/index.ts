import basicRequest from "./axios";

const { getRequest } = basicRequest;

const api = () => {
  const fetchHotPlayList = () => {
    return getRequest("/playlist/hot");
  };
  const fetchPlayListDetail = (playlistId) => {
    return getRequest("/playlist/detail", { id: playlistId });
  };

  return { fetchHotPlayList, fetchPlayListDetail };
};

export default api();
