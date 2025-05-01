import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com";

const fetchAllProducts = async () => {
  try {
    const res = await axios.get(`/products`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw new Error("Failed to fetch products. Please try again later.");
  }
};

export default fetchAllProducts;
