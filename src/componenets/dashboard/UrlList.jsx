
import ShortenItem from './ShortenItem'

const UrlList = ({ data }) => {
    console.log('Data from URL list : ', data)
  return (
    <div className='my-6 space-y-4'>
        {data.map((item) => (
            <ShortenItem key={item.id} {...item} />
        ))}
    </div>
  )
}

export default UrlList