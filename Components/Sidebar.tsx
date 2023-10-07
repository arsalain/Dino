'use client'
import React,{useState} from 'react'
import classNames from 'classnames';

const Sidebar = () => {

    const [toggleState,setToggleState] = useState(false)
    const wrapperClasses = classNames(
        'h-screen px-4 pt-8 pb-4 bg-side bg-gradient-side bg-cover flex justify-between flex-col',
        {
            ["w-50"]: !toggleState,
            ["w-60"]: toggleState,
        }
    )
  return (
    // <div className={wrapperClasses}>
    //   Sidebar
    // </div>
    <div className='h-screen px-4 pt-8 pb-4 bg-side bg-gradient-side bg-cover flex justify-between flex-col w-58 text-white'>
          <div className="flex items-center pl-1 gap-4">
            <span
              className={classNames("mt-2 text-lg font-medium text-text", {
                hidden: toggleState,
              })}
            >
              Logo
            </span>
          </div>
    </div>
  )
}

export default Sidebar
