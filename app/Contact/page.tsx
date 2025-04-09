import MainTitle from '../components/MainTitle'
import { MdEmail, MdLocationPin } from 'react-icons/md'
import { FiPhoneCall } from 'react-icons/fi'

const Contact = () => {
  return (
    <div>
      <MainTitle title={'Contact'} />
      <div className="tracking-wider px-10 container m-auto gap-14 flex justify-center lg:justify-center flex-col lg:flex-row">
        <div className="lg:w-1/3 h-fit grid gap-10 shadow-xl border-t dark:border-gray-800 rounded-xl p-10">
          <div className="grid gap-5 md:text-2xl">
            <div className="flex justify-start  items-center gap-5">
              <MdEmail />
              <h1>battouyazid22@gmail.com</h1>
            </div>
            <div className="flex justify-start  items-center gap-5">
              <FiPhoneCall />
              <h1>07 52 07 64 39</h1>
            </div>
            <div className="flex justify-start  items-center gap-5">
              <MdLocationPin />
              <h1>Maine-et-Loire, France</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
