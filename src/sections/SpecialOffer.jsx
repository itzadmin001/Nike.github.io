import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../Components/Button";


const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} className=" object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin 
        text-4xl capitalize font-bold lg:max-w-lg">
          <span
          className="text-coral-red ">
            Special 
          </span> Offer 
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Built to last, our shoes are crafted from high-quality materials to withstand the test of time. The durable construction ensures longevity, making them a reliable companion for your daily adventures.        </p>
        <p className='mt-6 lg:max-w-lg info-text'> Join us in our commitment to sustainable practices. Our shoes are made with eco-friendly materials, ensuring you can step out in style while minimizing your environmental footprint.</p>
        <div className='mt-11 flex flex-wrap gap-4'>
        <Button label="Shop Now" iconUrl={arrowRight}/>
        <Button label="learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>

        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
