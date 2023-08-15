
const FormContainer = ({ children }) => {
  return (
    <div className='container'>
      <div className='justify-center'>
        <div className='w-full max-w-xs'  >
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;