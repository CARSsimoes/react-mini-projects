import { useEffect, useState } from "react";
import {
  fetchLaunches,
  fetchRockets,
} from "../../../../services/launches/launches";

const useLaunches = () => {
  const [launches, setLaunches] = useState([]);
  const [rockets, setRockets] = useState([]);
  const [option, setOption] = useState("");

  const getFromCache = (key) => {
    const cached = sessionStorage.getItem(key);
    if (cached) {
      return JSON.parse(cached);
    }
    return null;
  };

  const setCache = (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
  };

  async function getLaunches(option) {
    const cachedLaunches = getFromCache(`launches_${option}`);
    if (cachedLaunches) {
      setLaunches(cachedLaunches);
      return;
    }

    try {
      const data = await fetchLaunches(option);
      setLaunches([...data]);
      setCache(`launches_${option}`, data); // Update cache with fresh data
    } catch (error) {
      console.error("Error fetching the launches:", error);
      throw error;
    }
  }

  useEffect(() => {
    getLaunches(option);
  }, [option]);

  async function getRockets() {
    const cachedRockets = getFromCache("rockets");
    if (cachedRockets) {
      setRockets(cachedRockets);
      return;
    }

    try {
      const data = await fetchRockets();
      setRockets((prevRockets) => [...data]);
      setCache("rockets", data); // Update cache with fresh data
    } catch (error) {
      console.error("Error fetching the rockets:", error);
      throw error;
    }
  }

  useEffect(() => {
    getRockets();
  }, []);

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return {
    launches,
    rockets,
    option,
    handleChange,
  };
};

export default useLaunches;
