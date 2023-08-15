
const FormContainer = ({ children }) => {
  return (
    <div className='container flex justify-center'>
        <div className='w-full max-w-xs'>
          {children}
        </div>
    </div>
  );
};

export default FormContainer;