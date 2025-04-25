import axios from "axios";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { Button, Box, Typography, CircularProgress } from "@mui/material";
import { BASE_URL } from "../../config/baseUrl";


// Get Session Key from Local Storage
const getSessionKey = () => {
  return "123";
}
const userId = "123"

// ✅ GET Request
const getData = async () => {

  try {
    const response = await axios.get(`${BASE_URL}/getData/${userId}`, {
        headers: {
          Authorization: `Bearer ${getSessionKey()}`,
        },
      });

    if (response.data.success) {
      toast.success("Data retrieved successfully!");
      return response.data;
    } else {
      toast.error("Failed to retrieve data.");
    }
  } catch (error) {
    toast.error("Error fetching data.");
    console.error("GET Error:", error);
  }
};

// ✅ POST Request
 const postData = async () => {
  try {
    const data = {
      name: "John Doe",
      email: "124",
      fileUrls : ["1.jpg","2.jpg","3.jpg"]
    }
    const response = await axios.post(`${BASE_URL}/postData`, data, {
      headers: {
        Authorization: `Bearer ${getSessionKey()}`,
        "Content-Type": "application/json",
      },
    });

    if (response.data.success) {
      toast.success("Data sent successfully!");
      return response.data;
    } else {
      toast.error("Failed to send data.");
    }
  } catch (error) {
    toast.error("Error sending data.");
    console.error("POST Error:", error);
  }
};

// ✅ PUT Request (Updating Data)
 const putData = async () => {
  try {
    const data = {
      name: "Updated Name",
    };
    const response = await axios.put(`${BASE_URL}/putdata/${userId}`, data, {
      headers: {
        Authorization: `Bearer ${getSessionKey()}`,
        "Content-Type": "application/json",
      },
    });

    if (response.data.success) {
      toast.success("Data updated successfully!");
      return response.data;
    } else {
      toast.error("Failed to update data.");
    }
  } catch (error) {
    toast.error("Error updating data.");
    console.error("PUT Error:", error);
  }
};

// ✅ DELETE Request
 const deleteData = async () => {
  try {
    const index = 99;
    const response = await axios.delete(`${BASE_URL}/deleteData/${userId}?index=${index}`, {
      headers: {
        Authorization: `Bearer ${getSessionKey()}`,
      },
    });

    if (response.data.success) {
      toast.success("Data deleted successfully!");
      return response.data;
    } else {
      toast.error("Failed to delete data.");
    }
  } catch (error) {
    toast.error("Error deleting data.");
    console.error("DELETE Error:", error);
  }
};




const RouteComponent = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);

  // Handle Single File Selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle Multiple Files Selection
  const handleMultipleFilesChange = (event) => {
    setFiles(event.target.files);
  };

  // Execute API Calls
  const handleRequest = async (requestFunction, params = {}) => {
    setLoading(true);
    await requestFunction(params);
    setLoading(false);
  };

  return (
    <Box sx={{ textAlign: "center", marginTop: "2rem", padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        API Testing with Axios & Material UI
      </Typography>

      {/* GET Request */}
      <Button
        variant="contained"
        color="primary"
        sx={{ margin: "0.5rem" }}
        onClick={() => handleRequest(getData)}
      >
        {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : "GET Data"}
      </Button>

      {/* POST Request */}
      <Button
        variant="contained"
        color="success"
        sx={{ margin: "0.5rem" }}
        onClick={() => handleRequest(postData)}
      >
        {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : "POST Data"}
      </Button>

      <Button
        variant="contained"
        color="success"
        sx={{ margin: "0.5rem" }}
        onClick={() => handleRequest(postData)}
      >
        {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : "POST Data"}
      </Button>


      {/* PUT Request */}
      <Button
        variant="contained"
        color="warning"
        sx={{ margin: "0.5rem" }}
        onClick={() => handleRequest(putData)}
      >
        {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : "PUT (Update) Data"}
      </Button>

      {/* DELETE Request */}
      <Button
        variant="contained"
        color="error"
        sx={{ margin: "0.5rem" }}
        onClick={() => handleRequest(deleteData, "123")}
      >
        {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : "DELETE Data"}
      </Button>
    </Box>
  );
};

export default RouteComponent;