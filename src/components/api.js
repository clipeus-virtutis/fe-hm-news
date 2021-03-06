import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://hmm-news.herokuapp.com/api",
});

export function fetchArticles() {
  return newsApi.get("/articles").then((response) => {
    return response.data;
  });
}

export function fetchTopics() {
  return newsApi.get("/topics").then((response) => {
    return response.data;
  });
}

export function fetchArticlesByTopic(topic) {
  return newsApi.get(`/articles?topic=${topic}`).then((response) => {
    return response.data;
  });
}

export function fetchSingleArticle(articleId) {
  return newsApi.get(`/articles/${articleId}`).then((response) => {
    return response.data;
  });
}

export function patchArticleVotes(articleId, inc_votes) {
  return newsApi.patch(`/articles/${articleId}`, { inc_votes });
}

export function fetchArticleComments(articleId) {
  return newsApi.get(`/articles/${articleId}/comments`).then((response) => {
    return response.data;
  });
}
