import { getServerPayload } from '@/lib/getServerPayload'

export default async function Home() {
  const payload = await getServerPayload()

  const { docs } = await payload.find({
    collection: 'users',
  })

  return (
    <div>
      <h1 className="text-4xl font-black">Users:</h1>
      {docs.map((doc) => (
        <div key={doc.id}>
          <h2>{doc.email}</h2>
        </div>
      ))}
    </div>
  )
}
