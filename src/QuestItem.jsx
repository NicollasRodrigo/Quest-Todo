import React, { useState } from 'react'

export default function QuestItem(props) {
    const [title, setTitle] = useState(props.quest.title)
    const [checked, setChecked] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const concluded = props.quest.status === "concluído"


    return (
        <div className='flex gap-4 flex-col md:flex-row items-center'>
            <div className='flex gap-4 items-center w-full sm<:w-[80%]'>
                <input
                    disabled={concluded}
                    type='checkbox'
                    checked={concluded}
                    className='checkbox rounded-full border'
                    onChange={() => {
                        if (concluded) {
                            return
                        } else {
                            props.saveConcludedQuest(props.quest); setChecked(!checked)
                        }
                    }

                    }
                />
                {!concluded && editMode ?
                    <input
                        placeholder='Missão'
                        defaultValue={title}
                        onChange={(evento) => setTitle(evento.target.value)}
                        className='rounded-full bg-secondary pl-2 w-full input-sm flex focus:outline-none'
                    /> :
                    <p className='break-words'>
                        {props.quest.title}
                    </p>
                }
            </div>
            <div className='flex gap-4 w-full sm:w-fit justify-center'>

                {!concluded && (
                    <button
                        onClick={() => {
                            if (editMode) props.saveEditQuest(props.quest, title);
                            setEditMode(!editMode);
                        }}
                    >
                        {!editMode ? "Editar" : "Salvar alterações"}
                    </button>
                )}
                <button onClick={() => props.deleteQuest(props.quest)}>Excluir</button>
            </div>
        </div>
    )
}
