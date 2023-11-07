import type { Metadata } from "next"
import PrivacyPolicy from "@/components/main/PrivacyPolicy"
import Banner from "@/components/main/Banner"
import TopStories from "@/components/main/TopStories"
import CallToAction from "@/components/main/CallToAction"

export const metadata: Metadata = {
  title: 'SportsBlog - Privacy Policy',
  description: 'Here is our privacy policy.',
}


const Privacy = () => {
  return (
    <>
      <PrivacyPolicy/>
      <Banner/>
      <TopStories/>
      <CallToAction/> 
    </>
  )
}

export default Privacy