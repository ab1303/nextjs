import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/EventItem.module.css";

export type EventProps = {
  id: number;
  image: any;
  name: string;
  date: Date;
  time: string;
  slug: string;
};

type Props = {
  evt: EventProps;
};

export default function EventItem({ evt }: Props) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          alt="event-image"
          src={
            evt.image
              ? evt.image.formats.thumbnail.url
              : "/images/event-default.png"
          }
          width={170}
          height={100}
        />
      </div>

      <div className={styles.info}>
        <span>
          {new Date(evt.date).toLocaleDateString("en-US")} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>

      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
}