 import FormText from "../formComponents/FormText"

 export const generateFormField = ({
  fieldType,
  register,
  title,
  index
 }) => {
  switch (fieldType) {
    case 'text':
      return (
        <FormText register={register} title={title} key={index}/>
      )
  }
 }