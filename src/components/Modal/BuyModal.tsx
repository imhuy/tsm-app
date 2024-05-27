// import passwordRegex from "@/utils/regex";
import { numberRegex, passwordRegex } from "@/utils/regex";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FC, Fragment, useState } from "react";
import * as yup from "yup";
import BMInput from "../BMForm/BMInput";
import AQForm from "../BMForm";
import Spinner from "../Spinner";

const changePasswordValidationSchema = yup.object({
  currentNumber: yup
    .string()
    .required("Vui lòng nhập số lượng cần mua")
    .matches(numberRegex, "Số lượng cần mua phải là số."),
});

interface IChangePasswordModal {
  isOpen: boolean;
  closeModal: () => void;
}

const BuyModal: FC<IChangePasswordModal> = ({ isOpen, closeModal }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl rounded-sm transform overflow-hidden rounded-ms bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-workSansBold leading-6 text-success-500"
                >
                  <div>
                    <p>Thanh toán đơn hàng</p>
                    <button
                      className="h-10 w-10   absolute top-3 right-2 flex justify-center items-center hover:text-success-500 hover:border-success-500 duration-100 transition-all"
                      onClick={closeModal}
                    >
                      <XMarkIcon className="h-7 w-7" />
                    </button>
                  </div>
                </Dialog.Title>

                <AQForm
                  defaultValues={{}}
                  validationSchemaParams={changePasswordValidationSchema}
                  onSubmit={onSubmit}
                >
                  <BMInput
                    className="bg-white w-full   !text-black rounded-md border border-gray-300 sm:text-sm"
                    name="currentName"
                    labelText="Tên Sản phẩm"
                    placeholder="Via Việt XMDT mới về"
                    containerClassName="mt-5"
                    type="password"
                    disabled={true}
                  />
                  <BMInput
                    name="currentNumber"
                    className="bg-white w-full rounded-md border border-gray-300 sm:text-sm"
                    labelText="Số lượng cần mua:"
                    placeholder="Nhập số lượng cần mua"
                    containerClassName="mt-5"
                    // type="password"
                    disabled={isLoading}
                  />
                  <BMInput
                    name="discountCode"
                    className="bg-white w-full rounded-md border border-gray-300 sm:text-sm"
                    labelText="Mã giảm giá (nếu có)"
                    placeholder="Mã giảm giá"
                    containerClassName="mt-5"
                    // type="password"
                    disabled={isLoading}
                  />

                  <div className="text-sm  my-4 gap-y-3 flex flex-col">
                    <div className="flex justify-between border-b py-2">
                      <p className=" ">Giảm giá: </p>
                      <p className=" text-red-500 font-workSansSemiBold ">0đ</p>
                    </div>

                    <div className="flex justify-between">
                      <p className="   ">Tổng tiền: </p>
                      <p className="text-red-500 font-workSansSemiBold ">
                        5000đ
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex  justify-between items-end">
                    <span className="text-sm text-red-500">
                      Số dư không đủ, Vui lòng nạp thêm
                    </span>

                    <button
                      type="submit"
                      className="inline-flex ml-3 justify-center items-center rounded-md border border-transparent bg-success-500 hover:bg-success-600 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      disabled={isLoading}
                      // onClick={closeModal}
                    >
                      {isLoading ? <Spinner /> : <p>Thanh Toán</p>}
                    </button>
                  </div>
                </AQForm>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BuyModal;
