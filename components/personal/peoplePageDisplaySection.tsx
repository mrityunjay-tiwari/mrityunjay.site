import Image from "next/image";
import PeopleCard from "./peopleCard";

export default function PeoplePageDisplaySection() {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:gap-12 gap-8">
        <PeopleCard
          blogImage={
            <Image
              src="https://ik.imagekit.io/mrityunjay/people/swamiji.jpg?updatedAt=1769696771807"
              alt=""
              width={400}
              height={400}
              className="overflow-hidden rounded-t-xl"
            />
          }
          title="-`Swami Vivekananda´-"
          description="His resilience to face the world."
        />
        <PeopleCard
          blogImage={
            <Image
              src="https://ik.imagekit.io/mrityunjay/people/kalam-sir.jpg"
              alt=""
              width={400}
              height={400}
              className="overflow-hidden rounded-t-xl"
            />
          }
          title="-`Kalam Sir´-"
          description="His rise from humility to greatness."
        />
        <PeopleCard
          blogImage={
            <Image
              src="https://ik.imagekit.io/mrityunjay/people/Jiddu-Krishnamurti.jpg?updatedAt=1769696759840"
              alt=""
              width={400}
              height={400}
              className="overflow-hidden rounded-t-xl"
            />
          }
          title="-`Jiddu Krishnamurti´-"
          description="His courage to think without authority."
        />
        <PeopleCard
          blogImage={
            <Image
              src="https://ik.imagekit.io/mrityunjay/people/Imtiaz-Ali.jpg?updatedAt=1769696759804"
              alt=""
              width={400}
              height={400}
              className="overflow-hidden rounded-t-xl"
            />
          }
          title="-`Imtiaz Ali´-"
          description="His characters search for meaning."
        />
        <PeopleCard
          blogImage={
            <Image
              src="https://ik.imagekit.io/mrityunjay/people/richard-fenyman.jpg?updatedAt=1769696759665"
              alt=""
              width={400}
              height={400}
              className="overflow-hidden rounded-t-xl"
            />
          }
          title="-`Richard Feynman-"
          description="His joy in understanding things."
        />
      </div>
    </div>
  );
}
