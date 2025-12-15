'use client'
import { ReactSelectOptions } from '@/types/react-select.type';
import { setInputSelectInputStyles } from '@/utils/ui/setInputSelectStyles';
import React, { FC } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


interface SelectInputProps {
    icon?: React.ElementType,
    options: ReactSelectOptions,
    containerClass?: string,
    iconClass?: string,
    place: string,
    padding?: string | number,
    menuWidth?: string | number,
    isMulti: boolean,
    closeMenuOnSelect: boolean,
    isSearchable: boolean,
    onChangeHandler: (select: any) => void
}

const animatedComponents = makeAnimated()

const SelectInput: FC<SelectInputProps> = ({ onChangeHandler, isSearchable, closeMenuOnSelect, isMulti, place, icon: Icon, containerClass = 'w-full gap-3', iconClass = 'size-5', options, padding = '15px 20px', menuWidth = '100%' }) => {

    return (
        <div className={`${containerClass} cursor-pointer flex items-center text-[10px] lg:text-[12px] neu__inner px-5 rounded-full py-0.5 lg:py-[5px] text-(--alt-text)`}>
            {
                Icon && <Icon className={`${iconClass} text-(--main-text) cursor-pointer`} />
            }
            <div className='grow'>
                <Select
                    placeholder={place}
                    closeMenuOnSelect={closeMenuOnSelect}
                    components={animatedComponents}
                    isMulti={isMulti}
                    options={options}
                    styles={setInputSelectInputStyles({ padding, menuWidth })}
                    unstyled
                    isSearchable={isSearchable}
                    onChange={(selected) => onChangeHandler(selected)}
                />
            </div>
        </div>
    )
}

export default SelectInput