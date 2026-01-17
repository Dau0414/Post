import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
type Props = {
    title: string,
    description: string,
    children:React.ReactNode
}
const CardWrapper = ({title,description,children}:Props) => {
  return (
    <div>
       <Card className="mt-3">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {children}

            </CardContent>
        </Card>
    </div>
  )
}

export default CardWrapper
