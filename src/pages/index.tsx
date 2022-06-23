import BarGraph from '@components/barGraph'
import LineGraph from '@components/lineGraph'
import Navbar from 'components/pageComponents/navbar'
import Widgets from 'components/pageComponents/widgets'
export default function Home() {
  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="h-full pb-16 overflow-y-auto">
            <div className="container px-6 mx-auto grid">
              <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Dashboard
              </h2>
              <Widgets />
              <div className="grid gap-6 mb-8 md:grid-cols-2">
                <BarGraph />

                <LineGraph />
              </div>
              <div className="grid gap-6 mb-8 md:grid-cols-2">
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                    Approve smart contracts
                  </h4>
                  <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <label className="block mt-4 text-sm">
                      <span className="text-gray-700 dark:text-gray-400">
                        smart contract
                      </span>
                      <div className="relative text-gray-500 focus-within:text-purple-600">
                        <input
                          className="block p-2 w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                          placeholder="0x343c43a37d37dff08ae8c4a11544c718abb4fcf8"
                        />
                        <button className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                          Approve
                        </button>
                      </div>
                    </label>
                  </div>
                </div>
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                    Market percentage commission
                  </h4>
                  <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <label className="block mt-4 text-sm">
                      <span className="text-gray-700 dark:text-gray-400">
                        percentage commission
                      </span>
                      <div className="relative text-gray-500 focus-within:text-purple-600">
                        <input
                          className="block p-2 w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                          placeholder="15"
                        />
                        <button className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                          Update
                        </button>
                      </div>
                    </label>
                  </div>
                </div>
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                    Royalty fee
                  </h4>
                  <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <label className="block mt-4 text-sm">
                      <span className="text-gray-700 dark:text-gray-400">
                        royalty fee
                      </span>
                      <div className="relative text-gray-500 focus-within:text-purple-600">
                        <input
                          className="block p-2 w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                          placeholder="15"
                        />
                        <button className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                          Update
                        </button>
                      </div>
                    </label>
                  </div>
                </div>
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                    Remove item
                  </h4>
                  <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <label className="block mt-4 text-sm">
                      <span className="text-gray-700 dark:text-gray-400">
                        remove item
                      </span>
                      <div className="relative text-gray-500 focus-within:text-purple-600">
                        <input
                          className="block p-2 w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                          placeholder="15"
                        />
                        <button className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-r-md active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red">
                          Remove
                        </button>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
