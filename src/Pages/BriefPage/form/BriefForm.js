import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as PropTypes from 'prop-types'
import { CheckBox, CheckboxSection, InputField, TextArea } from '../../../components/Fields/Input'
import { Button } from '../../../components/MiniBlocks/MiniBlocks'
import Padding from '../../../components/Grid/Padding'

const BriefForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field
        name="firstName"
        placeholder={'Как Вас зовут'}
        component={InputField}
        type="text"
      />
      <Field
        name="about"
        placeholder={'Для чего вам нужен сайт'}
        component={TextArea}
        type="textarea"
      />
      <Field
        name="favorites"
        placeholder={'Перечислите сайты, которые Вам нравятся'}
        component={TextArea}
        type="textarea"
      />
      <Field
        name="favorites"
        placeholder={'Перечислите сайты, которые Вам Не нравятся'}
        component={TextArea}
        type="textarea"
      />
      <CheckboxSection title={'Дополнительный функционал'}>
        <Field
          name={'addition1'}
          component={CheckBox}
          label={'Мобильная версия'}
          type={'checkbox'}
        />
        <Field
          name={'addition2'}
          component={CheckBox}
          label={'Личный кабинет пользователя'}
          type={'checkbox'}
        />
        <Field
          name={'addition3'}
          component={CheckBox}
          label={'CMS'}
          type={'checkbox'}
        />
      </CheckboxSection>
      <Button type="submit">Отправить</Button>
      <Padding desktop={20} mobile={20} />
    </form>
  )
}
const submit = e => {
  console.log(e)
}

BriefForm.propTypes = {handleSubmit: PropTypes.any}
export default reduxForm({
  form: 'brief'
})(BriefForm)
