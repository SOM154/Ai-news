export default async function handler(req, res) {
  const { q = "", category = "general", pageSize = "12", page = "1" } = req.query;
  const API_KEY = process.env.NEWS_API_KEY;

  const url = `https://newsapi.org/v2/top-headlines?category=${category}&q=${q}&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  res.status(200).json({ articles: data.articles || [] });
}
