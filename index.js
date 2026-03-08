const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3001

// JSON 요청 파싱
app.use(express.json())

// 정적 파일 서빙
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api', (req, res) => {
  res.json({
    message: 'Express API 서버가 정상 동작 중입니다',
    endpoints: [
      { method: 'GET', path: '/', description: '웹사이트 소개 페이지' },
      { method: 'GET', path: '/api', description: 'API 상태 확인' },
      { method: 'GET', path: '/hello', description: '테스트 엔드포인트' }
    ],
    timestamp: new Date().toISOString()
  })
})

app.get('/hello', (req, res) => {
  res.send('hello')
})

// 404 처리
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found', path: req.originalUrl })
})

// 에러 핸들링
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal Server Error' })
})

app.listen(port, () => {
  console.log(`Express app listening on http://localhost:${port}`)
})