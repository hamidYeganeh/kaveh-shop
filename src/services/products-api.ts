import { fetcher } from "@/helpers";
import {
  GET_ALL_PRODUCTS_ENDPOINT,
  GET_SINGLE_PRODUCTS_ENDPOINT,
  SEARCH_PRODUCTS_ENDPOINT,
  GET_ALL_PRODUCT_CATEGORIES_ENDPOINT,
  GET_CATEGORY_PRODUCTS_ENDPOINT,
} from "./endpoints";

type TProductParams = {
  productId?: number;
  query?: string;
  limit?: number;
  skip?: number;
};

export async function getProducts(params?: TProductParams) {
  const [
    productsRes,
    singleProductRes,
    searchProductsRes,
    categoriesRes,
    singleCategoryRes,
  ] = await Promise.all([
    // all
    fetcher(GET_ALL_PRODUCTS_ENDPOINT, {
      limit: params?.limit,
      skip: params?.skip,
    }),
    //   single
    fetcher(`${GET_SINGLE_PRODUCTS_ENDPOINT}${1}`),
    // search
    fetcher(`${SEARCH_PRODUCTS_ENDPOINT}`, { q: params?.query }),
    // all get categories
    fetcher(GET_ALL_PRODUCT_CATEGORIES_ENDPOINT),
    // single category
    fetcher(
      `${GET_CATEGORY_PRODUCTS_ENDPOINT}${params?.productId || "smartphones"}`
    ),
  ]);

  if (!productsRes.ok) {
    console.log("Error: ", productsRes?.statusText);
    throw new Error("Failed to fetch products");
  }
  if (!singleProductRes.ok) {
    console.log("Error: ", singleProductRes?.statusText);
    throw new Error("Failed to fetch product");
  }
  if (!categoriesRes.ok) {
    console.log("Error: ", categoriesRes?.statusText);
    throw new Error("Failed to fetch categories");
  }
  if (!singleCategoryRes.ok) {
    console.log("Error: ", singleCategoryRes?.statusText);
    throw new Error("Failed to fetch category");
  }

  const [products, singleProduct, searchProducts, categories, singleCategory] =
    await Promise.all([
      productsRes?.json(),
      singleProductRes?.json(),
      searchProductsRes?.json(),
      categoriesRes?.json(),
      singleCategoryRes?.json(),
    ]);

  return {
    products,
    singleProduct,
    searchProducts,
    categories,
    singleCategory,
  };
}
