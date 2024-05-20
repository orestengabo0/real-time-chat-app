import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic('72dd6a89-b33c-420d-a9a3-641831c5cd93', props.user.username, props.user.secret)
  return (
    <div style={{height: '100vh'}}>
      <MultiChatSocket {...chatProps} />
      <PrettyChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>
  )
}

export default ChatsPage