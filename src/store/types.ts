import { ILoginState } from './modules/login'

export interface IRootState {
  name: number
  age: number
  height: number
}

export interface IRootWithModules {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModules
