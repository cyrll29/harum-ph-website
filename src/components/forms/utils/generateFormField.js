 import FormText from "../formComponents/FormText"

 export const generateFormField = ({
  fieldType,
  register,
  errors,
  title,
  name,
  index,
  validate
 }) => {
  switch (fieldType) {
    case 'email':
    case 'password':
    case 'tel':
    case 'number':
    case 'text':
      return (
        <FormText 
          errors={errors}
          register={register} 
          title={title} 
          key={index} 
          fieldType={fieldType}
          name={name}
          validation={validate}
        />
      )
  }
 }