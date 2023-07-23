import { comapnyNames } from "@/data/data";
import CareerCard from "../components/Cards/CareerCard/CareerCard";

const CareerPage = () => {
  return (
    <section id="career">
      <div className="container">
        <h2 className="text-4xl">Industry Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          {comapnyNames.map((companyName) => (
            <CareerCard key={companyName.id} data={companyName} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPage;
