import React from "react";

const ProfileModal = ({user, children}) => {
  return (
    <div
      class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full"
    >
      <div class="relative w-full max-w-2xl h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Terms of Service
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"

            >
              
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div class="p-6 space-y-6">
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
          {/* <!-- Modal footer --> */}
          <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            <button
              data-modal-toggle="defaultModal"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              data-modal-toggle="defaultModal"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
