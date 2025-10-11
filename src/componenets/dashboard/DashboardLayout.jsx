import Graph from './Graph'
import { dummyData } from '../../dummyData/data.js'
import { motion } from "framer-motion";
import { useContext, useState } from 'react'
import { AuthContext} from '../../contexts/AuthContext.jsx'
import { useNavigate } from 'react-router-dom';
import { useFetchTotalClicks, useFetchAllLinks } from '../../hooks/useQuery.js';
import Loading from '../Loading';
import CreateUrl from './CreateUrl.jsx';
import UrlList from './UrlList.jsx';

function DashboardLayout() {
  const { token } = useContext(AuthContext)
  const navigate = useNavigate();
  const [shorternPopUp, setShorternPopUp] = useState(false);
  console.log("Token in dashboard layout : ", token);

  function onError(){
    console.log('Error in fetching data for dashboard')
    navigate('/')
  }

  const {isLoading, data} = useFetchTotalClicks(token, onError);
  console.log("Fetch Data for Dashboard : ", data);

  const {data: urlData} = useFetchAllLinks(token, onError);
  console.log("All urls : ", urlData);

  const createShortUrlHandler = () => {
    setShorternPopUp(true);
    console.log('Opening popup for creating links')
  }

  // Show loading component while data is being fetched
  if (isLoading) {
    return <Loading />
  }

  // Render dashboard with data once loading is complete
  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
      <div className='lg:w-[90%] w-full mx-auto py-16' >
        <div className='h-96 relative'>
          {data.length === 0 && (
            <div className="absolute flex flex-col  justify-center sm:items-center items-end  w-full left-0 top-0 bottom-0 right-0 m-auto">
                     <h1 className=" text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-1">
                       No Data For This Time Period
                     </h1>
                     <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-sm text-slate-600 ">
                       Share your short link to view where your engagements are
                       coming from
                     </h3>
                   </div>
          ) }
          <Graph clickData={data || dummyData} />
        </div>
        <div className='flex justify-end mt-10 '>
          <motion.button
            initial={{ opacity: 0, y: 80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={createShortUrlHandler}
            className="bg-custom-gradient w-40 text-white rounded-md py-2"
          >
            Create Short Link
          </motion.button>

          <div>
            { shorternPopUp && (
              <CreateUrl authToken={token} onClose={ ()=> setShorternPopUp(false)}/>
            )}
          </div>
        </div>

        <div>
              {!isLoading && urlData.length === 0 ? (
                <div className="flex justify-center pt-16">
                  <div className="flex gap-2 items-center justify-center  py-6 sm:px-8 px-5 rounded-md   shadow-lg  bg-gray-50">
                    <h1 className="text-slate-800 font-montserrat   sm:text-[18px] text-[14px] font-semibold mb-1 ">
                      You haven't created any short link yet
                    </h1>
                    <FaLink className="text-blue-500 sm:text-xl text-sm " />
                  </div>
              </div>
              ) : (
                  <UrlList data={urlData} />
              )}
            </div>
      </div>
    </div>
  )
}

export default DashboardLayout