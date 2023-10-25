import { FC } from "react";
import Styles from "./Card.module.scss";
import Image from "next/image";
import { Button } from "..";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ICardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export const Card: FC<ICardProps> = (props) => {
  return (
    <div className={Styles.card_container}>
      <div className={Styles.card_thumbnail_container}>
        <Image
          src={props.thumbnail}
          alt={props.title}
          width={300}
          height={250}
          className={Styles.card_thumbnail}
        />
      </div>

      <h2>{props.title}</h2>

      <h4>{props.description.slice(0, 200)}</h4>

      <Button>
        <Link href={{ pathname: "/posts/postId", query: { postId: props.id } }}>
          Go To Product
        </Link>
      </Button>
    </div>
  );
};
