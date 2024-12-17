function Header(props) {
    return (
        <header
            className="flex"
            style={{
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                background: '#2b3144',
                position: "relative",
                zIndex: 10,
            }}
            >            
            <h1>Interstate Polygraph & Consultation Services</h1>
            {props.children}
        </header>
    );
}

export default Header;