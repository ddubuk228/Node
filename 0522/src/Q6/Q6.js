import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();

// 정적 파일 제공을 위한 middleware 설정
app.use(express.static(path.join(__dirname)));

// 라우트 설정
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/info", (req, res) => {
  res.sendFile(path.join(__dirname, "info.html"));
});

app.get("/location", (req, res) => {
  res.sendFile(path.join(__dirname, "location.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
  });

// 404 에러 처리
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});