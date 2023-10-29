import styles from "./JoinLayout.module.scss"
import { useAuth } from "@/hooks"
import { Container, Grid, Header, Segment } from "semantic-ui-react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Layout } from "@/components/layout"

export default function JoinLayout(props) {
  const { children } = props
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) router.push("/")

  }, [])

  if (user) return null;



  return (
    <Container className={styles.container}>
      <Layout.Logo />
      <div>
        <div className={styles.left}>
          INFORMACION
        </div>
        <div className={styles.rigth}>

        </div>
      </div>
      <h2>JoinLayout</h2>
      {children}
    </Container>
  )
}
