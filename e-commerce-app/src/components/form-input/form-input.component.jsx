import './form-input.styles.scss';

// spreading ...otherProps one can add many other props on the component
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {/* if we have typed something into input, shrink the label*/}
      {label && ( 
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;