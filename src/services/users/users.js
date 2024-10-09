import axios from "axios";

/**
 * fetchNewUser Function: This function handles the API call to fetch
 * the user data using axios. It returns the data received from the API
 * or throws an error if the request fails.
 */
export default fetchNewUser = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/");
    return response.data;
  } catch (error) {
    console.error("Error fetching the new user:", error);
    throw error;
  }
};
