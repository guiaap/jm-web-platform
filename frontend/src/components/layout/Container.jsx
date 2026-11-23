function Container({ className, children }) {

    return (
        <div className={`
            max-w-(--container-content) mx-auto 
            ${className}
        `}>
            {children}
        </div>
    );
}

export default Container;