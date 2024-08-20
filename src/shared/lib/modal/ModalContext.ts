import { ModalController } from '@/shared/lib/modal/ModalController'
import { createContext } from 'react'

export const ModalContext = createContext<ModalController | null>(null)
