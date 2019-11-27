import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useModalDispatch } from './ModalContext'

const CSS_HANDLES = ['triggerContainer']

const ModalTrigger: React.FC<{}> = ({ children }) => {
  const dispatch = useModalDispatch()
  const handles = useCssHandles(CSS_HANDLES)

  const handleModalOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (dispatch) {
      dispatch({ type: 'OPEN_MODAL' })
    }
  }

  return (
    <button
      role="button"
      onClick={handleModalOpen}
      className={`${handles.triggerContainer} bg-transparent pa0 ma0 outline-0 bw0`}
    >
      {children}
    </button>
  )
}

export default ModalTrigger
