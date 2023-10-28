import '@/scss/global.scss'
import { initAmplify } from "@/utils"
import { AuthProvider } from "@/contexts"


initAmplify()

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
