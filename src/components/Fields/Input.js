import React from 'react'
import s from './Fields.module.scss'

export const InputField = ({ input, placeholder }) => {
  return (
    <div className={s.input}>
      <div className={input.value ? s.placeholder__active : s.placeholder} >{placeholder}</div>
      <input {...input} />
    </div>
  )
}

export const TextArea = ({ input, placeholder, rows = 3 }) => {
  return (
    <div className={s.input}>
      <div className={input.value ? s.placeholder__active : s.placeholder} >{placeholder}</div>
      <textarea {...{...input, rows}} />
    </div>
  )
}

export const CheckBox = ({ input, label }) => {
  return (
    <label className={s.checkbox}>
      <input type={'checkbox'} {...input} />
      <span>{label}</span>
    </label>
  )
}

export const RadioButton = ({ input }) => {
  return (
    <div className={s.radio}>
      <input type={'checkbox'} {...input} />
    </div>
  )
}

export const CheckboxSection = ({ children, title }) => <div className={s.section}><div className={s.title}>{title}</div>{children}</div>
