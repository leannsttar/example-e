import express from "express"
import userRoutes from "./routes/users.routes.js";

const app = express();

app.use(express.json())

app.use("/api/users", userRoutes)

app.get('/', (req, res) => {
    res.send('hi')
})

app.listen(3000, () => {
    console.log(`Server running on port ${3000}`)
})