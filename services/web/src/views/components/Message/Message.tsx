import { FunctionComponent } from 'react'
import { Avatar } from '../Avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'

export type MessageProps = {
  author: {
    name: string
    avatar: string
  }
  text: string
  createdAt: string
}

type MessageCardProps = MessageProps

export const Message: FunctionComponent<MessageProps> = ({
  author,
  text,
  createdAt,
}) => {
  const avatarFallback = author.name
    .split(' ')
    .slice(0, 2)
    .map((item) => item[0])
    .join('')

  return (
    <div className="flex items-end gap-4">
      <Avatar image={author.avatar} fallback={avatarFallback} variant="small" />
      <MessageCard author={author} text={text} createdAt={createdAt} />
    </div>
  )
}

const MessageCard: FunctionComponent<MessageCardProps> = ({
  author,
  text,
  createdAt,
}) => {
  return (
    <Card className="flex flex-col rounded-xl bg-white p-2.5">
      {/* HEADER */}
      <div>
        <div className="text-xs font-medium text-slate-500">{author.name}</div>
      </div>

      {/* CONTENT */}
      <div className="text- text-sm font-normal">{text}</div>

      {/* FOOTER */}
      <div className="flex items-center justify-between">
        <div></div>
        <div>
          <div className="text-xs font-light text-gray-500">{createdAt}</div>
        </div>
      </div>
    </Card>
  )
}