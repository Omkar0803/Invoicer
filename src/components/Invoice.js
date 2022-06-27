import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";

const Invoice = (items) => {
  console.log(items.items);

  return (
    <div>
      <div className="post_container">
        <div className="invoice_ontainer h-28 flex text-[4rem] pl-8 text-black font-medium border border-black">
          <p>INVOICE</p>
        </div>
        <div className="detail_section flex flex-col font-medium">
          <div className="detail_upper flex my-8">
            <div className="detail_left flex pl-10 justify-between items-center w-[55%]">
              <div className="">
                <p className="text-gray-500 mb-1">Bill To:</p>
                <p className="text-[1.2rem]">{items.items.name}</p>
              </div>
              <div className="">
                <p className="text-gray-500 mb-1">grossAmount:</p>
                <p className="text-[1.2rem]">{items.items.grossAmount}</p>
              </div>
              <div className="">
                <p className="text-gray-500 mb-1">Bill no.:</p>
                <p className="text-[1.2rem]">{items.items.billNo}</p>
              </div>
            </div>
            <div className="detail_left flex w-[45%] items-end justify-end pr-32">
              <div className="">
                <p className="text-gray-500 mt-10">netAmount:</p>
                <p className="text-[3rem]">{items.items.netAmount}</p>
              </div>
            </div>
          </div>
          <div className="detail_lower flex w-[34%] mb-10 pl-10 text-black justify-between items-center">
            <div>
              <p className="text-gray-500 mb-1">bill Date:</p>
              <p className="text-[1.2rem]">
                {items.items.billDate.toLocaleDateString()}
                {/* {items.items.billDate} */}
              </p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">dueDate:</p>
              <p className="text-[1.2rem]">
                {items.items.dueDate.toLocaleDateString()}
                {/* {items.items.dueDate} */}
              </p>
            </div>
          </div>
        </div>
        <div className="line_break bg-blue-600 h-1 mx-7 my-2"></div>
        <div className="table_section font-medium flex px-10 my-4">
          <div className="w-[40%] text-left">
            <p className="text-blue-600 mb-5">product Name:</p>
            <p className="text-[1.2rem]">{items.items.lineItem.productName}</p>
          </div>
          <div className="w-[20%] text-right">
            <p className="text-blue-600 mb-5">Quantity:</p>
            <p className="text-[1.2rem]">{items.items.lineItem.quantity}</p>
          </div>
          <div className="w-[20%] text-right">
            <p className="text-blue-600 mb-5">Price:</p>
            <p className="text-[1.2rem]">{items.items.lineItem.price}</p>
          </div>
          <div className="w-[20%] text-right">
            <p className="text-blue-600 mb-5">gstRate:</p>
            <p className="text-[1.2rem]">{items.items.lineItem.gstRate}</p>
          </div>
          <div className="w-[20%] text-right">
            <p className="text-blue-600 mb-5">Amount:</p>
            <p className="text-[1.2rem]">{items.items.lineItem.amount}</p>
          </div>
        </div>
        <div className="amount_section flex my-14 px-10 font-medium py-3">
          <div className="amount_left w-[50%]">
            <div className="my-10 ">
              <p className="text-gray-500 mb-1">notes:</p>
              <p className="text-[1.2rem]">{items.items.notes}</p>
            </div>
            <div className="my-10 ">
              <p className="text-gray-500 mb-1">Status:</p>
              <p className="text-[1.2rem]">{items.items.status}</p>
            </div>
          </div>
          <div className="amount_right w-[50%] pl-10">
            <div className="my-10 flex justify-start items-center">
              <p className="text-gray-500 mb-1 mt-[4px] text-right w-40 mr-20">
                Amount:
              </p>
              <p className="text-[1.2rem]">{items.items.lineItem.amount}</p>
            </div>
            <div className="my-10 flex justify-start items-center text-right">
              <p className="text-gray-500 mb-1 mt-[4px] w-40 mr-20">
                gstAmount:
              </p>
              <p className="text-[1.2rem]">{items.items.lineItem.gstRate}</p>
            </div>
            <div className="my-10 flex justify-start items-center text-right">
              <p className="text-gray-500 mb-1 mt-[4px] w-40 mr-20">
                netAmount:
              </p>
              <p className="text-[1.2rem]">{items.items.netAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
