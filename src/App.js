import axios from "axios";
// import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddPost from "./pages/AddPost";
import Header from "./components/Header";
import Home from "./pages/Home";
import Invoice from "./components/Invoice";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" exact element={<Home />} />
        <Route path="/add-post" exact element={<AddPost />} />
        <Route path="/invoice" exact element={<Invoice />} />
      </Routes>
    </Router>
  );
}

export default App;

// const [data, setData] = useState([]);

// const postData = {
//   billDate: "2022-03-12T00:00:00.000Z",
//   billNo: "123344555666",
//   createdAt: "2022-06-22T11:54:58.182Z",
//   dueDate: "2022-03-12T00:00:00.000Z",
//   grossAmount: 1000,
//   gstAmount: 50,
//   lineItem: [],
//   name: "prateek",
//   netAmount: 1050,
//   notes: "notes check",
//   status: "due  ",
//   updatedAt: "2022-06-22T11:54:58.182Z",
//   __v: 0,
//   _id: "62b303122c52f63ea8598211",
// };

// const url = "https://rscdev.taxadda.com/api/invoice/list";

// useEffect(() => {
//   axios.get(url).then((response) => {
//     setData(response.data.invoices);
//   });
// }, []);
// console.log(data);

// const postUrl = "https://rscdev.taxadda.com/api/invoice/add";

// const post = async () => {
//   await axios.post(postUrl, postData).then((response) => {
//     console.log(response.data);
//   });
// };

// post();
