type Slide = {
  title: string;
  description: string;
  imageUrl: string;
  handleDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
};
export const SlideItem = ({ slide }: { slide: Slide }) => {
  return (
    <div
      className="flex flex-col justify-center"
      onDragStart={slide.handleDragStart}
    >
      <div className="w-[95%] p-5 pt-10 md:w-[80%] md:p-10 pr-3 mt-10">
        <h1 className="font-semibold tracking-tight text-stone-50 text-2xl leading-tight md:text-5xl max-w-lg">
          {slide.title}
        </h1>
        <br />
        <p className="text-stone-50 text-md md:text-xl">{slide.description}</p>
      </div>
      {/* <img
        className="w-[45%] mr-[2%] h-[30vh]"
        src={slide.imageUrl}
        alt={slide.title}
      /> */}
    </div>
  );
};
