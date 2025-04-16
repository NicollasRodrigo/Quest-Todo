import React from 'react'
import QuestItem from './QuestItem'

export default function QuestList(props) {
  return (
    <div className='flex flex-col overflow-y-auto gap-6 w-[80%]'>
      {props.quests.map((quest) => {
        return <QuestItem quest={quest}
          key={quest.id}
          saveEditQuest={props.saveEditQuest}
          saveConcludedQuest={props.saveConcludedQuest}
          deleteQuest={props.deleteQuest}
        />
      })}
    </div>
  )
}
