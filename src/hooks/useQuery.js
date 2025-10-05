import { useQuery } from "react-query";
import axios from axios;




const baseUrl = import.meta.env.VITE_BASE_URL;

export const useFetchTotalClicks = (authToken, onError) => {

    const headers = {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': "application/json",
        'Accept': "application/json"
    }

    const endDate = new Date();
    const startData = new Date();
    startData.setFullYear(endDate.getFullYear() - 1);

    return useQuery("url-totalclick",
        async () => {
            return await axios.get(baseUrl + 
                `/api/analytics/total-clicks?
                startDate=${startData.toISOString().split('T')[0]}&
                endDate=${endDate.toISOString().split('T')[0]}`, {  // formatting the date to YYYY-MM-DD as backend expects this format
                headers: headers
            })
        },
        {
            select: (data) =>{
                console.log("Data from useFetchTotalClicks : ", data);
                const totalClicks = Object.keys(data.data).map((key) => ({
                    clickDate: key,
                    count: data.data[key]
                }))
            },
            onError: (error)=>{},
            staleTime: 5000,
        })
}