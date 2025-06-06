import express from 'express'

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 500

app.listen(PORT, () => {
  console.log("Rodando na porta 5000")
})