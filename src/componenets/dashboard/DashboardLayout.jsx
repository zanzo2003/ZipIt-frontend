import Graph from './Graph'
import { dummyData } from '../../dummyData/data.js'
import { motion } from "framer-motion";
import { useContext } from 'react'
import { AuthContext} from '../../contexts/AuthContext.jsx'
import { useNavigate } from 'react-router-dom';
import { useFetchTotalClicks } from '../../hooks/useQuery.js';
import Loading from '../Loading'; // Adjust the import path as needed

function DashboardLayout() {
  const { token } = useContext(AuthContext)
  const navigate = useNavigate();

  function onError(){
    console.log('Error in fetching data for dashboard')
    navigate('/')
  }

  const {isLoading, data} = useFetchTotalClicks(token, onError);
  console.log("Fetch Data for Dashboard : ", data)
  console.log('Loading: ', isLoading)

  console.log("Token in dashboard layout : ", token)

  const createShortUrlHandler = () => {
    console.log('Creating new Short URL')
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
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout