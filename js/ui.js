export function MainLayout() {

    return `

    <div class="app">

        <aside class="sidebar">

            <div class="logo">

                <h1>Our Place</h1>

                <p>Built with love.</p>

            </div>

            <nav>

                <button data-page="home">🏠 Home</button>

                <button data-page="journal">📝 Journal</button>

                <button data-page="gallery">🖼 Memory Wall</button>

                <button data-page="calendar">📅 Calendar</button>

                <button data-page="plans">🌍 Future Plans</button>

                <button data-page="reflections">❤️ Reflections</button>

                <button data-page="activities">🎮 Activities</button>

            </nav>

        </aside>

        <section class="main">

            <header>

                <h2 id="page-title">Home</h2>

            </header>

            <main id="content"></main>

        </section>

    </div>

    `;

}
