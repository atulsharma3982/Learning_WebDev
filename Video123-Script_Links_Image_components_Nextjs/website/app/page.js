import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-4 size-80 mx-auto bg-amber-300 relative">
      {/* <img className="mx-auto" src="https://imgs.search.brave.com/qtGUeI6nlGllqggCEYHq2yQfLaXquaIWktPfhHKqYWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy93b21hbi13aXRo/LXN1bi1nbGFzc2Vz/LWluLWZsb3dlci1m/aWVsZC1zdW1tZXIt/ZnJlZS1waG90by5q/cGc_dz02MDAmcXVh/bGl0eT04MA" alt="" /> */}
      <Image className="mx-auto object-cover" fill={true} src="https://imgs.search.brave.com/qtGUeI6nlGllqggCEYHq2yQfLaXquaIWktPfhHKqYWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy93b21hbi13aXRo/LXN1bi1nbGFzc2Vz/LWluLWZsb3dlci1m/aWVsZC1zdW1tZXIt/ZnJlZS1waG90by5q/cGc_dz02MDAmcXVh/bGl0eT04MA" alt="image" ></Image>
      
      {/* Image component is better than img because it takes way less storage space, but has less features too basically mandatory height and width property required */}
    </div>
  );
}
