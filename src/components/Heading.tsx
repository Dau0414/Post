import { Separator } from "./ui/separator"

interface props {
    title:string,
    description?:string
}
const Heading = ({title,description}:props) => {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-600">{description}</p>
      <Separator />
    </div>
  )
}

export default Heading
