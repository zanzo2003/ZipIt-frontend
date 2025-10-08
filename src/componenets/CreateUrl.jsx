import React, { useState } from 'react';
import { Link2, Copy, Check, X } from 'lucide-react';
import Toast from './Toast';
import axios from 'axios';
import Loading from './Loading';



function CreateUrl({ authToken, onClose }) {
    console.log('User token from create URL : ', authToken);
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const [originalUrl, setOriginalUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState({
        show: false,
        messageHead: '',
        messageBody: '',
        type: 'success',
    });


    const validateUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };


    const handleCreateShortUrl = async () => {

        const inputUrl = originalUrl.trim();
        if (inputUrl == "" || !validateUrl(inputUrl)) {
            handleToast('Invalid Input', 'Please enter valid URL.', 'error');
            return;
        }

        setIsLoading(true);

        const headers = {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': "application/json",
            'Accept': "application/json"
        };

        const response = await axios.post(baseUrl + '/api/urls/shorten', { originalUrl }, { headers: {...headers} })
            .then((response) => {
                handleToast('Success', 'URL Shorterend Successfully', 'success');
                console.log("Create response : ", response.data);
            })
            .catch((error) => {
                console.log("Error while creating : ", error);
                handleToast('Error', 'Please try after sometime.', 'error');
            });

        setIsLoading(false);
        console.log(' Response from POST : ', response);

        setTimeout(() => onClose(), 3000);
        return;
    };


    const handleReset = () => {
        setOriginalUrl('');
        setToast(
            {
                show: false,
                messageHead: '',
                messageBody: '',
                type: 'success',
            }
        );
    };

    const handleToast = (messageHead, messageBody, toastType) => {
        setToast({
            type: toastType,
            messageBody: messageBody,
            messageHead: messageHead,
            show: true
        })
    }

    const handleCloseToast = () => {
        setToast({ ...toast, show: false });
    };


    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all animate-slideUp">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-t-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-10 animate-pulse"></div>
                    <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-white bg-opacity-20 p-2 rounded-lg backdrop-blur-sm">
                                <Link2 className="text-white" size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-white">
                                Create Short URL
                            </h2>
                        </div>
                        <button
                            onClick={() => {
                                handleReset();
                                onClose();
                            }}
                            className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-all"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Input Section */}
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 font-roboto">
                            Original URL
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value={originalUrl}
                                onChange={(e) => {
                                    setOriginalUrl(e.target.value);
                                }}
                                placeholder="https://example.com/your-long-url"
                                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all font-roboto ${toast.type == 'error'
                                        ? 'border-red-400 focus:border-red-500'
                                        : 'border-gray-200 focus:border-blue-500'
                                    }`}
                                disabled={isLoading}
                            />
                        </div>
                        {toast.type == 'error' && (
                            <p className="text-red-500 text-sm font-roboto animate-shake">
                                {toast.messageBody}
                            </p>
                        )}
                    </div>

                    <div className='flex justify-between items-center gap-3'>
                        <button type="submit"
                            className='bg-custom-gradient w-40 text-white rounded-md py-2'
                            onClick={handleCreateShortUrl}>
                            Shortern URL
                        </button>
                        <button type='button'
                            className='border-btnColor border w-40 text-btnColor rounded-md  py-2 px-2'
                            onClick={handleReset}>
                            Reset
                        </button>
                    </div>


                </div>

            </div>

            {toast.show && (
                <Toast
                    messageHead={toast.messageHead}
                    messageBody={toast.messageBody}
                    type={toast.type}
                    onClose={handleCloseToast}
                />
            )}
        </div>
    );
}

export default CreateUrl;