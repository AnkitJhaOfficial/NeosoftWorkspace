import { userData } from "./Data";
import '../styles/Card.css'
export default function Card() {

    return (
        <div className="card">
            {userData.map((data) =>
                <div className="person">
                    <div className="person-left">
                        <img src={data.image} alt={data.name} />
                    </div>
                    <div className="person-right mb-2">
                        <div className="person-name mb-2">{data.name}</div> 
                        <div className="">{data.age}</div>
                    </div>
                </div>
            )}
            <button>Clear All</button>

        </div>

    )
}