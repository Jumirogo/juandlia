import { getJournalDate } from "../date.js";
import {
    loadJournal,
    saveJournal,
    saveJournalPhoto,
    deleteJournalPhoto,
    watchJournal
} from "../firestore.js";

import { imageToBase64 } from "../image.js";

export function JournalPage() {

    return `

    <div class="journal">

        <div class="journal-header">

            <button id="previous-day">⬅</button>

            <h2 id="journal-date"></h2>

            <button id="next-day">➡</button>

        </div>

        <textarea
            id="journal-text"
            placeholder="Write something together today..."
        ></textarea>

        <div class="journal-photos">

            <div class="photo-slot">

                <h3>Juan</h3>

                <img
                    id="juan-photo"
                    src="https://placehold.co/300x300?text=Juan"
                    alt="Juan's photo"
                >

                <input
                    type="file"
                    id="juan-upload"
                    accept="image/*"
                >

                <button id="juan-flip">
                    Flip
                </button>

                <button id="juan-delete">
                    Delete
                </button>

            </div>

            <div class="photo-slot">

                <h3>Lea</h3>

                <img
                    id="lea-photo"
                    src="https://placehold.co/300x300?text=Lea"
                    alt="Lea's photo"
                >

                <input
                    type="file"
                    id="lea-upload"
                    accept="image/*"
                >

                <button id="lea-flip">
                    Flip
                </button>

                <button id="lea-delete">
                    Delete
                </button>

            </div>

        </div>

    </div>

    `;

}

export async function initJournal() {

    const date = getJournalDate();

    document.getElementById("journal-date").textContent = date;

    const textarea = document.getElementById("journal-text");

    const juanPhoto = document.getElementById("juan-photo");
    const leaPhoto = document.getElementById("lea-photo");

    const juanUpload = document.getElementById("juan-upload");
    const leaUpload = document.getElementById("lea-upload");

    const juanDelete = document.getElementById("juan-delete");
    const leaDelete = document.getElementById("lea-delete");

    const currentUser = sessionStorage.getItem("user");

    // Solo cada usuario puede subir en su propio slot
    if (currentUser === "Juan") {

        leaUpload.disabled = true;

    } else if (currentUser === "Lea") {

        juanUpload.disabled = true;

    }

    // Cargar datos existentes
    const data = await loadJournal(date);

    if (data) {

        textarea.value = data.text || "";

        juanPhoto.src =
            data.juanPhoto || "https://placehold.co/300x300?text=Juan";

        leaPhoto.src =
            data.leaPhoto || "https://placehold.co/300x300?text=Lea";

    }

    // Escuchar cambios en tiempo real
    watchJournal(date, (data) => {

        if (textarea !== document.activeElement) {

            textarea.value = data.text || "";

        }

        juanPhoto.src =
            data.juanPhoto || "https://placehold.co/300x300?text=Juan";

        leaPhoto.src =
            data.leaPhoto || "https://placehold.co/300x300?text=Lea";

    });

    // Guardado automático del texto
    let timeout;

    textarea.addEventListener("input", () => {

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            saveJournal(date, textarea.value);

        }, 800);

    });

    // Subir foto Juan
    juanUpload.addEventListener("change", async (event) => {

        const file = event.target.files[0];

        if (!file) return;

        const image = await imageToBase64(file);

        await saveJournalPhoto(date, "Juan", image);

    });

    // Subir foto Lea
    leaUpload.addEventListener("change", async (event) => {

        const file = event.target.files[0];

        if (!file) return;

        const image = await imageToBase64(file);

        await saveJournalPhoto(date, "Lea", image);

    });

    // Eliminar foto Juan
    juanDelete.addEventListener("click", async () => {

        await deleteJournalPhoto(date, "Juan");

    });

    // Eliminar foto Lea
    leaDelete.addEventListener("click", async () => {

        await deleteJournalPhoto(date, "Lea");

    });

}