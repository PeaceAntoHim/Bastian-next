import prisma from '../../lib/prisma'

export default async function handle(req, res) {
    // const route = useRouter();
    const result = await prisma.message.create({
    data: {
        ...req.body,
        },
    })
    res.json(result)
    
}