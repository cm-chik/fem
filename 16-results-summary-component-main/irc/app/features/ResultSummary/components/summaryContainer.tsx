const SummaryContainer = (props) => {
  switch (props.category) {
    case "Reaction":
      return (
        <div className="bg-red-100 flex w-full justify-between text-red-500 p-1 px-4 rounded-md">
          {props.children}
        </div>
      );
    case "Memory":
      return (
        <div className="bg-yellow-100 flex w-full justify-between text-yellow-500 p-1 px-4 rounded-md">
          {props.children}
        </div>
      );
    case "Verbal":
      return (
        <div className="bg-green-100 flex w-full justify-between text-green-500 p-1 px-4 rounded-md">
          {props.children}
        </div>
      );
    case "Visual":
      return (
        <div className="bg-blue-100 flex w-full justify-between text-blue-500 p-1 px-4 rounded-md">
          {props.children}
        </div>
      );
  }
};

export default SummaryContainer;
