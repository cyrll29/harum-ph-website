 import FormText from "../formComponents/FormText"

 export const generateFormField = ({
  fieldType,
  register,
  title,
  index
 }) => {
  switch (fieldType) {
    case 'email':
    case 'text':
      return (
        <FormText register={register} title={title} key={index} fieldType={fieldType}/>
      )
  }
 }