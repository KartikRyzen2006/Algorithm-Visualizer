function Navbar() {
    return (
        <header className="navbar">

            <div className="navbar-brand">

                <div className="navbar-logo">
                    ◈
                </div>

                <h1>
                    Algorithm <span>Visualizer</span>
                </h1>

            </div>


            <nav className="navbar-links">

                <button>
                    Home
                </button>

                <button>
                    About
                </button>

                <button>
                    GitHub
                </button>

                <button className="theme-toggle">
                    ☀
                    <span className="theme-switch"></span>
                    ☾
                </button>

            </nav>

        </header>
    );
}

export default Navbar;