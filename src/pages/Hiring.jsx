import { useParams } from "react-router-dom"

export default function Hiring() {
  const { slug } = useParams()

  return (
    <>
      <h1>This is news</h1>
      <p>{slug}</p>
    </>
  )
}