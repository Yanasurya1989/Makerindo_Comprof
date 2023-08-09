const Dropdown = ({title, children}) => {
    return (
        <div className="dropdown">
            <button className="dropdown-toggle font-light uppercase">{title}</button>
            <div className="dropdown-menu font-light uppercase">{children}</div>
        </div>
    );
}

export default Dropdown;