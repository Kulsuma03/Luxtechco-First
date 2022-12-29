import './App.css'
import useFetch from './components/hooks/useFetch';
import Loading from './components/Loading/Loading';


function App() {
  const data = useFetch('http://api.quotable.io/random')
  if(data.loading){
    return <Loading></Loading>
  }
  return (
    <div >
      <section className="bg-gray-100 text-gray-100">
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
          <div className="px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-sky-100 text-gray-900">
            <div className="text-start p-4 md:p-8 lg:p-12">
              <h2 className='text-center text-[#703BFC] text-3xl font-bold mb-5'> {data?.data?.author} </h2>
              <p> {data?.data?.content} </p>
              <p> {data?.data?.authorSlug} </p>
              <p> {data?.data?.dateModified} </p>
            </div>

          </div>
          <div className="lg:w-1/2 xl:w-3/5 bg-gray-100">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img src="https://wallpaper.dog/large/20492919.jpg" alt="" className="rounded-lg shadow-lg bg-gray-500 aspect-video lg:min-h-[500px] sm:min-h-96" />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default App
