import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number
    user: UserType
    message: UserMessageType
}
type UserType = {
    avatar: string
    name: string
}
type UserMessageType = {
    text: string
    time: string
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80', // можно менять
        name: 'Nick',  // можно менять
    },
    message: {
        text: 'Hi, my name is Nick.',  // можно менять
        time: '19:36', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Victor', // можно менять
    },
    message: {
        text: 'Hello my friend', // можно менять
        time: '13:56', // можно менять
    },
}

const HW1 = () => {
    return (
        <div className={s2.hw1}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>

                {/*проверка отображения (не менять)*/}

                <Message message={message0}/>
                <FriendMessage message={friendMessage0}/>


                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1
