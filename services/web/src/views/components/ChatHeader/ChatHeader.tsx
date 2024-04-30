import { FunctionComponent } from 'react'
import { HiOutlineDotsVertical, HiOutlineSearch } from 'react-icons/hi'
import { LuPanelRightOpen } from 'react-icons/lu'

import { Button } from '../ui/button'

type ChatHeaderProps = {
  name: string
  description: string
}

export const ChatHeader: FunctionComponent<ChatHeaderProps> = ({
  name,
  description,
}) => {
  return (
    <div className="flex h-full w-full items-center justify-between border border-gray-100 px-4">
      <div className="">
        <div className="text-base font-medium">{name}</div>
        <div className="text-xs font-light text-gray-600">{description}</div>
      </div>
      <div className="-mr-2 flex items-center gap-0 ">
        <Button
          variant={'ghost'}
          className="border-none px-3 opacity-60 hover:bg-transparent hover:opacity-100"
        >
          <HiOutlineSearch size={20} color="#606060" />
        </Button>
        <Button
          variant={'ghost'}
          className="border-none px-3 opacity-60 hover:bg-transparent hover:opacity-100"
        >
          <LuPanelRightOpen size={20} color="#606060" />
        </Button>
        <Button
          variant={'ghost'}
          className="border-none px-3 opacity-60 hover:bg-transparent hover:opacity-100"
        >
          <HiOutlineDotsVertical size={20} color="#606060" />
        </Button>
      </div>
    </div>
  )
}
