import axios from "axios";

const fetchProduct = async (id: string | undefined) => {
  if (!id) {
    throw new Error("Product ID is required.");
  }

  try {
    const res = await axios.get(`/products/${id}`);

    if (!res.data) {
      throw new Error(`No product found with ID: ${id}`);
    }

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }

    throw new Error("Failed to fetch product. Please try again later.");
  }
};

export default fetchProduct;
