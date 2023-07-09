const FooterTop = ({ data }) => {
  return (
    <div className="flex items-center justify-center border-t-2 w-full py-4">
      {data.map((item) => (
        <div key={item.title} className="flex items-center px-14">
          <div className=" flex flex-col items-end">
            <h3 className="font-bold">{item.title}</h3>
            <p className="w-60 text-right text-gray-400">{item.description}</p>
          </div>
          <div>
            <img className="h-24" src={item.img} alt={item.img} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
