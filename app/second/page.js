import Image  from "next/image"

const page = () => {
  return (
   
      <div className="max-w-[1440px] w-full mx-auto ">
        <div className="flex justify-between items-center md:flex-row flex-col bg-[#11071F] text-[white]">
          <div className="  h-full md:w-1/2 w-full max-lg:px-7 ">
            <div className="md:max-w-[70%]  mx-auto md:px-0  md:py-0 max-md:w-[75%]  ">

              <h1 className="lg:text-5xl md:text-3xl  text-2xl font-extrabold pt-[100px] max-w-[440px] max-lg:text-[25px] max-sm:pt-[100px] ">
                        Hello !
              </h1>
              <h1 className="lg:text-5xl md:text-3xl  text-2xl  font-extrabold  pt-2 max-w-[440px] max-lg:text-[25px] ">
                I am <span className="text-blue-800">Laiba Iqbal.
                  
                </span>
              </h1>
              <p className="lg:text-1xl md:text-base text-sm mb-12 mt-12 font-serif  max-lg:text-[15px]">
                I am a passionate and dedicated full-stack web developer with a knak for turning ideas into beautifully functional
                websites and applications. with expertise in both front-end  and back-end technologies, i bring creativity and
                precision to every preject . My commitment to staying up-to-date with the latest industry
                trends and my problem-solving skills make me a valuabe assest in delivering innovative
                digital solutions. let's collaborate and bring your web vision to life

              </p>

            </div>
           
          </div>

          <div className="md:w-1/2 w-full pt-32 pl-36 max-md:pt-5 max-sm:items-center max-sm:mr-[90px]   relative ">
            <Image src="https://www.figma.com/file/X0rloxyNybSrpm7JLQhUs9/image/9d1ac7a9cf62cbbd62d8fe251edece10b3696df6" alt="" className="w-[350px] h-[330px] mb-36" />
            <div className="box2 mt-[-490px] ml-[-100px] absolute  max-sm:ml-[-70px]  max-sm:mt-[-410px]  max-sm:w-[255px] max-sm:h-[250px]  "></div>
          </div>

        </div>
     
      </div>
 
  )
}

export default page