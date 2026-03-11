import { useState } from "react"

function AgentNewReport() {

    const [category, setCategory] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [urgency, setUrgency] = useState("high");
    const [file, setFile] = useState<File | null>(null);

    function updateCategory(e: React.ChangeEvent<HTMLInputElement>) {
        setCategory(e.target.value)
    }

    function updateMessage(e: React.ChangeEvent<HTMLInputElement>) {
        setMessage(e.target.value)
    }

    function changeUrgency(e: React.ChangeEvent<HTMLSelectElement>) {
        setUrgency(e.target.value)
    }

    function getFile(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    async function sendReport() {
        const token = localStorage.getItem("token")
        const formData = new FormData()
        formData.append("category", category)
        formData.append("urgency", urgency)
        formData.append("message", message)
        if (file) {
            formData.append("file", file)
        }
        const res = await fetch("http://localhost:3000/report", {
            method: "post",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: formData
        })
        const getResponse = await res.text()
        console.log(getResponse);
    }

    return (
        <div>
            <label htmlFor="category">category</label>
            <input type="text" name="" id="category" onChange={updateCategory} /><br /><br />
            <label htmlFor="urgency">urgency</label>
            <select name="urgency" id="urgency" value={urgency} onChange={changeUrgency}>
                <option value="high_urgency">high</option>
                <option value="medium_urgency">medium</option>
                <option value="low_urgency">low</option>
            </select><br /><br />
            <label htmlFor="message">message:</label>
            <input type="text" name="message" id="message" onChange={updateMessage} /><br /><br />
            <label htmlFor="optionalFile">upload image (optional):</label>
            <input type="file" id="optionalFile" name="optionalFile" onChange={getFile} /><br /><br />
            <button onClick={sendReport}>submit</button>
        </div>
    )
}

export default AgentNewReport