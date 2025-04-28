import express from 'express'
import {PrismaClient} from '@prisma/client'
import { Request, Response } from 'express'
const prismaClient = new PrismaClient()

const app = express() 
app.use(express.json())

app.get('/', async (req: Request, res: Response)=>{
    const data = await prismaClient.user.findMany()
    res.json({
        data
    })
})

app.post('/', async (req: Request, res: Response)=>{
    const user = await prismaClient.user.create({
        data: {
        username: Math.random().toString(),
        password: Math.random().toString()
    }})
    res.json({
        message: "POST endpoint",
        id: user.id
    })
})

app.listen(3000)
