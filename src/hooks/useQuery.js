import { useQuery } from "react-query";
import axios from 'axios';




const baseUrl = import.meta.env.VITE_BASE_URL;

export const useFetchTotalClicks = (authToken, onError) => {

    const headers = {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': "application/json",
        'Accept': "application/json"
    };

    const endDate = new Date();
    const startData = new Date();
    startData.setFullYear(endDate.getFullYear() - 1);

    return useQuery("url-totalclick",
        async () => {
            return await axios.get(baseUrl + 
                `/api/analytics/total-clicks?startDate=${startData.toISOString().split('T')[0]}&endDate=${endDate.toISOString().split('T')[0]}`, {  // formatting the date to YYYY-MM-DD as backend expects this format
                headers: headers
            })
        },
        {
            select: (response) =>{
                const data = response.data;
                console.log("Data from useFetchTotalClicks : ", data.data);
                const totalClicks = Object.keys(data.data).map((key) => ({
                    clickDate: key,
                    count: data.data[key]
                })).reverse();
                return totalClicks;
            },
            onError,
            staleTime: 5000,
        })
}



export const useFetchAllLinks = (authToken, onError) => {

    const headers = {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': "application/json",
        'Accept': "application/json"
    };

    return useQuery("url-allLinks",
        async () => {
            return await axios.get(baseUrl + '/api/urls/my-urls', {headers});
        },
        {
            select: (response) =>{
                const data = response.data;
                console.log("Data from fetch all links : ", data.data);
                const allLinks = data.data;
                return allLinks;
            },
            onError,
            staleTime: 5000,
        })
}

