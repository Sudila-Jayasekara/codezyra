const Container = ({ bgColor, children }) => {
    return (
      <div className={`min-h-screen flex flex-col md:flex-row pl-4 pr-4 md:pl-32 md:pr-32 ${bgColor}`}>
        {children}
      </div>
    );
  };

export default Container;