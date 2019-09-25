import Dropdown from './Dropdown';
import '../styles/transaction.css';
import Routes from './Routes';

export default function Transaction() {
    return <div>
        <div className="wrapper">
            <aside className="aside aside-1">
                <h1>Route Preference:</h1>
            </aside>
            <aside className="aside aside-2">
                <Dropdown />
            </aside>
        </div>
        <Routes/>
    </div>
}