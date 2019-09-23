import EmbedID from "trulioo-react/EmbedID";

export default function Singup() {

    function handleResponse() {
        //TODO
    }
    return <div>
        <EmbedID url='http://localhost:3111' handleResponse={handleResponse} />
    </div>
}

