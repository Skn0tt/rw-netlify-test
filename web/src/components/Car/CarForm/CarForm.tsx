import {
  Form,
  FormError,
  FieldError,
  Label,
  RadioField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditCarById, UpdateCarInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormCar = NonNullable<EditCarById['car']>

interface CarFormProps {
  car?: EditCarById['car']
  onSave: (data: UpdateCarInput, id?: FormCar['id']) => void
  error: RWGqlError
  loading: boolean
}

const CarForm = (props: CarFormProps) => {
  const onSubmit = (data: FormCar) => {
    props.onSave(data, props?.car?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCar> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="manufacturer"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Manufacturer
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="car-manufacturer-0"
            name="manufacturer"
            defaultValue="FORD"
            defaultChecked={props.car?.manufacturer?.includes('FORD')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Ford</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="car-manufacturer-1"
            name="manufacturer"
            defaultValue="TOYOTA"
            defaultChecked={props.car?.manufacturer?.includes('TOYOTA')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Toyota</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="car-manufacturer-2"
            name="manufacturer"
            defaultValue="HONDA"
            defaultChecked={props.car?.manufacturer?.includes('HONDA')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Honda</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="car-manufacturer-3"
            name="manufacturer"
            defaultValue="BMW"
            defaultChecked={props.car?.manufacturer?.includes('BMW')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Bmw</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="car-manufacturer-4"
            name="manufacturer"
            defaultValue="MERCEDES"
            defaultChecked={props.car?.manufacturer?.includes('MERCEDES')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Mercedes</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="car-manufacturer-5"
            name="manufacturer"
            defaultValue="SAAB"
            defaultChecked={props.car?.manufacturer?.includes('SAAB')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Saab</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="car-manufacturer-6"
            name="manufacturer"
            defaultValue="PORSCHE"
            defaultChecked={props.car?.manufacturer?.includes('PORSCHE')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Porsche</div>
        </div>

        <FieldError name="manufacturer" className="rw-field-error" />

        <Label
          name="model"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Model
        </Label>

        <TextField
          name="model"
          defaultValue={props.car?.model}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="model" className="rw-field-error" />

        <Label
          name="color"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Color
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="car-color-0"
            name="color"
            defaultValue="RED"
            defaultChecked={props.car?.color?.includes('RED')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Red</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="car-color-1"
            name="color"
            defaultValue="BLUE"
            defaultChecked={props.car?.color?.includes('BLUE')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Blue</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="car-color-2"
            name="color"
            defaultValue="GREEN"
            defaultChecked={props.car?.color?.includes('GREEN')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Green</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="car-color-3"
            name="color"
            defaultValue="YELLOW"
            defaultChecked={props.car?.color?.includes('YELLOW')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Yellow</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="car-color-4"
            name="color"
            defaultValue="BLACK"
            defaultChecked={props.car?.color?.includes('BLACK')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Black</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="car-color-5"
            name="color"
            defaultValue="WHITE"
            defaultChecked={props.car?.color?.includes('WHITE')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>White</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="car-color-6"
            name="color"
            defaultValue="GREY"
            defaultChecked={props.car?.color?.includes('GREY')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Grey</div>
        </div>

        <FieldError name="color" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CarForm
