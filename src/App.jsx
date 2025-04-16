import AddQuest from './AddQuest';
import './index.css'
import React, { useState } from 'react';
import QuestList from './QuestList';
function App() {
  const localQuests = JSON.parse(window.localStorage.getItem("quests")) || []

  const [quests, setQuests] = useState(localQuests)


  function saveAddQuest(titulo) {
    let auxQuests = quests
    let id = 0
    if (auxQuests.length) {
      id = auxQuests[auxQuests.length - 1].id
    }
    id++
    const createdQuest = {
      id: id,
      title: titulo,
      status: "aberto",
      created_at: new Date(Date.now()).toUTCString()
    }
    auxQuests.push(createdQuest)
    localStorage.setItem("quests", JSON.stringify(auxQuests))
    getQuests()
  }

  function getQuests() {
    setQuests(JSON.parse(window.localStorage.getItem("quests")))
  }

  function saveEditQuest(quest, title) {
    let auxQuests = quests
    const editedQuest = {
      id: quest.id,
      title: title || quest.title,
      status: quest.status,
      created_at: quest.created_at
    }

    const findQuestPosition = auxQuests.findIndex(
      (quest) => quest.id === editedQuest.id
    )

    auxQuests.splice(findQuestPosition, 1, editedQuest)

    localStorage.setItem("quests", JSON.stringify(auxQuests))

    getQuests()
  }

  function saveConcludedQuest(quest) {
    let auxQuests = quests
    const editedQuest = {
      id: quest.id,
      title: quest.title,
      status: "concluído",
      created_at: quest.created_at
    }

    const findQuestPosition = auxQuests.findIndex(
      (quest) => quest.id === editedQuest.id
    )

    auxQuests.splice(findQuestPosition, 1, editedQuest)

    localStorage.setItem("quests", JSON.stringify(auxQuests))

    getQuests()
  }

  function deleteQuest(quest) {
    let auxQuests = quests

    const findQuestPosition = auxQuests.findIndex(
      (deletedQuest) => deletedQuest.id === quest.id
    )

    auxQuests.splice(findQuestPosition, 1)

    localStorage.setItem("quests", JSON.stringify(auxQuests))

    getQuests()
  }
  const concludedQuests = quests.filter((quest) => quest.status === "concluído")
  const notConcludedQuests = quests.filter((quest) => quest.status === "aberto")

  return (
    <div className="flex h-screen justify-center items-center bg-[url('/fundo.jpg')] bg-cover bg-center">
      <div className="card w-[80%] lg:w-[50%] bg-blue-400 min-h-[70%] max-h-screen overflow-auto scrollbar-hide shadow-lg rounded-sm transform ease-out duration-300 items-center p-10 gap-5">
        <p className="text-4xl font-work font-bold w-fit text-center text-white">
          Quests To Do
        </p>
        <AddQuest saveAddQuest={saveAddQuest}></AddQuest>

        <p>Abertas: </p>
        <QuestList
          quests={notConcludedQuests}
          saveEditQuest={saveEditQuest}
          saveConcludedQuest={saveConcludedQuest}
          deleteQuest={deleteQuest}

        />
        <p>Concluídas: </p>
        <QuestList quests={concludedQuests}
          saveEditQuest={saveEditQuest}
          saveConcludedQuest={saveConcludedQuest}
          deleteQuest={deleteQuest}
        />

      </div>

    </div>
  );
}


export default App;
