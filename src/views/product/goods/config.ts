import { IForm } from '@/base-ui/form/types'

const FormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'enable',
      label: '用户状态',
      placeholder: '请选择用户状态',
      iptType: 'select',
      selectOptions: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 }
      ]
    }
  ],
  labelWidth: '100px',
  colLayout: {
    span: 8
  }
}

export default FormConfig

export const propList = [
  { prop: 'name', label: '商品名称', showOverflowTooltip: true },
  { prop: 'oldPrice', label: '原价' },
  { prop: 'newPrice', label: '现价' },
  { prop: 'imgUrl', label: '图片' },
  { prop: 'status', label: '状态' },
  { prop: 'saleCount', label: '销售数量' },
  { prop: 'handler', label: '操作',minWidth: 200 },
]
