
import { RotatingLines } from 'react-loader-spinner'

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-[450px]">
        <div className="flex items-center gap-1">
        <RotatingLines
            visible={true}
            height="65"
            width="65"
            color="aqua"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
        </div>
        <div>
        </div>
    </div>
  );
}