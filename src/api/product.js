import axios from "axios";

const API_URL = "http://localhost:5000/api";


export const addProduct = async (productData) => {
  try {
    const responce = await axios.post(
      `${API_URL}/product/addproduct`,
      productData
    );
    return responce.data;
  } catch (error) {
    console.log("Error : ", error.message);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/product/allproducts`);
    return response.data;
  } catch (error) {
    console.log("Error:", error.message);
    throw error; // Re-throw the error to handle it in the calling function
  }
};

export const getProductbyid = async (id) => {
  try {
    if (!id) throw new Error('Invalid product ID');

    const response = await axios.get(`${API_URL}/product/getproduct/${id}`);

    return response.data;

  } catch (error) {
    console.error('Error fetching product by ID:', error.message);

    throw new Error(`Failed to fetch product with ID ${id}: ${error.message}`);
  }
};
export const deleteProduct = async (id) => {
  try {

    const res = axios.delete(`${API_URL}/product/${id}`)

    return true

  } catch (error) {
    console.log(error)
  }
}