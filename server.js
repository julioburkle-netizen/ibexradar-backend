const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors({ origin: "*" }));
app.get("/", (req, res) => {
  res.json({ status: "IBEXRadar Backend OK", time: new Date().toISOString() });
});
app.get("/api/yahoo", async (req, res) => {
  try {
    const { ticker, interval, range } = req.query;
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}?interval=${interval}&range=${range}&includePrePost=false`;
    const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    const data = await r.json();
    res.json(data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});
app.get("/api/yahoo2", async (req, res) => {
  try {
    const { ticker, interval, range } = req.query;
    const url = `https://query2.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}?interval=${interval}&range=${range}&includePrePost=false`;
    const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    const data = await r.json();
    res.json(data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});
app.listen(PORT, () => console.log(`IBEXRadar Backend en puerto ${PORT}`));
