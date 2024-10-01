import OrderModal from "@/features/Order/OrderModal";
import React, { useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export default function ConfirmOrderButton() {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      {" "}
      <button
        className="bg-orange-600 text-white rounded-2xl px-4 py-2 hover:bg-green-700 duration-300"
        onClick={onOpenModal}
      >
        Confirm Order
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <OrderModal />
      </Modal>
    </>
  );
}
