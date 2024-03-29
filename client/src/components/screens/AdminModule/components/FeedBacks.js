import React, { useState, useEffect } from "react";
import "../../../css/Main.css";
import axios from "axios";
import Loader from "../../../otherComponents/Loader/Loader";

const FeedBacks = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getApiData = async () => {
    const url =
      "https://pickandstitches-deployment-server.onrender.com/api/feedback/getFeedBack?";

    try {
      const response = await axios.get(url);
      const result = response.data.FeedBack; // Access FeedBacks from the response data
      setData(result);
    } catch (error) {
      console.error("Error Fetching FeedBacks:", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const filterData = () => {
    return data.filter(
      (item) =>
        item.name.includes(searchText) || item.mobile.includes(searchText)
    );
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);

    // If "Select All" is checked, update selectedItems with all item IDs; otherwise, clear selectedItems
    setSelectedItems(!selectAll ? data.map((item) => item._id) : []);
  };

  const handleIndividualCheckbox = (itemId) => {
    if (selectedItems.includes(itemId)) {
      // Item is already selected, remove it from the list
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      // Item is not selected, add it to the list
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleIndividualDelete = async (id) => {
    // Show an alert to confirm the deletion
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this feedback?"
    );

    if (userConfirmed) {
      try {
        // Set loading to true to show the loader
        setLoading(true);

        await axios.delete(
          `https://pickandstitches-deployment-server.onrender.com/api/feedback/${id}`
        );

        // Update the data in state after successful deletion
        setData((prevData) => prevData.filter((item) => item._id !== id));
      } catch (error) {
        console.error("Error deleting FeedBack:", error);
      } finally {
        // Set loading back to false once the deletion is complete (regardless of success or failure)
        setLoading(false);
      }
    }
  };

  const handleDeleteSelected = async () => {
    // Show an alert to confirm the deletion
    const userConfirmed = window.confirm(
      "Are you sure you want to delete selected feedbacks?"
    );

    if (userConfirmed) {
      try {
        // Use Promise.all to wait for all delete requests to complete
        setLoading(true);
        await Promise.all(
          selectedItems.map(async (id) => {
            await axios.delete(
              `https://pickandstitches-deployment-server.onrender.com/api/feedback/${id}`
            );
          })
        );

        // Update the data in state after successful deletion
        setData((prevData) =>
          prevData.filter((item) => !selectedItems.includes(item._id))
        );

        // Clear the selected items after deletion
        setSelectedItems([]);
        // Uncheck "Select All" after deletion
        setSelectAll(false);
      } catch (error) {
        console.error("Error deleting selected FeedBacks:", error);
      } finally {
        // Set loading back to false once the deletion is complete (regardless of success or failure)
        setLoading(false);
      }
    }
  };

  return (
    <section id="FeedBacks">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 p-4">
            <input
              type="search"
              placeholder="Name or Cell"
              className="inputField px-2"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit" className="searchBtn" onClick={filterData}>
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row titleContainer">
          <div className="col-lg-12">
            <h5 className="mt-2 px-3 text-white">List</h5>
          </div>
        </div>

        <div className="headingContainer">
          <button
            type="button"
            className="btn btn-danger"
            style={{ paddingTop: 5, margin: 10 }}
            onClick={handleDeleteSelected}
            disabled={selectedItems.length === 0}
          >
            <i className="fa fa-trash-o"></i> Delete Selected
          </button>

          <div className="table-responsive-md">
            <table className="table text-center">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th>Name:</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Subject</th>
                  <th>Message</th>
                </tr>
              </thead>
              {loading ? (
                <Loader />
              ) : (
                <tbody>
                  {Array.isArray(data) && data.length > 0 ? (
                    filterData().map((item) => (
                      <tr key={item.id}>
                        <td>
                          {/* Assuming you have a unique identifier for each item */}
                          <input
                            type="checkbox"
                            checked={
                              selectAll || selectedItems.includes(item._id)
                            }
                            onChange={() => handleIndividualCheckbox(item._id)}
                          />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.subject}</td>
                        <td>{item.message}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleIndividualDelete(item._id)}
                          >
                            <i className="text-white fa fa-trash-o"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8">No FeedBacks Yet!</td>
                    </tr>
                  )}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBacks;
