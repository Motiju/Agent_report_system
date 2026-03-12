import { useState } from "react"

function AgentCsvUpload() {

    const [csvFile, setCsvFile] = useState<File | null>(null)

    function UpdateCsvFile(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            setCsvFile(e.target.files[0])
        }
    }

    async function sendCsv() {
        const token = localStorage.getItem("token")
        const formData = new FormData()
        console.log(token);
        if (csvFile){
            formData.append("csvFile", csvFile)
        } else {
            return console.log("there is no csv file");
        }
        const res = await fetch("http://localhost:3000/report/csv", {
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
            <label htmlFor="csv_upload">uplaod CSV file: </label>
            <input type="file" onChange={UpdateCsvFile} /><br /><br />
            <button onClick={sendCsv}>submit</button>
        </div>
    )
}

export default AgentCsvUpload