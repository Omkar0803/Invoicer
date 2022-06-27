import React, { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import Invoice from "./Invoice";
import axios from "axios";
import { MdOutlineCancel } from "react-icons/md";

const PostCard = ({ items }) => {
  console.log(items);
  const [invoiceOpen, setInvoiceOpen] = useState(false);
  const [dueAlert, setDueAlert] = useState(false);

  const postData = {
    billDate: "2022-03-12T00:00:00.000Z",
    billNo: "123344555666",
    createdAt: "2022-06-22T11:54:58.182Z",
    dueDate: "2022-03-12T00:00:00.000Z",
    grossAmount: 1000,
    gstAmount: 50,
    lineItem: [],
    name: "prateek",
    netAmount: 1050,
    notes: "notes check",
    status: "due  ",
    updatedAt: "2022-06-22T11:54:58.182Z",
    __v: 0,
    _id: "62b303122c52f63ea8598211",
  };

  const handleSend = () => {
    const postUrl = "https://rscdev.taxadda.com/api/invoice/add";
    const post = async () => {
      await axios.post(postUrl, items).then((response) => {
        console.log(response.data);
      });
    };
    post();
  };
  useEffect(() => {
    const currentDate = new Date();
    if (items.dueDate < currentDate) {
      // document.getElementById("due_alert").innerHTML = "Late";
      setDueAlert("Late");
    }

    const buttonText = document.getElementById("toggle_button");
    invoiceOpen
      ? (buttonText.innerHTML = "close")
      : (buttonText.innerHTML = "open");
  }, [invoiceOpen]);

  return (
    <div className="w-3/4 mx-auto flex flex-col">
      <div className="card_container flex flex-col justify-between px-8 py-2 pb-3 mx-4 rounded-lg shadow-md mb-[5px]">
        {invoiceOpen ? (
          <div>
            <div className="icon text-right cursor-pointer  flex justify-end my-3 h-8">
              <MdOutlineCancel
                onClick={() => setInvoiceOpen(!invoiceOpen)}
                className="cancel-icon scale-125 hover:scale-150 ease-in duration-100"
              />
            </div>
            <Invoice items={items} />
          </div>
        ) : (
          <div className="card-inner-container flex justify-between  py-2 mx-4 rounded-lg  mb-[5px]">
            <div className="item text-[1.5rem] mt-3 font-medium cursor-pointer">
              Name:{items.name}
            </div>
            <div className="item text-[1.2rem] mt-3 cursor-pointer">
              payment thorugh:{items.notes}
            </div>
            <div className="item text-[1.2rem] mt-3 cursor-pointer">
              status:{items.status}
            </div>
            <div className="w-40 mr-3 flex flex-col justify-center items-end">
              {/* <BiTrash
                className="button-delete text-right scale-[1.5] my-2 cursor-pointer hover:scale-[1.2rem] duration-200 ease-in-out"
                // onClick={handleDelete}
              /> */}
              <p className="text-[1.3rem] cursor-pointer mt-[5px] text-right w-60">
                netAmount: ₹​ {items.netAmount}
              </p>
            </div>
          </div>
        )}
        <div className="button flex ">
          <button
            onClick={() => setInvoiceOpen(!invoiceOpen)}
            id="toggle_button"
            className="mx-3 flex justify-center items-center w-24 h-10
        bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 duration-200  cursor-pointer"
          >
            open
          </button>
          <button
            className="mx-3 flex justify-center items-center w-24 h-10
        bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 duration-200  cursor-pointer"
          >
            send
          </button>
          <button
            onClick={() => handleSend()}
            className="mx-3  flex justify-center items-center w-24 h-10
        bg-green-600 text-white px-2 py-1 rounded-md hover:bg-green-700 duration-200  cursor-pointer"
          >
            post
          </button>
          <div
            className="due_alert mx-3 flex justify-center items-center px-2 h-7
        bg-red-700 text-white   rounded-[10px] cursor-pointer"
          >
            {dueAlert}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
