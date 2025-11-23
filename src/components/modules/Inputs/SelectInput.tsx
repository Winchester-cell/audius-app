'use client'
import { setInputSelectInputStyles } from '@/utils/setInputSelectStyles';
import React, { FC } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


interface MultiSelectProps {
    icon?: React.ElementType,
    options: { value: string, label: string }[],
    containerClass?: string,
    iconClass?: string,
    place: string,
    padding?: string | number,
    menuWidth?: string | number,
    isMulti: boolean,
    closeMenuOnSelect: boolean,
    isSearchable: boolean,
}

const animatedComponents = makeAnimated()

const SelectInput: FC<MultiSelectProps> = ({ isSearchable, closeMenuOnSelect, isMulti, place, icon: Icon, containerClass = 'w-full gap-3', iconClass = 'w-5 h-5', options, padding = '15px 20px', menuWidth = '100%' }) => {
    return (
        <div className={`${containerClass} flex items-center neu__inner px-5 rounded-full py-[5px] text-(--alt-text)`}>
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
                />
            </div>
        </div>
    )
}

export default SelectInput