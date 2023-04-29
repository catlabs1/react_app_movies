function Footer() {
    return (
        <footer className="page-footer deep-purple accent-1">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} &nbsp; Vadim Danilov &nbsp;
                    <a
                        className="grey-text text-lighten-4 right"
                        href="https://github.com/catlabs1/react_movies"
                    >
                        Repository
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
