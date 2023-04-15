import { t } from "i18next";
import React, { useEffect } from "react";
import { useAppSelector } from "~/utils/hooks";
import Error from "~/assets/img/error.svg";
import Cross from "~/assets/icons/cross.svg";

const ErrorModal:React.FC = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const error = useAppSelector(state => state.coronaData.error);

  useEffect(() => {
    if (error) setShowModal(true);
  }, [error]);

  return (
    <>
      {
        showModal ?
          (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none z-[1001]">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-center justify-between pt-6 p-3 border-b border-solid border-slate-200 rounded-t relative">
                      <h3 className="text-xl font-semibold text-red-400">{t("msg.errorOccured")}</h3>
                      <Cross className="absolute right-2 top-2 w-5 h-5 cursor-pointer hover:animate-pulse" onClick={() => setShowModal(false)}/>
                    </div>
                    <div className="relative p-6 flex-auto">
                      <Error className="w-20 h-auto m-auto"/>
                      <p className="my-4 text-lg leading-relaxed text-center">
                        {error?.response?.data?.message || error?.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          )
          : null
      }
    </>
  );
};
export default ErrorModal;