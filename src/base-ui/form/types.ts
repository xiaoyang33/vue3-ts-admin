type iptType = 'input' | 'password' | 'datepicker' | 'select'

export interface ISelectOptions {
  label: string
  value: any
}

export interface IFormItems {
  label: string
  field: string
  placeholder?: string
  iptType?: iptType
  selectOptions?: ISelectOptions[]
  rules?: any[]
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItems[]
  labelWidth?: string
  size?: string
  itemStyle?: any
  colLayout?: any
}
