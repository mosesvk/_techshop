
const FormContainer = ({ children }) => {
  return (
    <div className='container flex justify-center'>
        <div className='w-full max-w-fit'>
          {children}
        </div>
    </div>
  );
};

export default FormContainer;