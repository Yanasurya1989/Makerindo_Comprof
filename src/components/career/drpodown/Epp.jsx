import Dropdown from './Dropdown'
import './Style.css'

const Epp = () => {
    return (
        <div>
            <h1>Dropdown on Hover</h1>
            <Dropdown title="Hover Me">
                <a className="dropdown-item" href="#">Pilihan 1</a>
                <a className="dropdown-item" href="#">Pilihan 2</a>
                <a className="dropdown-item" href="#">Pilihan 3</a>
            </Dropdown>
        </div>
    );
}

export default Epp;