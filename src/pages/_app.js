import "@/index.css"
import { initAmplify } from "@/utils"
import { AuthProvider } from "@/contexts"
import { NextUIProvider } from "@nextui-org/react";


initAmplify()

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </AuthProvider>
  )
}
