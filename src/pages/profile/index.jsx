import React from 'react'
import { AuthStore } from '../../service/Auth'
import JSONPretty from 'react-json-pretty'
import { Container, Grid } from '@material-ui/core'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
  const { isLoading } = useAuth0()
  // const [auth, setAuth] = useState()

  // setTimeout(async () => {
  //   return await (
  //     setAuth(<JSONPretty data={AuthStore?.getAuth()} />)   
  //   )
  // }, 100);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={12}>
          {!isLoading && <JSONPretty data={AuthStore?.getAuth()} />}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Profile
