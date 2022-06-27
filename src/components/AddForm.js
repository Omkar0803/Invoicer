import React, { useState } from "react";
import { BiPaperPlane } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { AddPost } from "../redux/actions";
import Modal from "./Modal";

const AddForm = () => {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [grossAmount, setGrossAmount] = useState("");
  const [billNo, setBillNo] = useState("");
  const [billDate, setBillDate] = useState(new Date());
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [gstRate, setgstRate] = useState("");
  const [gstAmount, setgstAmount] = useState("");
  const [netAmount, setNetAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const lineItem = {
    productName,
    quantity,
    price,
    amount,
    gstRate,
  };

  const handleSubmit = () => {
    const data = {
      name,
      dueDate,
      grossAmount,
      billNo,
      billDate,
      lineItem,
      gstAmount,
      netAmount,
      notes,
      status,
    };
    dispatch(AddPost(data));
    setModalOpen(true);
  };

  const NumberText = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      return "";
    }
    return val;
  };

  return (
    <div className="container flex flex-col w-3/4 min-h-[80vh] max-h-full mx-auto py-5  rounded-xl border shadow-md bg-white">
      {modalOpen && <Modal className="modal  absolute" />}
      <div className="form-item my-2 ml-[108px] mt-5">
        <label className="mr-2 ">Name</label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-96  p-2.5  dark:text-white"
          type=""
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-item my-2 ml-14 mt-5">
        <label className="mr-2">due Date</label>
        <DatePicker
          selected={dueDate}
          onChange={(date: Date) => {
            setDueDate(date);
          }}
        />
      </div>
      <div className="section_container flex ">
        <div className="form-item my-2 ml-14 mt-5">
          <label className="mr-2 ">grossAmount</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-96  p-2.5  dark:text-white"
            type=""
            placeholder="Enter grossAmount"
            value={grossAmount}
            onChange={(e) => setGrossAmount(NumberText(e))}
          />
        </div>
        <div className="form-item my-2 ml-[90px] mt-5">
          <label className="mr-2 ">Bill no</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-96  p-2.5  dark:text-white"
            type=""
            placeholder="Enter bill number"
            value={billNo}
            onChange={(e) => setBillNo(NumberText(e))}
          />
        </div>
      </div>
      <div className="form-item my-2 ml-14 mt-5">
        <label className="mr-2 ">billDate</label>
        <DatePicker
          selected={billDate}
          onChange={(e) => {
            setBillDate(e);
          }}
        />
      </div>
      <div className="section_container flex">
        <div className="form-item my-2 ml-14 mt-5">
          <label className="mr-2 ">productName</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-96  p-2.5  dark:text-white"
            type=""
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-item my-2 ml-[70px] mt-5">
          <label className="mr-2 ">Quantity</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-96  p-2.5  dark:text-white"
            type=""
            placeholder="Enter bill date"
            value={quantity}
            onChange={(e) => setQuantity(NumberText(e))}
          />
        </div>
      </div>
      <div className="section_container flex">
        <div className="form-item my-2 ml-[120px] mt-5">
          <label className="mr-2 ">Price</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-96  p-2.5  dark:text-white"
            type=""
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(NumberText(e))}
          />
        </div>
        <div className="form-item my-2 ml-[75px] mt-5">
          <label className="mr-2 ">Amount</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-96  p-2.5  dark:text-white"
            type=""
            placeholder="Enter the amount"
            value={amount}
            onChange={(e) => setAmount(NumberText(e))}
          />
        </div>
      </div>
      <div className="section_container flex">
        <div className="form-item my-2 ml-[100px] mt-5">
          <label className="mr-2 ">gstRate</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-96  p-2.5  dark:text-white"
            type=""
            placeholder="Enter gst Rate"
            value={gstRate}
            onChange={(e) => setgstRate(NumberText(e))}
          />
        </div>
        <div className="form-item my-2 ml-14 mt-5">
          <label className="mr-2 ">gstAmount</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-96  p-2.5  dark:text-white"
            type=""
            placeholder="Enter gst Amount"
            value={gstAmount}
            onChange={(e) => setgstAmount(NumberText(e))}
          />
        </div>
      </div>
      <div className="form-item my-2 ml-[73px] mt-5">
        <label className="mr-2 ">netAmount</label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-96  p-2.5  dark:text-white"
          type=""
          placeholder="Enter net Amount"
          value={netAmount}
          onChange={(e) => setNetAmount(NumberText(e))}
        />
      </div>
      <div className="form-item my-2 ml-[111px] mt-5">
        <label className="mr-2 ">notes</label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-96  p-2.5  dark:text-white"
          type=""
          placeholder="Enter notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div className="form-item my-2 ml-[105px] mt-5">
        <label className="mr-2 ">Status</label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-96  p-2.5  dark:text-white"
          type=""
          placeholder="Enter Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
      <div
        className="m-5 ml-[62rem] right-side-content form-add-button flex justify-center items-center w-24 h-10
        bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 duration-200  cursor-pointer"
        onClick={handleSubmit}
      >
        <label className="mr-3">Add</label>
        <BiPaperPlane className=" cursor-pointer " />
      </div>
    </div>
  );
};

export default AddForm;
