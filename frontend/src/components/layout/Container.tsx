import type { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

function Container({ children }: ContainerProps) {

    return (
        <div className="max-w-(--container-content) mx-auto">
            { children }
        </div>
    );
}

export default Container;