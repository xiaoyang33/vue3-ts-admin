type iptType = 'input' | 'password' | 'datepicker' | 'select'

export interface ISelectOptions {
  label: string
  value: any
}

export interface IFormItems {
  label: string
  // 匹配字段
  field: string
  placeholder?: string
  // 输入框类型
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
