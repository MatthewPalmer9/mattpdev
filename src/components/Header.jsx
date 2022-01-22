export default function Header() {
    return (
        <header className="header">
            <div className="brand">
                <a href="/">Matt<span className="brand-p">P</span>Dev</a>
                <ion-icon className="brand-icon" name="code-slash"></ion-icon>
            </div>
            <nav className="main-nav">
                <ul className="main-nav-list">
                    <li>
                        <a class="main-nav-link" href="#">About</a>
                    </li>
                    <li>
                        <a class="main-nav-link" href="#">Projects</a>
                    </li>
                    <li>
                        <a class="main-nav-link" href="#">Testimonials</a>
                    </li>
                    <li>
                        <a class="main-nav-link" href="#">Contact</a>
                    </li>
                    <li>
                        <a class="main-nav-link nav-cta" href="#">
                            Resume
                            <div className="icon">
                                <ion-icon name="download-outline"></ion-icon>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
