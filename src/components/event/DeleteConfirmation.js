import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { HiOutlineExclamationCircle } from "react-icons/hi";

function DeleteConfirmation(props) {
  const [openModal, setOpenModal] = useState(false);

  const modalCustomTheme = {
    content: {
      base: "bg-slate-200 m-auto rounded-md",
      inner: "bg-slate-200 px-10 m-auto rounded-md",
    },
  };

  return (
    <>
      <div className={props.className} onClick={() => setOpenModal(true)}>
        <AiTwotoneDelete className="text-2xl m-auto" />
        <div className="font-bold m-auto">Delete</div>
      </div>
      <Modal
        theme={modalCustomTheme}
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="flex p-0 m-0 ml-auto mt-4" />
        <Modal.Body className="m-auto w-min">
          <div className="text-center">
            <HiOutlineExclamationCircle className="m-auto h-14 w-14 text-gray-400" />
            <h3 className="flex text-lg font-bold text-black">
              Are you sure you want to delete this event?
            </h3>
            <div className="flex justify-center gap-4 p-8">
              <Button
                className="inline w-max text-black bg-white m-auto"
                onClick={() => {
                  props.deleteEvent(props.id);
                  setOpenModal(false);
                }}
              >
                {"Yes, I'm sure"}
              </Button>
              <Button
                className="inline w-max text-white bg-rose-700"
                onClick={() => setOpenModal(false)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeleteConfirmation;
