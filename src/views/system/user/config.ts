import { IForm } from '@/base-ui/form/types'

const FormConfig: IForm = {
  formItems: [
    {
      field: 'username',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      label: '密码',
      placeholder: '请输入密码',
      iptType: 'password'
    },
    {
      field: 'sport',
      label: '喜欢的运动',
      placeholder: '请输入用户名',
      iptType: 'select',
      selectOptions: [{ label: '黄金', value: '1' }]
    },
    {
      field: 'createDate',
      label: '创建时间',
      iptType: 'datepicker',
      otherOptions: {
        'end-placeholder': '结束时间'
      }
    }
  ],
  labelWidth: '100px',
  colLayout: {
    span: 8
  }
}
export default FormConfig

export const propList = [
  { prop: 'name', label: '用户名' },
  { prop: 'realname', label: '姓名' },
  { prop: 'cellphone', label: '手机号', minWidth: 130 },
  { prop: 'enable', label: '状态' },
  { prop: 'createAt', label: '创建时间', minWidth: 130 },
  { prop: 'updateAt', label: '更新时间', minWidth: 130 },
  { prop: 'oper', label: '操作', minWidth: 130 }
]
