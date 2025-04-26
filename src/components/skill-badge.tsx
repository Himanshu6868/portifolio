import { Card, CardContent } from "@/components/ui/card"

interface SkillBadgeProps {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <Card className="border-primary/20 transition-all hover:border-primary hover:shadow-sm">
      <CardContent className="flex items-center justify-center p-4">
        <span className="font-medium">{name}</span>
      </CardContent>
    </Card>
  )
}
