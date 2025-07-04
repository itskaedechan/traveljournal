import places from "../data/places.json";

export default function Entry() {
  return (
    <main className="grid grid-rows-3 justify-center max-w-prose mx-auto px-4 py-8">
      {places.map((loc) => (
        <div key={loc.id} className="group min-h-[30px] overflow-auto">
          <img src={loc.img} alt={loc.place} className="place rounded-md" />
          <div className="grid auto-rows-4 gap-0 ml-5 my-[2px] ">
            <div className="destination items-center">
              <img
                src="photos/pin.png"
                alt="marker"
                className="max-w-[15px] max-h-[15px] mr-1"
              />
              <span className="font-100 tracking-[2px]">{loc.place}</span>
              <a
                href={loc.coord}
                className="ml-3 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </div>
            <h2 className="title">{loc.name}</h2>
            <p className="date">{loc.date}</p>
            <p className="text-justify">{loc.info}</p>
            {/* <p>{loc.info}</p> max-w-md */}
          </div>
        </div>
      ))}
    </main>
  );
}
