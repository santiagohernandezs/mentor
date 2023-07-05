type Mentor = {
  id: number
  first_name: string
  last_name: string
  email: string
  avatar: string
}

const getMentor = async (id: string) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const mentor = await res.json()
  return mentor.data as Mentor
}

export default async function Mentors({ params }: { params: any }): Promise<JSX.Element> {
  const { first_name, last_name } = await getMentor(params.id)

  return (
    <main>
      <h1 className='text-red-600'>Mentors</h1>
      <span>{first_name}</span>
      <span>{last_name}</span>
    </main>
  )
}
