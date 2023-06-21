import Image from "next/image";
import planets from "./planets";
import chakras from "./chakras";
import zodiac from "./zodiac";
import elements from "./elements";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { CrystalsQParams } from "../../../../types";

export default function TheFilter(props: { params: CrystalsQParams }) {
  const router = useRouter();
  const handlerFilter = (filter: string, value: any) => {
    console.table({ filter, value });
    const { query, pathname } = router;
    switch (filter) {
      case "zodiac":
        const { zodiac, ...restQuery } = query;
        if (zodiac) {
          let newZodiac = zodiac.toString().split(",");
          if (zodiac.includes(value)) {
            let deleteZodiac = newZodiac.filter((item) => {
              return item != value
            });
            if (deleteZodiac.length == 0) {
              let updatedQuery = {
                ...restQuery,
                page: "1",
              };
              router.push({ pathname, query: updatedQuery });
            } else {
              let updatedQuery = {
                ...restQuery,
                zodiac: deleteZodiac.join(","),
                page: "1",
              };
              router.push({ pathname, query: updatedQuery });
            }
          } else {
            newZodiac.push(value.toString());
            let updatedQuery = {
              ...restQuery,
              zodiac: newZodiac.join(","),
              page: "1",
            };
            router.push({ pathname, query: updatedQuery });
          }
        } else {
          let updatedQuery = {
            ...restQuery,
            zodiac: value.toString(),
            page: "1",
          };
          router.push({ pathname, query: updatedQuery });
        }
        break;
      default:
        break;
    }
  };

  const zodiacList = zodiac.map((item) => {
    return (
      <li key={item.sign}>
        <input
          type="checkbox"
          name="zodiac"
          id={item.sign}
          onInput={() => handlerFilter("zodiac", item.value)}
          onChange={() => handlerFilter("zodiac", item.value)}
          checked={props.params.zodiac?.includes(item.value) || false}
        />
        <Image
          className="icon"
          src={item.icon}
          alt={item.alt}
          width={20}
          height={20}
        />
      </li>
    );
  });

  const elementsList = elements.map((item) => {
    return (
      <li key={item.name}>
        <input type="checkbox" name="element" id={item.name} />
        <Image
          className="icon"
          src={item.icon}
          alt={item.alt}
          width={20}
          height={20}
        />
      </li>
    );
  });

  const planetsList = planets.map((item) => {
    return (
      <li key={item.name}>
        <input type="checkbox" name="planet" id={item.name} />
        <Image
          className="icon"
          src={item.icon}
          alt={item.alt}
          width={20}
          height={20}
        />
      </li>
    );
  });
  const chakrasList = chakras.map((item) => {
    return (
      <li key={item.name}>
        <input type="checkbox" name="chakra" id={item.name} />
        <Image
          className="icon"
          src={item.icon}
          alt={item.alt}
          width={20}
          height={20}
        />
      </li>
    );
  });

  return (
    <section className={styles.filter}>
      <form>
        <div>
          <h2>zodiaco</h2>
          <ul>{zodiacList}</ul>
        </div>
        <h1>{ props.params.zodiac}</h1>
        {/* <div>
          <h2>elemento</h2>
          <ul>{elementsList}</ul>
        </div>
        <div>
          <h2>planeta</h2>
          <ul>{planetsList}</ul>
        </div>
        <div>
          <h2>chakras</h2>
          <ul>{chakrasList}</ul>
        </div> */}
      </form>
    </section>
  );
}
