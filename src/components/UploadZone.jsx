import { useState } from "react";

function UploadZone() {
    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange = (event) => {
        const file = event.target.files[0]

        if (file) {
            setSelectedFile(file);
            console.log("Fichier selectionné :", file)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!selectedFile) {
            alert("Veuillez d'abord sélectionner un fichier !");
            return
        }

        const formData = new FormData();
        formData.append('videoFile', selectedFile);

        console.log("Envoi du FormData au serveur...");

        alert(`Envoi du fichier : ${selectedFile.name}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Ajouter une vidéo</h3>
            <input type="file" accept="video/mp4" onChange={handleFileChange} />
            <button type="submit">Envoyer la video</button>
        </form>
    );
}

export default UploadZone;