// pages/api/metadata/[tokenId].tsx
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const imageBaseURL =
  "https://ipfs.io/ipfs/QmNUVfV5cndZKfbfGcMqdnZo6UmscKQZiW2KNjEoKjZ3h8";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const tokenIdSchema = z.object({
    tokenId: z
      .string()
      .refine((tokenId) => !isNaN(Number(tokenId)), "Invalid token ID"),
  });
  const { tokenId } = tokenIdSchema.parse(req.query);

  const metadata = {
    name: `My NFT #${tokenId}`,
    description: `This is NFT number ${tokenId} in the collection.`,
    image: imageBaseURL,
    attributes: [
      {
        trait_type: "Counter",
        value: Number(tokenId),
      },
    ],
  };

  res.status(200).json(metadata);
};

export default handler;
