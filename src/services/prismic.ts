import Prismic from "@prismicio/client";

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(process.env.PRIMIC_ENDPOINT, {
    accessToken: process.env.PRIMIC_ACCESS_TOKEN,
    req,
  });
  return prismic;
}
