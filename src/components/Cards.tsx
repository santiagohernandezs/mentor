'use-client'
import { User } from '@/types/types'
import Card from './Card'
import Container from './Container'

const getUsers = async () => {
  const res = await fetch('https://reqres.in/api/users')
  const users = await res.json()
  return users.data as User[]
}

export default async function Cards() {
  const users = await getUsers()
  return (
    <>
      <Container
        bg='white/primary'
        direction='col'
        align='start'
        justify='start'
        gap={4}
        shadow='2xl'>
        {users.map(user => (
          <Card
            key={user.id}
            name={`${user.first_name} ${user.last_name}`}
            img={user.avatar}
            url={`/mentor/${user.id}`}
          />
        ))}
      </Container>
    </>
  )
}
