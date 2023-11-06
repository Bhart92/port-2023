import serviceStyles from '../../pages/services/services.module.scss';

const ServiceCard = ({title, desc, icon, classes, link = false, url}) => {
  console.log(classes)
  const generateCard = (link) => {
    if(link){
      return (
        <a href={url} target="_blank" className={`${serviceStyles.serviceLink} flex flex-col items-center justify-center w-full md:flex-row ${classes} md:my-12`}>
        <div className="flex flex-col w-full md:basis-[35%] 2xl:basis-[50%]">
            <div className="text-2xl text-center font-bold"><h2>{title}</h2></div>
            <div className="w-full flex items-center justify-center my-4 text-center md:text-left">
              <span className="scale-150">{icon}</span>
            </div>
          </div>
          <div className="text-center text-base max-w-[300px] md:max-w-[380px] md:basis-1/2">
            <p className="text-base">{desc}</p>
          </div>
        </a>
        )
    } else {
      return (
        <>
        <div className="flex flex-col w-full md:my-12 md:basis-[35%] 2xl:basis-[50%]">
            <div className="text-2xl text-center font-bold"><h2>{title}</h2></div>
            <div className="w-full flex items-center justify-center my-4 text-center md:text-left">
              <span className="scale-150">
                {icon}
              </span>
            </div>
          </div>
          <div className='text-center text-base max-w-[300px] md:max-w-[380px] md:basis-1/2'><p className="text-base">{desc}</p></div>
          </>
          
      );
    }
  };
  return (
    <article className={`my-6 py-6 px-4 border-black-800 border-solid border-2 flex items-center justify-center flex-col w-full first:mt-0 md:border-transparent ${classes} ${serviceStyles.articleLink} md:w-[100%] md:w-full md:flex-row md:max-w-[100%] `}>
    {generateCard(link)}
    </article>
  )
}

export default ServiceCard;