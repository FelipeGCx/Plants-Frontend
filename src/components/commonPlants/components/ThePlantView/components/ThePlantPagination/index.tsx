import Image from "next/image";
import Link from "next/link";
import iconArrowRight from "./assets/arrow-right.svg";
import iconArrowLeft from "./assets/arrow-left.svg";
import styles from "./style.module.scss";
import { PlantsQParams } from "../../../../../../types";
import { useRouter } from "next/router";

export default function ThePlantPagination(props: {
  totalPages: number;
  page: number;
  plantParams: PlantsQParams;
}) {
  const router = useRouter();
  const handlePageChange = (newPage: number) => {
    const { query, pathname } = router;
    const updatedQuery = { ...query, page: newPage.toString() };
    router.push({ pathname, query: updatedQuery });
  };

  const changePage = (direction: number) => {
    let newPage = 1;
    if (direction === 0) {
      newPage = props.page - 1 <= 0 ? 1 : props.page - 1;
    } else {
      newPage =
        props.page + 1 > props.totalPages ? props.totalPages : props.page + 1;
    }
    handlePageChange(newPage);
  };
  return (
    <div className={styles.navsref}>
      <div>
        <Link
          href={{
            pathname: "/plants",
          }}
        >
          Plantas
        </Link>
        {Object.entries(props.plantParams).map(([key, value]) => {
          if (value) {
            return (
              <Link
                key={key}
                href={{
                  pathname: "/plants",
                  query: { [key]: value },
                }}
              >
                {value}
              </Link>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div>
        <button onClick={() => changePage(0)}>
          <Image src={iconArrowLeft} alt="icon arrow left" />
        </button>
        <span>{`${props.page}/${props.totalPages}`}</span>
        <button onClick={() => changePage(1)}>
          <Image src={iconArrowRight} alt="icon arrow right" />
        </button>
      </div>
    </div>
  );
}
