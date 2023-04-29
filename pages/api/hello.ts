import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const list = await prisma.post.findMany();
    console.log(list);
    return res.status(200).json(list);
  } else if (req.method == "POST") {
    const { title, content } = req.body;
    const posts = await prisma.post.create({
      data: {
        title: title,
        content: content,
      },
    });
    return res.status(200).json(posts);
  } else if (req.method == "DELETE") {
    console.log(req.body);
    const { id } = req.body;
    console.log(id);

    // const deletePost = await prisma.post.delete({
    //   where: {
    //     id: req.body.id,
    //   },
    // });
    return res.status(200).json(req.body.id);
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
