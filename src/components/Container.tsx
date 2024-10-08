
const Container = ({ children }:{ children: React.ReactNode }) => {
    return (
        <div className="max-w-7xl min-h-screen flex flex-col mx-auto bg-white/[2%]">
            {children}
        </div>
    );
};

export default Container;