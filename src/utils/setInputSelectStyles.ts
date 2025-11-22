import { StylesConfig } from "react-select";

interface InputStylesEntries {
    padding: (string | number)
    menuWidth: (string | number)
}

export const setInputSelectInputStyles = ({ padding, menuWidth }: InputStylesEntries) => {

    const normalStyle: StylesConfig = {
        menu: (styles) => ({
            ...styles,
            width:menuWidth,
            background: 'var(--main-bg)',
            padding: padding,
            borderRadius: '25px',
            boxShadow: '2px 2px 7px var(--shadow-dark),-4px -4px 5px var(--shadow-light)'
        }),
        multiValue: (styles) => ({
            ...styles,
            color: 'var(--main-text)',
            fontWeight: 600,
        }),
        option: (styles, state) => ({
            ...styles,
            padding: '5px 10px',
            borderRadius: 10,
            backgroundColor: state.isFocused ? 'var(--hover-color)' : '',
            color: state.isFocused ? 'whitesmoke' : 'var(--main-text)',
            cursor: 'pointer',
        }),
        input: (styles) => ({
            ...styles,
            color: 'var(--main-text)',
        })

    }

    return normalStyle

}