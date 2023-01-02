const NavLink2 = ({ href, text, active, Toggler}) => {

    return (
        <button onClick={()=>Toggler() }  className={`w-max h-max ${active ? 'text-portfolio-light' : ''}  group`} >
          {text}
          <div
            className={`${
              active ? 'w-full ' : 'w-0'
            } h-[2px] bg-portfolio-light group-hover:w-full transition-all`}
          />
        </button>
    )
  }
  
  export default NavLink2