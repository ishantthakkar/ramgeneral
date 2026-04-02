import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = "razelightning";

/**
 * A list of route definitions for Prismic.
 */
const routes: prismic.ClientConfig["routes"] = [
  {
    type: "products",
    path: "/products/:uid",
  },
  {
    type: "product_category",
    path: "/category/:uid",
  },
  {
    type: "product_sub_category",
    path: "/collections/:uid",
  },
];

/**
 * Creates a Prismic client for the project's repository.
 */
export function createClient(config: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { revalidate: 3600 } }
        : { next: { revalidate: 0 } },
    ...config,
  });

  return client;
}
