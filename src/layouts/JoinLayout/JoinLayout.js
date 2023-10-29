import styles from "./JoinLayout.module.scss"
import { useAuth } from "@/hooks"
import { Container, Icon } from "semantic-ui-react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Layout } from "@/components/layout"
import { data } from "@/layouts/JoinLayout"

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
          {data.map((item, index) => (
            <div key={index}>
              <Icon name={item.icon} />
              <div>
                <h3>{item.title}</h3>
                <span>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.rigth}>
          <h2>INPUTS</h2>
        </div>
      </div>
      <h2>JoinLayout</h2>
      {children}
    </Container>
  )
}
