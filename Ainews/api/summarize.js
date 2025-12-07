export default async function handler(req, res) {
  const { text } = req.body;

  const summary = text?.slice(0, 150) + "...";

  res.status(200).json({
    summary,
    bullets: [
      "AI generated summary",
      "Short and easy to read",
      "Auto created"
    ]
  });
}
