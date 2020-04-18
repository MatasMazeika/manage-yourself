import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Input.scss';

const Input = ({ placeholder, name, onChange }) => {
    const handleChange = useCallback(
        (event) => {
            const {
                target: { name, value },
            } = event;

            onChange(name, value);
        },
        [onChange],
    );

    return (
        <div className='formGroup'>
            <input
                type='input'
                className='formField'
                placeholder={placeholder}
                name={name}
                required
                onChange={handleChange}
            />
            <label htmlFor='name' className='formLabel'>
                {placeholder}
            </label>
        </div>
    );
};

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Input;
