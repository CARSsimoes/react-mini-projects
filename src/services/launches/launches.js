import axios from "axios";

const fetchLaunches = async (option) => {
  try {
    const response = await axios.get(
      `https://api.spacexdata.com/v3/launches?rocket_name=${option}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching launches:", error);
    throw error;
  }
};

const fetchRockets = async () => {
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/rockets");
    return response.data;
  } catch (error) {
    console.error("Error fetching rockets:", error);
    throw error;
  }
};

export { fetchLaunches, fetchRockets };
