import Image from "next/image";
import profilePhoto from '/public/assets/myphoto.jpg';

function Hero() {
    return (
        <div>
            <div className="container text-white font-primary mx-auto px-4 py-12 text-center mb-8">
                <h1 className="text-5xl font-bold">Algorithms & Data Structures - Visualised</h1>
                <div className="flex justify-center items-center mt-4">
                    <Image src={profilePhoto} alt={"Profile photo"} width={35} height={35} className={"rounded-full"} />
                    <p className={"text-lg ml-4 text-light"}>By John Pioc</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;