export function imageToBase64(file) {

    return new Promise((resolve) => {

        const reader = new FileReader();

        reader.onload = (event) => {

            const img = new Image();

            img.onload = () => {

                const canvas = document.createElement("canvas");

                const MAX_SIZE = 800;

                let width = img.width;
                let height = img.height;

                if (width > height) {

                    if (width > MAX_SIZE) {

                        height *= MAX_SIZE / width;
                        width = MAX_SIZE;

                    }

                } else {

                    if (height > MAX_SIZE) {

                        width *= MAX_SIZE / height;
                        height = MAX_SIZE;

                    }

                }

                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext("2d");

                ctx.drawImage(img, 0, 0, width, height);

                const base64 = canvas.toDataURL(
                    "image/jpeg",
                    0.7
                );

                resolve(base64);

            };

            img.src = event.target.result;

        };

        reader.readAsDataURL(file);

    });

}