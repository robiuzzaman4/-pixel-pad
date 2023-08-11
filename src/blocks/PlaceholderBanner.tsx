import { placeholderLogos } from "@/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const PlaceholderBanner = () => {
    return (
        <section className="bg-slate-900/40 border-b border-slate-900">
            <div className="pp-container py-20">
                
                <Marquee>
                    {
                        placeholderLogos.map((logo) => (
                            <Image
                            key={logo.iconAlt} 
                            src={logo.iconSrc} 
                            alt={logo.iconAlt}
                            height={100}
                            width={100}
                            className="h-10 mx-12"/>
                        ))
                    }
                </Marquee>
            </div>
        </section>
    );
};

export default PlaceholderBanner;