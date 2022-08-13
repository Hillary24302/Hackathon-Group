import React from 'react'
import { homeObjOne } from './Data'
import { Footer, InfoSection } from '../../components'
import { ChooseUs} from '../../components'
import OurDoctors from '../../components/OurDoctors/OurDoctors'
import Location from '../../components/Location/Location'
// import ManageAppointment from '../Admin/Appointmtnt/ManageAppointment'

const Home = () => {
  return (
    <>
        <InfoSection {...homeObjOne} />
        <ChooseUs />
        <OurDoctors />
        <Location />
        <Footer />
        {/* <ManageAppointment /> */}
    </>
  )
}

export default Home


