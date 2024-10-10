import { TABS } from "../redux/actions/type";
import { useDispatch } from 'react-redux';
import { toggleTab } from "../redux/actions";

function Tabs({ currentTab }) {
    const dispatch = useDispatch();

    return (
        <div className="btn-group" role="group">
            {TABS.map(tab => (
                <button
                    key={tab} 
                    className={`btn ${tab === currentTab ? 'btn-dark' : 'btn-outline-dark'}`}
                    onClick={() => dispatch(toggleTab(tab))}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}

export default Tabs;
