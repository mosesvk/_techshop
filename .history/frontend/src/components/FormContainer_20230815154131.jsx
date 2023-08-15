
const FormContainer = ({ children }) => {
  return (
    <div className='container'>
      <div className='justify-center'>
        <div >
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;