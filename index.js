const express = require('express')
const path = require('path')
const app = express()
const port = 3001

// 정적 파일 서빙
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api', (req, res) => {
  res.json({
    message: 'Express API 서버가 정상 동작 중입니다',
    endpoints: [
      { method: 'GET', path: '/', description: '웹사이트 소개 페이지' },
      { method: 'GET', path: '/api', description: 'API 상태 확인' },
      { method: 'GET', path: '/hellow', description: '테스트 엔드포인트' }
    ],
    timestamp: new Date().toISOString()
  })
})

app.get('/hellow', (req, res) => {
  res.send('hellow')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})