import styles from "./JoinLayout.module.scss"
import { useAuth } from "@/hooks"
import { Container, Grid, Header, Segment } from "semantic-ui-react"
import { useRouter } from "next/router"
import { useEffect } from "react"

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
      <p>LOGO</p>
      <div>
        <div className={styles.left}>
          INFORMACION
        </div>
        <div className={styles.rigth}>
          {children}
        </div>
      </div>
      <h2>JoinLayout</h2>
      {children}
    </Container>
  )
}
