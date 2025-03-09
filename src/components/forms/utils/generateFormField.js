 import FormText from "../formComponents/FormText"

 export const generateFormField = ({
  fieldType,
  register,
  title,
  name,
  index
 }) => {
  switch (fieldType) {
    case 'email':
    case 'password':
    case 'tel':
    case 'text':
      return (
        <FormText 
          register={register} 
          title={title} 
          key={index} 
          fieldType={fieldType}
          name={name}
        />
      )
  }
 }