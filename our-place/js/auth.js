export function PasswordScreen() {

    return `
        <div class="login-screen">

            <h1>❤️ Our Place</h1>

            <h2>Enter password</h2>

            <input
                type="password"
                id="password-input"
                placeholder="Password"
            >

            <button id="password-button">
                Continue
            </button>

        </div>
    `;

}

export function UserScreen() {

    return `
        <div class="login-screen">

            <h1>Who are you?</h1>

            <button id="juan-button">
                Juan
            </button>

            <button id="lea-button">
                Lea
            </button>

        </div>
    `;

}