import express from 'express'

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 500

const router = express.Router()

//rota de listagem de produtos
router.get("/", async (req, res) => {

})


app.listen(PORT, () => {
  console.log("Rodando na porta 5000")
})