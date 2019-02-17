const Header = ({ title }) => (
    <div className="header-container">
        <header>
            <h1>{title}</h1>
        </header>

        <style jsx>{`
            .header-container {
                background-color: rgb(40, 45, 76);
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
            }
            header h1 {
                color: white;
                font-size: 3em;
                letter-spacing: 1px;
            }
        `}</style>
    </div>
);

export default Header;
