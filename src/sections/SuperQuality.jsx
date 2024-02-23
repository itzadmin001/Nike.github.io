import Button from '../Components/Button';
import {shoe8} from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin 
        text-4xl capitalize font-bold lg:max-w-lg">
         We Provide You <span
          className="text-coral-red ">
            Super </span>
          <span className="text-coral-red ">
            Qaulity
          </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Our shoes are designed with your comfort in mind, ensuring each step feels like a cloud beneath your feet. The plush insoles provide superior cushioning for all-day wear, making them perfect for both casual outings and long workdays
        </p>
        <p className='mt-6 lg:max-w-lg info-text'> our dedication to detail and excellence ensures your satisfaction</p>
        <div className='mt-11'>
        <Button label="View details"/>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={shoe8} alt="shoe8" width={570} height={522}  className=' object-contain'/>
      </div>

    </section>
  );
}

export default SuperQuality;
