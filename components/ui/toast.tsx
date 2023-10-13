import React, { createContext, useContext, useRef } from 'react'

type ToastFunction = (message: string, duration?: number) => void

interface ToastContextProps {
  Toast: ToastFunction
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined)

export const ToastProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const toastRef = useRef<HTMLDivElement | null>(null)

  const Toast: ToastFunction = (message, duration = 3000) => {
    if (toastRef.current) {
      document.body.removeChild(toastRef.current)
    }

    const toast = document.createElement('div')
    toast.innerText = message

    const toastStyle: React.CSSProperties = {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      padding: '10px 20px',
      // backgroundColor: 'var(--bg-secondary)',
      // backgroundColor: 'var(--bg-primary)',
      border: '1px solid var(--border-color)',
      color: 'var(--primary)',
      borderRadius: 'var(--border-radius-1)',
    }

    Object.assign(toast.style, toastStyle)

    document.body.appendChild(toast)
    toastRef.current = toast

    setTimeout(() => {
      if (toastRef.current) {
        document.body.removeChild(toastRef.current)
        toastRef.current = null
      }
    }, duration)
  }

  const contextValue: ToastContextProps = {
    Toast: Toast,
  }

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  )
}

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}
