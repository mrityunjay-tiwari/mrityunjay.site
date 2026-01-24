import Image from "next/image";
import PeopleCard from "./peopleCard";

export default function PeoplePageDisplaySection() {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 w-full gap-12">
        <PeopleCard
          blogImage={
            <Image
              src="https://ik.imagekit.io/mrityunjay/swamiji.jpg"
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
              src="https://ik.imagekit.io/mrityunjay/swamiji.jpg"
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
              src="https://ik.imagekit.io/mrityunjay/swamiji.jpg"
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
              src="https://ik.imagekit.io/mrityunjay/swamiji.jpg"
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
              src="https://ik.imagekit.io/mrityunjay/swamiji.jpg"
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
              src="https://ik.imagekit.io/mrityunjay/swamiji.jpg"
              alt=""
              width={400}
              height={400}
              className="overflow-hidden rounded-t-xl"
            />
          }
          title="-`Swami Vivekananda´-"
          description="His resilience to face the world."
        />
        
      </div>
    </div>
  );
}
